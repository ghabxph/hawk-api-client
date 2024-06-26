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
 * @interface PoolsConfig
 */
export interface PoolsConfig {

    /**
     * The address of the pool.
     *
     * @type {string}
     * @memberof PoolsConfig
     * @example ARwi1S4DaiTG5DX7S4M4ZsrXqpMD1MrTmbu9ue2tpmEq
     */
    address?: string;

    /**
     * The name of the pool.
     *
     * @type {string}
     * @memberof PoolsConfig
     * @example USDC-USDT
     */
    name?: string;

    /**
     * The mint_x value of the pool.
     *
     * @type {string}
     * @memberof PoolsConfig
     * @example EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
     */
    mintX?: string;

    /**
     * The mint_y value of the pool.
     *
     * @type {string}
     * @memberof PoolsConfig
     * @example Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB
     */
    mintY?: string;

    /**
     * The reserve_x value of the pool.
     *
     * @type {string}
     * @memberof PoolsConfig
     * @example 4STreSrMtf8umxyei9DaZG4bX3HT9hE3TGw3Xz41XNHd
     */
    reserveX?: string;

    /**
     * The reserve_y value of the pool.
     *
     * @type {string}
     * @memberof PoolsConfig
     * @example GkTrsQsu8WvrbairmN12aUKk74qHivRNFxaT5YxCECKQ
     */
    reserveY?: string;

    /**
     * The reward_mint_x value of the pool.
     *
     * @type {string}
     * @memberof PoolsConfig
     * @example 11111111111111111111111111111111
     */
    rewardMintX?: string;

    /**
     * The reward_mint_y value of the pool.
     *
     * @type {string}
     * @memberof PoolsConfig
     * @example 11111111111111111111111111111111
     */
    rewardMintY?: string;

    /**
     * The bin_step value of the pool.
     *
     * @type {number}
     * @memberof PoolsConfig
     * @example 1
     */
    binStep?: number;
}
