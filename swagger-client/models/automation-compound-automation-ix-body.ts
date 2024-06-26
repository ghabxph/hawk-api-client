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
 * @interface AutomationCompoundAutomationIxBody
 */
export interface AutomationCompoundAutomationIxBody {

    /**
     * @type {PriorityLevel}
     * @memberof AutomationCompoundAutomationIxBody
     */
    priority?: PriorityLevel;

    /**
     * Optional. Max lamports to consume for priority fee.
     *
     * @type {number}
     * @memberof AutomationCompoundAutomationIxBody
     */
    maxPriorityFee?: number;

    /**
     * Whether to disable computing priority fees. True by default which means it ignores priority parameter.
     *
     * @type {boolean}
     * @memberof AutomationCompoundAutomationIxBody
     */
    disableFeeCompute?: boolean;

    /**
     * User's wallet address who owns the position.
     *
     * @type {string}
     * @memberof AutomationCompoundAutomationIxBody
     */
    userWallet?: string;

    /**
     * Current user's position address from Meteora.
     *
     * @type {string}
     * @memberof AutomationCompoundAutomationIxBody
     */
    position?: string;
}
