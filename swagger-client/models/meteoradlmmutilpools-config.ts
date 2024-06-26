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
 * @interface MeteoradlmmutilpoolsConfig
 */
export interface MeteoradlmmutilpoolsConfig {

    /**
     * The unique address identifier for the pool.
     *
     * @type {string}
     * @memberof MeteoradlmmutilpoolsConfig
     */
    address?: string;

    /**
     * Token mint address for the A asset in the pool.
     *
     * @type {string}
     * @memberof MeteoradlmmutilpoolsConfig
     */
    mintA?: string;

    /**
     * Token mint address for the B asset in the pool.
     *
     * @type {string}
     * @memberof MeteoradlmmutilpoolsConfig
     */
    mintB?: string;

    /**
     * Reserve account address for the A asset.
     *
     * @type {string}
     * @memberof MeteoradlmmutilpoolsConfig
     */
    vaultA?: string;

    /**
     * Reserve account address for the B asset.
     *
     * @type {string}
     * @memberof MeteoradlmmutilpoolsConfig
     */
    vaultB?: string;

    /**
     * Reward mint address for the A asset.
     *
     * @type {string}
     * @memberof MeteoradlmmutilpoolsConfig
     */
    rewardMintA?: string;

    /**
     * Reward mint address for the B asset.
     *
     * @type {string}
     * @memberof MeteoradlmmutilpoolsConfig
     */
    rewardMintB?: string;

    /**
     * The bin step size used in the pool's operation.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsConfig
     */
    binStep?: number;
}
