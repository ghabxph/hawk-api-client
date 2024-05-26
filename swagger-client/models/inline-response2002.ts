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
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {

    /**
     * The address of the token.
     *
     * @type {string}
     * @memberof InlineResponse2002
     * @example EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
     */
    address?: string;

    /**
     * The name of the token.
     *
     * @type {string}
     * @memberof InlineResponse2002
     * @example USD Coin
     */
    name?: string;

    /**
     * The symbol of the token.
     *
     * @type {string}
     * @memberof InlineResponse2002
     * @example USDC
     */
    symbol?: string;

    /**
     * The number of decimal places for the token.
     *
     * @type {number}
     * @memberof InlineResponse2002
     * @example 6
     */
    decimals?: number;

    /**
     * The URL of the token's logo.
     *
     * @type {string}
     * @memberof InlineResponse2002
     * @example https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png
     */
    logo?: string;
}
