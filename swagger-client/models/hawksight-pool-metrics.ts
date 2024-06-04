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

import { HawksightPoolMetricsRewardsBase } from './hawksight-pool-metrics-rewards-base';
import { HawksightPoolMetricsRewardsHawksight } from './hawksight-pool-metrics-rewards-hawksight';
 /**
 * 
 *
 * @export
 * @interface HawksightPoolMetrics
 */
export interface HawksightPoolMetrics {

    /**
     * APR displayed for the pool.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    aprDisplay?: number;

    /**
     * Base APR for the pool.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    aprBase?: number;

    /**
     * Base fee percentage set by pool owner.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    baseFeePercentage?: number;

    /**
     * @type {Array<HawksightPoolMetricsRewardsBase>}
     * @memberof HawksightPoolMetrics
     */
    rewardsBase?: Array<HawksightPoolMetricsRewardsBase>;

    /**
     * @type {Array<HawksightPoolMetricsRewardsHawksight>}
     * @memberof HawksightPoolMetrics
     */
    rewardsHawksight?: Array<HawksightPoolMetricsRewardsHawksight>;

    /**
     * Total value locked in the pool.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    tvl?: number;

    /**
     * Total value locked in the pool from Hawksight.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    tvlHawksight?: number;

    /**
     * Yield generated in the pool over the last 24 hours.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    yield24h?: number;

    /**
     * Trade volume in the pool over the last 24 hours.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    volume24h?: number;

    /**
     * Trade volume in the pool over the last 7 days.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    volume7d?: number;

    /**
     * Trade volume in the pool over the last 1 month.
     *
     * @type {number}
     * @memberof HawksightPoolMetrics
     */
    volume1m?: number;
}
