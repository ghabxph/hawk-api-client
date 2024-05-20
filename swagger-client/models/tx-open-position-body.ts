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
 * @interface TxOpenPositionBody
 */
export interface TxOpenPositionBody {

    /**
     * @type {PriorityLevel}
     * @memberof TxOpenPositionBody
     */
    priority?: PriorityLevel;

    /**
     * Max lamports to consume for priority fee
     *
     * @type {number}
     * @memberof TxOpenPositionBody
     */
    maxPriorityFee?: number;

    /**
     * Whether to disable computing priority fees. True by default which means it ignores priority parameter
     *
     * @type {boolean}
     * @memberof TxOpenPositionBody
     */
    disableFeeCompute?: boolean;

    /**
     * User's wallet address who owns the position
     *
     * @type {string}
     * @memberof TxOpenPositionBody
     */
    userWallet?: string;

    /**
     * User generated random keypair that serve as orca position NFT mint
     *
     * @type {string}
     * @memberof TxOpenPositionBody
     */
    positionMint?: string;

    /**
     * Orca whirlpool address
     *
     * @type {string}
     * @memberof TxOpenPositionBody
     */
    whirlpool?: string;

    /**
     * Orca tick lower index
     *
     * @type {string}
     * @memberof TxOpenPositionBody
     */
    tickLowerIndex?: string;

    /**
     * Orca tick upper index
     *
     * @type {string}
     * @memberof TxOpenPositionBody
     */
    tickUpperIndex?: string;
}
