/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.198)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CheckDepositError,
  CreateDepositRequestRequest,
  CreateDepositResponse,
  DepositResponse,
  DepositsResponse,
  InvalidRequestError,
  NotFoundError,
  ObjectNotFoundError,
  PermissionDeniedError,
} from '../models/index';
import {
    CheckDepositErrorFromJSON,
    CheckDepositErrorToJSON,
    CreateDepositRequestRequestFromJSON,
    CreateDepositRequestRequestToJSON,
    CreateDepositResponseFromJSON,
    CreateDepositResponseToJSON,
    DepositResponseFromJSON,
    DepositResponseToJSON,
    DepositsResponseFromJSON,
    DepositsResponseToJSON,
    InvalidRequestErrorFromJSON,
    InvalidRequestErrorToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    ObjectNotFoundErrorFromJSON,
    ObjectNotFoundErrorToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
} from '../models/index';

export interface DepositsCreateRequest {
    createDepositRequestRequest: CreateDepositRequestRequest;
}

export interface DepositsRetrieveRequest {
    depositId: string;
}

/**
 * 
 */
export class DepositsApi extends runtime.BaseAPI {

    /**
     * Create a deposit for authenticated user via third-party processor.  The endpoint will return a 403 if remote deposit capture has not been enabled.   The endpoint can also return a 404 if the `account_id` specified is not associated with an available account.  
     * Create a deposit
     */
    async depositsCreateRaw(requestParameters: DepositsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateDepositResponse>> {
        if (requestParameters['createDepositRequestRequest'] == null) {
            throw new runtime.RequiredError(
                'createDepositRequestRequest',
                'Required parameter "createDepositRequestRequest" was null or undefined when calling depositsCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/deposits/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateDepositRequestRequestToJSON(requestParameters['createDepositRequestRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateDepositResponseFromJSON(jsonValue));
    }

    /**
     * Create a deposit for authenticated user via third-party processor.  The endpoint will return a 403 if remote deposit capture has not been enabled.   The endpoint can also return a 404 if the `account_id` specified is not associated with an available account.  
     * Create a deposit
     */
    async depositsCreate(requestParameters: DepositsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDepositResponse> {
        const response = await this.depositsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the authenticated user\'s check deposits.  This endpoint can return 5xx errors when there are issues connecting to the core or when fetching and provisioning users on the check deposit integration.  Pagination for this endpoint should always return none and the endpoint will always return a list of all available deposits.
     * List deposits
     */
    async depositsListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DepositsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/deposits/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DepositsResponseFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s check deposits.  This endpoint can return 5xx errors when there are issues connecting to the core or when fetching and provisioning users on the check deposit integration.  Pagination for this endpoint should always return none and the endpoint will always return a list of all available deposits.
     * List deposits
     */
    async depositsList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DepositsResponse> {
        const response = await this.depositsListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Fetch a specified deposit by deposit ID. This identifier is defined via the check deposit integration, i.e. Ensenta.
     * Retrieve deposit
     */
    async depositsRetrieveRaw(requestParameters: DepositsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DepositResponse>> {
        if (requestParameters['depositId'] == null) {
            throw new runtime.RequiredError(
                'depositId',
                'Required parameter "depositId" was null or undefined when calling depositsRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/deposits/{deposit_id}/`.replace(`{${"deposit_id"}}`, encodeURIComponent(String(requestParameters['depositId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DepositResponseFromJSON(jsonValue));
    }

    /**
     * Fetch a specified deposit by deposit ID. This identifier is defined via the check deposit integration, i.e. Ensenta.
     * Retrieve deposit
     */
    async depositsRetrieve(requestParameters: DepositsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DepositResponse> {
        const response = await this.depositsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
