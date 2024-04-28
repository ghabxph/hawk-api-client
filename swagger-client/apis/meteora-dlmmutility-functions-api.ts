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
import { InlineResponse2001 } from '../models';
import { InlineResponse2005 } from '../models';
import { InlineResponse400 } from '../models';
import { InlineResponse4001 } from '../models';
import { UtilActiveBinBody } from '../models';
/**
 * MeteoraDLMMUtilityFunctionsApi - axios parameter creator
 * @export
 */
export const MeteoraDLMMUtilityFunctionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns Meteora DLMM pool's active bin
         * @param {UtilActiveBinBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        meteoraDlmmUtilActiveBinPost: async (body: UtilActiveBinBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling meteoraDlmmUtilActiveBinPost.');
            }
            const localVarPath = `/meteora/dlmm/util/activeBin`;
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
         * Returns a list of active Meteora DLMM pools with detailed information about each pool.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        meteoraDlmmUtilPoolsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/meteora/dlmm/util/pools`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns Meteora DLMM positions of user
         * @param {string} wallet User&#x27;s wallet address who owns the position
         * @param {string} [pool] Meteora pool address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        meteoraDlmmUtilPositionsGet: async (wallet: string, pool?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wallet' is not null or undefined
            if (wallet === null || wallet === undefined) {
                throw new RequiredError('wallet','Required parameter wallet was null or undefined when calling meteoraDlmmUtilPositionsGet.');
            }
            const localVarPath = `/meteora/dlmm/util/positions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (wallet !== undefined) {
                localVarQueryParameter['wallet'] = wallet;
            }

            if (pool !== undefined) {
                localVarQueryParameter['pool'] = pool;
            }

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

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MeteoraDLMMUtilityFunctionsApi - functional programming interface
 * @export
 */
export const MeteoraDLMMUtilityFunctionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns Meteora DLMM pool's active bin
         * @param {UtilActiveBinBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmUtilActiveBinPost(body: UtilActiveBinBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<{ [key: string]: number; }>>> {
            const localVarAxiosArgs = await MeteoraDLMMUtilityFunctionsApiAxiosParamCreator(configuration).meteoraDlmmUtilActiveBinPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a list of active Meteora DLMM pools with detailed information about each pool.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmUtilPoolsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<InlineResponse2005>>>> {
            const localVarAxiosArgs = await MeteoraDLMMUtilityFunctionsApiAxiosParamCreator(configuration).meteoraDlmmUtilPoolsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns Meteora DLMM positions of user
         * @param {string} wallet User&#x27;s wallet address who owns the position
         * @param {string} [pool] Meteora pool address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmUtilPositionsGet(wallet: string, pool?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2001>>> {
            const localVarAxiosArgs = await MeteoraDLMMUtilityFunctionsApiAxiosParamCreator(configuration).meteoraDlmmUtilPositionsGet(wallet, pool, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MeteoraDLMMUtilityFunctionsApi - factory interface
 * @export
 */
export const MeteoraDLMMUtilityFunctionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Returns Meteora DLMM pool's active bin
         * @param {UtilActiveBinBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmUtilActiveBinPost(body: UtilActiveBinBody, options?: AxiosRequestConfig): Promise<AxiosResponse<{ [key: string]: number; }>> {
            return MeteoraDLMMUtilityFunctionsApiFp(configuration).meteoraDlmmUtilActiveBinPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of active Meteora DLMM pools with detailed information about each pool.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmUtilPoolsGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<InlineResponse2005>>> {
            return MeteoraDLMMUtilityFunctionsApiFp(configuration).meteoraDlmmUtilPoolsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns Meteora DLMM positions of user
         * @param {string} wallet User&#x27;s wallet address who owns the position
         * @param {string} [pool] Meteora pool address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meteoraDlmmUtilPositionsGet(wallet: string, pool?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2001>> {
            return MeteoraDLMMUtilityFunctionsApiFp(configuration).meteoraDlmmUtilPositionsGet(wallet, pool, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MeteoraDLMMUtilityFunctionsApi - object-oriented interface
 * @export
 * @class MeteoraDLMMUtilityFunctionsApi
 * @extends {BaseAPI}
 */
export class MeteoraDLMMUtilityFunctionsApi extends BaseAPI {
    /**
     * Returns Meteora DLMM pool's active bin
     * @param {UtilActiveBinBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeteoraDLMMUtilityFunctionsApi
     */
    public async meteoraDlmmUtilActiveBinPost(body: UtilActiveBinBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<{ [key: string]: number; }>> {
        return MeteoraDLMMUtilityFunctionsApiFp(this.configuration).meteoraDlmmUtilActiveBinPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of active Meteora DLMM pools with detailed information about each pool.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeteoraDLMMUtilityFunctionsApi
     */
    public async meteoraDlmmUtilPoolsGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<InlineResponse2005>>> {
        return MeteoraDLMMUtilityFunctionsApiFp(this.configuration).meteoraDlmmUtilPoolsGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns Meteora DLMM positions of user
     * @param {string} wallet User&#x27;s wallet address who owns the position
     * @param {string} [pool] Meteora pool address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeteoraDLMMUtilityFunctionsApi
     */
    public async meteoraDlmmUtilPositionsGet(wallet: string, pool?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2001>> {
        return MeteoraDLMMUtilityFunctionsApiFp(this.configuration).meteoraDlmmUtilPositionsGet(wallet, pool, options).then((request) => request(this.axios, this.basePath));
    }
}
