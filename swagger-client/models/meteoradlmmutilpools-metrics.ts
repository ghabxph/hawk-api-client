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

import { MeteoradlmmutilpoolsMetricsRewardsBase } from './meteoradlmmutilpools-metrics-rewards-base';
import { MeteoradlmmutilpoolsMetricsRewardsHawksight } from './meteoradlmmutilpools-metrics-rewards-hawksight';
 /**
 * 
 *
 * @export
 * @interface MeteoradlmmutilpoolsMetrics
 */
export interface MeteoradlmmutilpoolsMetrics {

    /**
     * APR displayed for the pool.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    aprDisplay?: number;

    /**
     * Base APR for the pool.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    aprBase?: number;

    /**
     * @type {Array<MeteoradlmmutilpoolsMetricsRewardsBase>}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    rewardsBase?: Array<MeteoradlmmutilpoolsMetricsRewardsBase>;

    /**
     * @type {Array<MeteoradlmmutilpoolsMetricsRewardsHawksight>}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    rewardsHawksight?: Array<MeteoradlmmutilpoolsMetricsRewardsHawksight>;

    /**
     * Total value locked in the pool.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    tvl?: number;

    /**
     * Total value locked in the pool from Hawksight.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    tvlHawksight?: number;

    /**
     * Yield generated in the pool over the last 24 hours.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    yield24h?: number;

    /**
     * Trade volume in the pool over the last 24 hours.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    volume24h?: number;

    /**
     * Trade volume in the pool over the last 7 days.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    volume7d?: number;

    /**
     * Trade volume in the pool over the last 1 month.
     *
     * @type {number}
     * @memberof MeteoradlmmutilpoolsMetrics
     */
    volume1m?: number;
}
