/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.241)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  AchTransactionRequest,
  NestedScheduledTransfer,
  NotFoundError,
  PaginatedAchTransactionList,
  PaginatedScheduledTransferList,
  RetrieveAchTransaction,
  ScheduledTransferRequest,
  TransfersCreate422Response,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    AchTransactionRequestFromJSON,
    AchTransactionRequestToJSON,
    NestedScheduledTransferFromJSON,
    NestedScheduledTransferToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    PaginatedAchTransactionListFromJSON,
    PaginatedAchTransactionListToJSON,
    PaginatedScheduledTransferListFromJSON,
    PaginatedScheduledTransferListToJSON,
    RetrieveAchTransactionFromJSON,
    RetrieveAchTransactionToJSON,
    ScheduledTransferRequestFromJSON,
    ScheduledTransferRequestToJSON,
    TransfersCreate422ResponseFromJSON,
    TransfersCreate422ResponseToJSON,
} from '../models/index';

export interface ScheduledTransferListRequest {
    isExpired?: boolean;
    page?: number;
    perPage?: number;
}

export interface TransfersCreateRequest {
    achTransactionRequest: AchTransactionRequest;
}

export interface TransfersListRequest {
    filter?: TransfersListFilterEnum;
    page?: number;
    perPage?: number;
}

export interface TransfersScheduledCreateRequest {
    scheduledTransferRequest: ScheduledTransferRequest;
}

export interface TransfersScheduledUpdateRequest {
    scheduledTransferRequest: ScheduledTransferRequest;
}

/**
 * 
 */
export class TransfersApi extends runtime.BaseAPI {

    /**
     * List the authenticated user\'s scheduled transfers.
     * List scheduled transfers
     */
    async scheduledTransferListRaw(requestParameters: ScheduledTransferListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedScheduledTransferList>> {
        const queryParameters: any = {};

        if (requestParameters['isExpired'] != null) {
            queryParameters['is_expired'] = requestParameters['isExpired'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['perPage'] != null) {
            queryParameters['per_page'] = requestParameters['perPage'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/transfers/scheduled/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedScheduledTransferListFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s scheduled transfers.
     * List scheduled transfers
     */
    async scheduledTransferList(requestParameters: ScheduledTransferListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedScheduledTransferList> {
        const response = await this.scheduledTransferListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Transfer funds between two accounts. The target accounts should be either an account at the financial institution belonging to the user or a verified external account.  A list of eligible accounts can be retrieved or listed from the <a href=\"#tag/accounts\">accounts endpoints</a>.
     * Create a transfer
     */
    async transfersCreateRaw(requestParameters: TransfersCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RetrieveAchTransaction>> {
        if (requestParameters['achTransactionRequest'] == null) {
            throw new runtime.RequiredError(
                'achTransactionRequest',
                'Required parameter "achTransactionRequest" was null or undefined when calling transfersCreate().'
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
            path: `/v1/transfers/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AchTransactionRequestToJSON(requestParameters['achTransactionRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RetrieveAchTransactionFromJSON(jsonValue));
    }

    /**
     * Transfer funds between two accounts. The target accounts should be either an account at the financial institution belonging to the user or a verified external account.  A list of eligible accounts can be retrieved or listed from the <a href=\"#tag/accounts\">accounts endpoints</a>.
     * Create a transfer
     */
    async transfersCreate(requestParameters: TransfersCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RetrieveAchTransaction> {
        const response = await this.transfersCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the authenticated user\'s transfers. Transfers are movements of funds between two internal accounts or two verified external accounts.
     * List transfers
     */
    async transfersListRaw(requestParameters: TransfersListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedAchTransactionList>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['perPage'] != null) {
            queryParameters['per_page'] = requestParameters['perPage'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/transfers/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedAchTransactionListFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s transfers. Transfers are movements of funds between two internal accounts or two verified external accounts.
     * List transfers
     */
    async transfersList(requestParameters: TransfersListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedAchTransactionList> {
        const response = await this.transfersListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a scheduled transfer for the authenticated user.
     * Create a scheduled transfer
     */
    async transfersScheduledCreateRaw(requestParameters: TransfersScheduledCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NestedScheduledTransfer>> {
        if (requestParameters['scheduledTransferRequest'] == null) {
            throw new runtime.RequiredError(
                'scheduledTransferRequest',
                'Required parameter "scheduledTransferRequest" was null or undefined when calling transfersScheduledCreate().'
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
            path: `/v1/transfers/scheduled/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScheduledTransferRequestToJSON(requestParameters['scheduledTransferRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NestedScheduledTransferFromJSON(jsonValue));
    }

    /**
     * Create a scheduled transfer for the authenticated user.
     * Create a scheduled transfer
     */
    async transfersScheduledCreate(requestParameters: TransfersScheduledCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NestedScheduledTransfer> {
        const response = await this.transfersScheduledCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a user\'s scheduled transfer. Accepts a payload containing an identifier for the scheduled transfer, either a Narmi UUID or a core identifier.  Example: ```http DELETE /v1/transfers/scheduled/ HTTP/1.1 Host: api.example.com Content-Type: application/json  {   \"id\": \"07231f46-23f1-482e-bdc4-35f2267b60e6\" }  ```
     * Delete scheduled transfer
     */
    async transfersScheduledDestroyRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/v1/transfers/scheduled/`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a user\'s scheduled transfer. Accepts a payload containing an identifier for the scheduled transfer, either a Narmi UUID or a core identifier.  Example: ```http DELETE /v1/transfers/scheduled/ HTTP/1.1 Host: api.example.com Content-Type: application/json  {   \"id\": \"07231f46-23f1-482e-bdc4-35f2267b60e6\" }  ```
     * Delete scheduled transfer
     */
    async transfersScheduledDestroy(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.transfersScheduledDestroyRaw(initOverrides);
    }

    /**
     * Edit a scheduled transfer for the authenticated user.
     * Edit a scheduled transfer
     */
    async transfersScheduledUpdateRaw(requestParameters: TransfersScheduledUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NestedScheduledTransfer>> {
        if (requestParameters['scheduledTransferRequest'] == null) {
            throw new runtime.RequiredError(
                'scheduledTransferRequest',
                'Required parameter "scheduledTransferRequest" was null or undefined when calling transfersScheduledUpdate().'
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
            path: `/v1/transfers/scheduled/`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ScheduledTransferRequestToJSON(requestParameters['scheduledTransferRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NestedScheduledTransferFromJSON(jsonValue));
    }

    /**
     * Edit a scheduled transfer for the authenticated user.
     * Edit a scheduled transfer
     */
    async transfersScheduledUpdate(requestParameters: TransfersScheduledUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NestedScheduledTransfer> {
        const response = await this.transfersScheduledUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const TransfersListFilterEnum = {
    Recent: 'recent'
} as const;
export type TransfersListFilterEnum = typeof TransfersListFilterEnum[keyof typeof TransfersListFilterEnum];
