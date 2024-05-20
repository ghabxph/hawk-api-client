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

import { PriorityLevel } from './priority-level';
 /**
 * 
 *
 * @export
 * @interface TxCreatePositionAndDepositBody
 */
export interface TxCreatePositionAndDepositBody {

    /**
     * @type {PriorityLevel}
     * @memberof TxCreatePositionAndDepositBody
     */
    priority?: PriorityLevel;

    /**
     * Max lamports to consume for priority fee
     *
     * @type {number}
     * @memberof TxCreatePositionAndDepositBody
     */
    maxPriorityFee?: number;

    /**
     * Whether to disable computing priority fees. True by default which means it ignores priority parameter
     *
     * @type {boolean}
     * @memberof TxCreatePositionAndDepositBody
     */
    disableFeeCompute?: boolean;

    /**
     * Uninitialized account (generate via web3.Keypair.generate() function) that serves as user position
     *
     * @type {string}
     * @memberof TxCreatePositionAndDepositBody
     */
    position?: string;

    /**
     * Meteora pool address
     *
     * @type {string}
     * @memberof TxCreatePositionAndDepositBody
     */
    pool?: string;

    /**
     * User's wallet address who owns the position
     *
     * @type {string}
     * @memberof TxCreatePositionAndDepositBody
     */
    userWallet?: string;

    /**
     * Amount of X tokens to deposit
     *
     * @type {number}
     * @memberof TxCreatePositionAndDepositBody
     */
    totalXAmount?: number;

    /**
     * Amount of Y tokens to deposit
     *
     * @type {number}
     * @memberof TxCreatePositionAndDepositBody
     */
    totalYAmount?: number;

    /**
     * Lower bin range. Must within active range for request to succeed. (see GET /meteora/dlmm/activeBin) to get active range of your selected pool)
     *
     * @type {number}
     * @memberof TxCreatePositionAndDepositBody
     */
    lowerBinRange?: number;

    /**
     * Upper bin range. Must within active range for request to succeed. ((see GET /meteora/dlmm/activeBin) to get active range of your selected pool)
     *
     * @type {number}
     * @memberof TxCreatePositionAndDepositBody
     */
    upperBinRange?: number;

    /**
     * X and Y token distribution. At the moment, we support default meteora distribution functions: SPOT, CURVE, BID-ASK
     *
     * @type {string}
     * @memberof TxCreatePositionAndDepositBody
     */
    distribution?: string;
}
