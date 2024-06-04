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
import { InlineResponse200 } from '../models';
import { InlineResponse2003 } from '../models';
import { InlineResponse400 } from '../models';
import { OrcaPositionMint } from '../models';
/**
 * OrcaUtilityFunctionsApi - axios parameter creator
 * @export
 */
export const OrcaUtilityFunctionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns orca position mint from given position
         * @param {string} [position] Orca position address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orcaUtilGetPositionMintGet: async (position?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/orca/util/getPositionMint`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (position !== undefined) {
                localVarQueryParameter['position'] = position;
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
        /**
         * Returns a list of active Orca whirlpools on Hawksight with detailed information about each pool.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orcaUtilPoolsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/orca/util/pools`;
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
         * Returns Orca positions of user
         * @param {string} wallet User&#x27;s wallet address who owns the position
         * @param {string} [pool] Orca whirlpool address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orcaUtilPositionsGet: async (wallet: string, pool?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wallet' is not null or undefined
            if (wallet === null || wallet === undefined) {
                throw new RequiredError('wallet','Required parameter wallet was null or undefined when calling orcaUtilPositionsGet.');
            }
            const localVarPath = `/orca/util/positions`;
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
 * OrcaUtilityFunctionsApi - functional programming interface
 * @export
 */
export const OrcaUtilityFunctionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns orca position mint from given position
         * @param {string} [position] Orca position address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orcaUtilGetPositionMintGet(position?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<OrcaPositionMint>>> {
            const localVarAxiosArgs = await OrcaUtilityFunctionsApiAxiosParamCreator(configuration).orcaUtilGetPositionMintGet(position, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a list of active Orca whirlpools on Hawksight with detailed information about each pool.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orcaUtilPoolsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<InlineResponse2003>>>> {
            const localVarAxiosArgs = await OrcaUtilityFunctionsApiAxiosParamCreator(configuration).orcaUtilPoolsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns Orca positions of user
         * @param {string} wallet User&#x27;s wallet address who owns the position
         * @param {string} [pool] Orca whirlpool address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orcaUtilPositionsGet(wallet: string, pool?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await OrcaUtilityFunctionsApiAxiosParamCreator(configuration).orcaUtilPositionsGet(wallet, pool, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OrcaUtilityFunctionsApi - factory interface
 * @export
 */
export const OrcaUtilityFunctionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Returns orca position mint from given position
         * @param {string} [position] Orca position address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orcaUtilGetPositionMintGet(position?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<OrcaPositionMint>> {
            return OrcaUtilityFunctionsApiFp(configuration).orcaUtilGetPositionMintGet(position, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of active Orca whirlpools on Hawksight with detailed information about each pool.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orcaUtilPoolsGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<InlineResponse2003>>> {
            return OrcaUtilityFunctionsApiFp(configuration).orcaUtilPoolsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns Orca positions of user
         * @param {string} wallet User&#x27;s wallet address who owns the position
         * @param {string} [pool] Orca whirlpool address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orcaUtilPositionsGet(wallet: string, pool?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return OrcaUtilityFunctionsApiFp(configuration).orcaUtilPositionsGet(wallet, pool, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrcaUtilityFunctionsApi - object-oriented interface
 * @export
 * @class OrcaUtilityFunctionsApi
 * @extends {BaseAPI}
 */
export class OrcaUtilityFunctionsApi extends BaseAPI {
    /**
     * Returns orca position mint from given position
     * @param {string} [position] Orca position address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrcaUtilityFunctionsApi
     */
    public async orcaUtilGetPositionMintGet(position?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<OrcaPositionMint>> {
        return OrcaUtilityFunctionsApiFp(this.configuration).orcaUtilGetPositionMintGet(position, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of active Orca whirlpools on Hawksight with detailed information about each pool.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrcaUtilityFunctionsApi
     */
    public async orcaUtilPoolsGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<InlineResponse2003>>> {
        return OrcaUtilityFunctionsApiFp(this.configuration).orcaUtilPoolsGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns Orca positions of user
     * @param {string} wallet User&#x27;s wallet address who owns the position
     * @param {string} [pool] Orca whirlpool address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrcaUtilityFunctionsApi
     */
    public async orcaUtilPositionsGet(wallet: string, pool?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return OrcaUtilityFunctionsApiFp(this.configuration).orcaUtilPositionsGet(wallet, pool, options).then((request) => request(this.axios, this.basePath));
    }
}
