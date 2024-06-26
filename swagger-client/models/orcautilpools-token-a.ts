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
 * Detailed information about token A in the pool.
 *
 * @export
 * @interface OrcautilpoolsTokenA
 */
export interface OrcautilpoolsTokenA {

    /**
     * Mint address for token A.
     *
     * @type {string}
     * @memberof OrcautilpoolsTokenA
     */
    mint?: string;

    /**
     * Symbol for token A.
     *
     * @type {string}
     * @memberof OrcautilpoolsTokenA
     */
    symbol?: string;

    /**
     * Full name of token A.
     *
     * @type {string}
     * @memberof OrcautilpoolsTokenA
     */
    name?: string;

    /**
     * Number of decimals used by token A.
     *
     * @type {number}
     * @memberof OrcautilpoolsTokenA
     */
    decimals?: number;

    /**
     * URI to the token logo.
     *
     * @type {string}
     * @memberof OrcautilpoolsTokenA
     */
    logoURI?: string;

    /**
     * CoinGecko identifier for the token.
     *
     * @type {string}
     * @memberof OrcautilpoolsTokenA
     */
    coingeckoId?: string;

    /**
     * Indicates if token A is whitelisted.
     *
     * @type {boolean}
     * @memberof OrcautilpoolsTokenA
     */
    whitelisted?: boolean;

    /**
     * Indicates if token A is a pool token.
     *
     * @type {boolean}
     * @memberof OrcautilpoolsTokenA
     */
    poolToken?: boolean;
}
