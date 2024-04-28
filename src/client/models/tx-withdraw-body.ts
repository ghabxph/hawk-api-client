/* tslint:disable */
/* eslint-disable */
/**
 * Hawksight API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface TxWithdrawBody
 */
export interface TxWithdrawBody {

    /**
     * Transaction priority (Default, Low, Medium, High, VeryHigh, UnsafeMax, None)
     *
     * @type {string}
     * @memberof TxWithdrawBody
     */
    priority?: string;

    /**
     * Max lamports to consume for priority fee
     *
     * @type {number}
     * @memberof TxWithdrawBody
     */
    maxPriorityFee?: number;

    /**
     * User's position from Meteora (See GET /meteora/dlmm/util/positions).
     *
     * @type {string}
     * @memberof TxWithdrawBody
     */
    position?: string;

    /**
     * User's wallet address who owns the position.
     *
     * @type {string}
     * @memberof TxWithdrawBody
     */
    userWallet?: string;

    /**
     * Amount of X and Y tokens to withdraw (in bps percentage). Example: 50% means 50 * 100 = 5000 amountBps.
     *
     * @type {number}
     * @memberof TxWithdrawBody
     */
    amountBps?: number;

    /**
     * Whether to generate claim swap, rewards, and close position instruction. Accepts \"true\" or \"false\" only.
     *
     * @type {boolean}
     * @memberof TxWithdrawBody
     */
    shouldClaimAndClose?: boolean;
}
