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
 * @interface TxDepositBody
 */
export interface TxDepositBody {

    /**
     * Transaction priority (Default, Low, Medium, High, VeryHigh, UnsafeMax, None)
     *
     * @type {string}
     * @memberof TxDepositBody
     */
    priority?: string;

    /**
     * Max lamports to consume for priority fee
     *
     * @type {number}
     * @memberof TxDepositBody
     */
    maxPriorityFee?: number;

    /**
     * Whether to disable computing priority fees. True by default which means it ignores priority parameter
     *
     * @type {boolean}
     * @memberof TxDepositBody
     */
    disableFeeCompute?: boolean;

    /**
     * User's position from meteora (See GET /meteora/dlmm/util/positions)
     *
     * @type {string}
     * @memberof TxDepositBody
     */
    position?: string;

    /**
     * User's wallet address who owns the position
     *
     * @type {string}
     * @memberof TxDepositBody
     */
    userWallet?: string;

    /**
     * Amount of X tokens to deposit
     *
     * @type {number}
     * @memberof TxDepositBody
     */
    totalXAmount?: number;

    /**
     * Amount of Y tokens to deposit
     *
     * @type {number}
     * @memberof TxDepositBody
     */
    totalYAmount?: number;

    /**
     * X and Y token distribution. At the moment, we support default meteora distribution functions: SPOT, CURVE, BID-ASK
     *
     * @type {string}
     * @memberof TxDepositBody
     */
    distribution?: string;
}
