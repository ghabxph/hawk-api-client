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

import { Balance } from './balance';
 /**
 * 
 *
 * @export
 * @interface UserPositionBalances
 */
export interface UserPositionBalances {

    /**
     * @type {Array<Balance>}
     * @memberof UserPositionBalances
     */
    balances?: Array<Balance>;

    /**
     * @type {Array<Balance>}
     * @memberof UserPositionBalances
     */
    fees?: Array<Balance>;

    /**
     * @type {Array<Balance>}
     * @memberof UserPositionBalances
     */
    rewards?: Array<Balance>;
}