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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AutomationClaimFeeAndRewardsAutomationIxBody } from '../models';
import { AutomationCreatePositionAndDepositAutomationIxBody } from '../models';
import { AutomationFullWithdrawAndClosePositionAutomationIxBody } from '../models';
import { InlineResponse2004 } from '../models';
import { InlineResponse4001 } from '../models';
/**
 * MeteoraDLMMAutomationInstructionsApi - axios parameter creator
 * @export
 */
export const MeteoraDLMMAutomationInstructionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generate claimFee and claimReward instruction, to be signed by Hawksight authority.
         * @param {AutomationClaimFeeAndRewardsAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        meteoraDlmmAutomationClaimFeeAndRewardsAutomationIxPost: async (body: AutomationClaimFeeAndRewardsAutomationIxBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling meteoraDlmmAutomationClaimFeeAndRewardsAutomationIxPost.');
            }
            const localVarPath = `/meteora/dlmm/automation/claimFeeAndRewardsAutomationIx`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Generate deposit Meteora instruction (with init position), to be signed by Hawksight authority.
         * @param {AutomationCreatePositionAndDepositAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        meteoraDlmmAutomationCreatePositionAndDepositAutomationIxPost: async (body: AutomationCreatePositionAndDepositAutomationIxBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling meteoraDlmmAutomationCreatePositionAndDepositAutomationIxPost.');
            }
            const localVarPath = `/meteora/dlmm/automation/createPositionAndDepositAutomationIx`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Generate full Meteora withdraw instruction, to be signed by Hawksight authority.
         * @param {AutomationFullWithdrawAndClosePositionAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        meteoraDlmmAutomationFullWithdrawAndClosePositionAutomationIxPost: async (body: AutomationFullWithdrawAndClosePositionAutomationIxBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling meteoraDlmmAutomationFullWithdrawAndClosePositionAutomationIxPost.');
            }
            const localVarPath = `/meteora/dlmm/automation/fullWithdrawAndClosePositionAutomationIx`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MeteoraDLMMAutomationInstructionsApi - functional programming interface
 * @export
 */
export const MeteoraDLMMAutomationInstructionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Generate claimFee and claimReward instruction, to be signed by Hawksight authority.
         * @param {AutomationClaimFeeAndRewardsAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmAutomationClaimFeeAndRewardsAutomationIxPost(body: AutomationClaimFeeAndRewardsAutomationIxBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2004>>> {
            const localVarAxiosArgs = await MeteoraDLMMAutomationInstructionsApiAxiosParamCreator(configuration).meteoraDlmmAutomationClaimFeeAndRewardsAutomationIxPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Generate deposit Meteora instruction (with init position), to be signed by Hawksight authority.
         * @param {AutomationCreatePositionAndDepositAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmAutomationCreatePositionAndDepositAutomationIxPost(body: AutomationCreatePositionAndDepositAutomationIxBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2004>>> {
            const localVarAxiosArgs = await MeteoraDLMMAutomationInstructionsApiAxiosParamCreator(configuration).meteoraDlmmAutomationCreatePositionAndDepositAutomationIxPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Generate full Meteora withdraw instruction, to be signed by Hawksight authority.
         * @param {AutomationFullWithdrawAndClosePositionAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmAutomationFullWithdrawAndClosePositionAutomationIxPost(body: AutomationFullWithdrawAndClosePositionAutomationIxBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2004>>> {
            const localVarAxiosArgs = await MeteoraDLMMAutomationInstructionsApiAxiosParamCreator(configuration).meteoraDlmmAutomationFullWithdrawAndClosePositionAutomationIxPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MeteoraDLMMAutomationInstructionsApi - factory interface
 * @export
 */
export const MeteoraDLMMAutomationInstructionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Generate claimFee and claimReward instruction, to be signed by Hawksight authority.
         * @param {AutomationClaimFeeAndRewardsAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmAutomationClaimFeeAndRewardsAutomationIxPost(body: AutomationClaimFeeAndRewardsAutomationIxBody, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2004>> {
            return MeteoraDLMMAutomationInstructionsApiFp(configuration).meteoraDlmmAutomationClaimFeeAndRewardsAutomationIxPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Generate deposit Meteora instruction (with init position), to be signed by Hawksight authority.
         * @param {AutomationCreatePositionAndDepositAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmAutomationCreatePositionAndDepositAutomationIxPost(body: AutomationCreatePositionAndDepositAutomationIxBody, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2004>> {
            return MeteoraDLMMAutomationInstructionsApiFp(configuration).meteoraDlmmAutomationCreatePositionAndDepositAutomationIxPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Generate full Meteora withdraw instruction, to be signed by Hawksight authority.
         * @param {AutomationFullWithdrawAndClosePositionAutomationIxBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmAutomationFullWithdrawAndClosePositionAutomationIxPost(body: AutomationFullWithdrawAndClosePositionAutomationIxBody, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2004>> {
            return MeteoraDLMMAutomationInstructionsApiFp(configuration).meteoraDlmmAutomationFullWithdrawAndClosePositionAutomationIxPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MeteoraDLMMAutomationInstructionsApi - object-oriented interface
 * @export
 * @class MeteoraDLMMAutomationInstructionsApi
 * @extends {BaseAPI}
 */
export class MeteoraDLMMAutomationInstructionsApi extends BaseAPI {
    /**
     * Generate claimFee and claimReward instruction, to be signed by Hawksight authority.
     * @param {AutomationClaimFeeAndRewardsAutomationIxBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeteoraDLMMAutomationInstructionsApi
     */
    public async meteoraDlmmAutomationClaimFeeAndRewardsAutomationIxPost(body: AutomationClaimFeeAndRewardsAutomationIxBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2004>> {
        return MeteoraDLMMAutomationInstructionsApiFp(this.configuration).meteoraDlmmAutomationClaimFeeAndRewardsAutomationIxPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Generate deposit Meteora instruction (with init position), to be signed by Hawksight authority.
     * @param {AutomationCreatePositionAndDepositAutomationIxBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeteoraDLMMAutomationInstructionsApi
     */
    public async meteoraDlmmAutomationCreatePositionAndDepositAutomationIxPost(body: AutomationCreatePositionAndDepositAutomationIxBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2004>> {
        return MeteoraDLMMAutomationInstructionsApiFp(this.configuration).meteoraDlmmAutomationCreatePositionAndDepositAutomationIxPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Generate full Meteora withdraw instruction, to be signed by Hawksight authority.
     * @param {AutomationFullWithdrawAndClosePositionAutomationIxBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeteoraDLMMAutomationInstructionsApi
     */
    public async meteoraDlmmAutomationFullWithdrawAndClosePositionAutomationIxPost(body: AutomationFullWithdrawAndClosePositionAutomationIxBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2004>> {
        return MeteoraDLMMAutomationInstructionsApiFp(this.configuration).meteoraDlmmAutomationFullWithdrawAndClosePositionAutomationIxPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
