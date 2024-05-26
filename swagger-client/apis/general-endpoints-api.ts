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
import { InlineResponse2001 } from '../models';
import { InlineResponse2002 } from '../models';
import { InlineResponse400 } from '../models';
import { RegisterBody } from '../models';
import { TransactionMetadata } from '../models';
/**
 * GeneralEndpointsApi - axios parameter creator
 * @export
 */
export const GeneralEndpointsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all pools integrated by Hawksight.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        poolsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pools`;
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
         * Retrieves the user's portfolio based on the provided wallet and optional pool address.
         * @param {string} wallet The unique identifier for the user&#x27;s wallet.
         * @param {string} [pool] The pool address. If not specified, uses default. See /pools endpoint for available pools.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        portfolioGet: async (wallet: string, pool?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wallet' is not null or undefined
            if (wallet === null || wallet === undefined) {
                throw new RequiredError('wallet','Required parameter wallet was null or undefined when calling portfolioGet.');
            }
            const localVarPath = `/portfolio`;
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
        /**
         * Generates a transaction to create a user's program derived address (PDA).
         * @param {RegisterBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerPost: async (body: RegisterBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling registerPost.');
            }
            const localVarPath = `/register`;
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
         * Returns a token supported by Hawksight.
         * @param {string} address The address of the token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenGet: async (address: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'address' is not null or undefined
            if (address === null || address === undefined) {
                throw new RequiredError('address','Required parameter address was null or undefined when calling tokenGet.');
            }
            const localVarPath = `/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (address !== undefined) {
                localVarQueryParameter['address'] = address;
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
         * Returns all tokens supported by Hawksight.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokensGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tokens`;
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
    }
};

/**
 * GeneralEndpointsApi - functional programming interface
 * @export
 */
export const GeneralEndpointsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns all pools integrated by Hawksight.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async poolsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<InlineResponse2001>>>> {
            const localVarAxiosArgs = await GeneralEndpointsApiAxiosParamCreator(configuration).poolsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves the user's portfolio based on the provided wallet and optional pool address.
         * @param {string} wallet The unique identifier for the user&#x27;s wallet.
         * @param {string} [pool] The pool address. If not specified, uses default. See /pools endpoint for available pools.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async portfolioGet(wallet: string, pool?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await GeneralEndpointsApiAxiosParamCreator(configuration).portfolioGet(wallet, pool, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Generates a transaction to create a user's program derived address (PDA).
         * @param {RegisterBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerPost(body: RegisterBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TransactionMetadata>>> {
            const localVarAxiosArgs = await GeneralEndpointsApiAxiosParamCreator(configuration).registerPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a token supported by Hawksight.
         * @param {string} address The address of the token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenGet(address: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2002>>> {
            const localVarAxiosArgs = await GeneralEndpointsApiAxiosParamCreator(configuration).tokenGet(address, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns all tokens supported by Hawksight.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokensGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<InlineResponse2002>>>> {
            const localVarAxiosArgs = await GeneralEndpointsApiAxiosParamCreator(configuration).tokensGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GeneralEndpointsApi - factory interface
 * @export
 */
export const GeneralEndpointsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Returns all pools integrated by Hawksight.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async poolsGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<InlineResponse2001>>> {
            return GeneralEndpointsApiFp(configuration).poolsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the user's portfolio based on the provided wallet and optional pool address.
         * @param {string} wallet The unique identifier for the user&#x27;s wallet.
         * @param {string} [pool] The pool address. If not specified, uses default. See /pools endpoint for available pools.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async portfolioGet(wallet: string, pool?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return GeneralEndpointsApiFp(configuration).portfolioGet(wallet, pool, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates a transaction to create a user's program derived address (PDA).
         * @param {RegisterBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerPost(body: RegisterBody, options?: AxiosRequestConfig): Promise<AxiosResponse<TransactionMetadata>> {
            return GeneralEndpointsApiFp(configuration).registerPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a token supported by Hawksight.
         * @param {string} address The address of the token.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenGet(address: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>> {
            return GeneralEndpointsApiFp(configuration).tokenGet(address, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all tokens supported by Hawksight.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokensGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<InlineResponse2002>>> {
            return GeneralEndpointsApiFp(configuration).tokensGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GeneralEndpointsApi - object-oriented interface
 * @export
 * @class GeneralEndpointsApi
 * @extends {BaseAPI}
 */
export class GeneralEndpointsApi extends BaseAPI {
    /**
     * Returns all pools integrated by Hawksight.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralEndpointsApi
     */
    public async poolsGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<InlineResponse2001>>> {
        return GeneralEndpointsApiFp(this.configuration).poolsGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves the user's portfolio based on the provided wallet and optional pool address.
     * @param {string} wallet The unique identifier for the user&#x27;s wallet.
     * @param {string} [pool] The pool address. If not specified, uses default. See /pools endpoint for available pools.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralEndpointsApi
     */
    public async portfolioGet(wallet: string, pool?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return GeneralEndpointsApiFp(this.configuration).portfolioGet(wallet, pool, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Generates a transaction to create a user's program derived address (PDA).
     * @param {RegisterBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralEndpointsApi
     */
    public async registerPost(body: RegisterBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<TransactionMetadata>> {
        return GeneralEndpointsApiFp(this.configuration).registerPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a token supported by Hawksight.
     * @param {string} address The address of the token.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralEndpointsApi
     */
    public async tokenGet(address: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2002>> {
        return GeneralEndpointsApiFp(this.configuration).tokenGet(address, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns all tokens supported by Hawksight.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralEndpointsApi
     */
    public async tokensGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<InlineResponse2002>>> {
        return GeneralEndpointsApiFp(this.configuration).tokensGet(options).then((request) => request(this.axios, this.basePath));
    }
}
