import * as web3 from "@solana/web3.js";
import * as _client from "@hawksightco/swagger-client";
import { ResponseWithStatus, TransactionMetadata, TransactionMetadataResponse, TransactionPriority } from "../types";
import { Client } from "./Client";
import { createTxMetadata, resultOrError } from "../functions";
import { GeneralUtility } from "./GeneralUtility";

/**
 * The `TxGenerator` class encapsulates methods to generate transactions with various trading operations
 * on decentralized market making platforms like Meteora and Orca within the Solana ecosystem. It allows
 * setting custom transaction priority and fees to manage transaction processing speed and cost.
 */
export class TxGenerator {

  /**
   * The current priority level of transactions generated by this instance.
   */
  protected priorityLevel: _client.PriorityLevel;

  /**
   * The maximum priority fee in lamports that can be added to transactions for faster processing.
   */
  protected maxPriorityFee: number;

  /**
   * Initializes a new instance of the TxGenerator class with a specified client.
   * 
   * @param client An instance of Client used to interact with various APIs for transaction generation.
   */
  constructor(
    private readonly client: Client,
    private readonly generalUtility: GeneralUtility,
  ) {
    this.priorityLevel = _client.PriorityLevel.Default;
    this.maxPriorityFee = 500_000; // Default max priority fee in lamports
  }

  /**
   * Sets the priority level of the transaction.
   *
   * @param priorityLevel The desired transaction priority level.
   */
  setPriorityLevel(priorityLevel: _client.PriorityLevel): void {
    this.priorityLevel = priorityLevel;
  }

  /**
   * Sets the maximum priority fee for the transaction.
   *
   * @param maxPriorityFee The maximum priority fee in lamports.
   */
  setMaxPriorityFee(maxPriorityFee: number): void {
    this.maxPriorityFee = maxPriorityFee;
  }

  /**
   * Creates meteora instruction that creates new position and deposit.
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async meteoraCreatePositionAndDeposit(connection: web3.Connection, payer: string, params: _client.TxCreatePositionAndDepositBody): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.meteoraDLMMInstructionsApi.meteoraDlmmTxCreatePositionAndDepositPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates meteora instruction that deposits to position.
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async meteoraDeposit(connection: web3.Connection, payer: string, params: _client.TxDepositBody): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.meteoraDLMMInstructionsApi.meteoraDlmmTxDepositPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates meteora instruction withdraws from a position.
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async meteoraWithdraw(connection: web3.Connection, payer: string, params: _client.TxWithdrawBody): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.meteoraDLMMInstructionsApi.meteoraDlmmTxWithdrawPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates meteora instruction that claims fees and rewards.
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async meteoraClaim(connection: web3.Connection, payer: string, params: _client.TxClaimBody): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.meteoraDLMMInstructionsApi.meteoraDlmmTxClaimPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates meteora instruction that closes position.
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async meteoraClosePosition(connection: web3.Connection, payer: string, params: _client.TxClosePositionBody): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.meteoraDLMMInstructionsApi.meteoraDlmmTxClosePositionPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates orca instruction that opens new position
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async orcaOpenPosition(connection: web3.Connection, payer: string, params: _client.TxOpenPositionBody): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.orcaCLMMInstructionsApi.orcaTxOpenPositionPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates orca instruction that closes position
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async orcaClosePosition(connection: web3.Connection, payer: string, params: _client.TxClosePositionBody1): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.orcaCLMMInstructionsApi.orcaTxClosePositionPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates orca instruction that deposits to a position
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async orcaDeposit(connection: web3.Connection, payer: string, params: _client.TxDepositBody1): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.orcaCLMMInstructionsApi.orcaTxDepositPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates orca instruction that withdraws from a position
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async orcaWithdraw(connection: web3.Connection, payer: string, params: _client.TxWithdrawBody1): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.orcaCLMMInstructionsApi.orcaTxWithdrawPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }

  /**
   * Creates orca instruction that claims fees and rewards
   *
   * @param connection The Solana web3 connection object for blockchain interactions.
   * @param payer The public key of the payer for transaction fees.
   * @param params Parameters required
   * @returns A ResponseWithStatus containing either TransactionMetadataResponse or TransactionMetadata.
   */
  async orcaClaimRewards(connection: web3.Connection, payer: string, params: _client.TxClaimRewardsBody): Promise<ResponseWithStatus<TransactionMetadata>> {
    const result = await this.client.orcaCLMMInstructionsApi.orcaTxClaimRewardsPost(params).catch(e => e.response);
    return resultOrError<TransactionMetadataResponse, TransactionMetadata>(
      {
        status: result.status,
        data: result.data,
      },
      async (data) => await createTxMetadata(this.generalUtility, connection, payer, data, this.priorityLevel, this.maxPriorityFee),
    );
  }
}