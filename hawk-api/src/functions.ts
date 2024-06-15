import * as client from "@hawksightco/swagger-client";
import * as web3 from "@solana/web3.js";
import { ResponseWithStatus, TransactionMetadata, TransactionMetadataResponse, TransactionPriority } from "./types";
import bs58 from "bs58";
import { Transaction } from "./classes/Transaction";
import { GeneralUtility } from "./classes/GeneralUtility";

/**
 * Asynchronously creates transaction metadata based on the provided transaction parameters and network state.
 * This includes constructing a transaction with given instructions, calculating fees, and optionally handling priority fees.
 *
 * @param connection The active Solana blockchain connection used to fetch state and simulate the transaction.
 * @param payer The public key (as a string) of the payer for the transaction, responsible for fees.
 * @param data An object containing necessary information to construct the transaction, such as:
 *        - addressLookupTableAddresses: Array of addresses for lookup tables.
 *        - computeBudgetInstructions: Array of instructions for setting compute budget.
 *        - description: Description of the transaction.
 *        - estimatedFeeInSOL: Estimated fee in SOL units.
 * @param priorityLevel An enum representing the priority level of the transaction which might influence the fee.
 * @param maxPriorityFee The maximum priority fee willing to be paid on top of the base fee for faster processing (in lamports)
 * @returns A promise resolving to an object containing the transaction metadata including the description,
 *          estimated fee, and the transaction object itself.
 * @throws Error if there is an issue in constructing the transaction or during simulation which includes logs of errors.
 */
export async function createTxMetadata(
  generalUtility: GeneralUtility,
  connection: web3.Connection,
  payer: string,
  data: TransactionMetadataResponse,
  priorityLevel: client.PriorityLevel,
  maxPriorityFee: number,
): Promise<TransactionMetadata> {
  // Retrieve address lookup table accounts
  const alts: web3.AddressLookupTableAccount[] = [];

  // Find jup alts
  const jupAlts = await generalUtility.findAltWithTxPost({
    transaction: data,
  });

  for (const alt of data.addressLookupTableAddresses) {
    alts.push(
      (await connection.getAddressLookupTable(new web3.PublicKey(alt))).value as web3.AddressLookupTableAccount
    );
  }

  if (jupAlts.status === 200) {
    for (const alt of jupAlts.data) {
      alts.push(
        (await connection.getAddressLookupTable(new web3.PublicKey(alt))).value as web3.AddressLookupTableAccount
      );
    }
  } else {
    console.error(jupAlts.data);
  }

  // Get the recent blockhash
  const latestBlockhash = await connection.getLatestBlockhash();

  // Create initial transaction instance
  const transaction = new Transaction(
    data,
    new web3.PublicKey(payer),
    latestBlockhash,
    alts,
    generalUtility,
  );

  // // Simulate transaction to get consumed units
  // const simulation = await transaction.simulateTransaction(connection);

  // // Check if there's error in transaction
  // if (simulation.err !== null) {
  //   console.log(`Transaction Error: ${simulation.err}`);
  //   for (const log of simulation.logs as string[]) {
  //     console.log(log);
  //   }
  //   // throw new Error(simulation.err.toString());
  // }

  // // Include priority fee instructions generated via Helius (assuming we use Helius as RPC)
  // transaction.addPriorityFeeIx(connection, priorityLevel, simulation.unitsConsumed, maxPriorityFee);

  // Return transaction metadatauni
  return {
    description: data.description,
    estimatedFeeInSOL: data.estimatedFeeInSOL,
    transaction,
  };
}

/**
 * Wraps the result of an API call or operation in an object containing status information.
 * If the result status is 200, applies a success function to the data.
 * @param result The result object containing the HTTP status code and response data.
 * @param successFn A function to be applied to the response data in case of success.
 * @returns A promise that resolves to an object containing status information and the transformed or original response data.
 * The response data may be of type Out if the success function is applied, or type Response if not.
 */
export async function resultOrError<Response, Out>(
  result: { status: number, data: Response },
  successFn: (data: Response) => Promise<Out>
): Promise<ResponseWithStatus<Out>> {
  if (result.status === 200) {
    // If the status is 200, apply the success function to the data
    return {
      status: result.status,
      data: await successFn(result.data),
    };
  } else {
    console.error(`Error:`)
    console.error(result.data);
    throw new Error();
  }
}

/**
 * Retrieves an estimate of the priority fee for a transaction using the provided connection.
 *
 * @param connection The web3 connection object used for interacting with the blockchain.
 * @param priorityLevel The priority level of the transaction.
 * @param versionedTransaction The versioned transaction object for which the fee estimate is needed.
 * @returns A Promise resolving to the estimated priority fee for the transaction.
 */
export async function getFeeEstimate(
  generalUtility: GeneralUtility,
  priority: client.PriorityLevel,
  transaction: TransactionMetadataResponse
): Promise<number> {
  const response = await generalUtility.getPriorityFeeEstimate({
    priority,
    transaction,
  });
  return (await resultOrError<client.PriorityFeeEstimate, number>(
    response,
    async (result) => {
      let priorityFee: number;
      if (priority === client.PriorityLevel.Default || priority === client.PriorityLevel.Medium) {
        priorityFee = result.feeLevels!._default as number;
      } else if (priority === client.PriorityLevel.High) {
        priorityFee = result.feeLevels!.high as number;
      } else if (priority === client.PriorityLevel.VeryHigh) {
        priorityFee = result.feeLevels!.high as number;
      } else {
        const max = result.feeLevels!._default as number;
        const min = result.feeLevels!.low as number;
        priorityFee = min + ((max - min) / 2);

      }
      return result.priorityFeeEstimate as number
    },
  )).data
}
