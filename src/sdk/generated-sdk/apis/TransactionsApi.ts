/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.167)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  AccountsNotFoundError,
  AutomaticSavingsEnrollmentRetrieve422Response,
  InvalidRequestError,
  NotFoundError,
  PatchedTransactionRequest,
  TransactionImagesResponse,
  TransactionsDetail,
  TransactionsResponse,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    AccountsNotFoundErrorFromJSON,
    AccountsNotFoundErrorToJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseFromJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseToJSON,
    InvalidRequestErrorFromJSON,
    InvalidRequestErrorToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    PatchedTransactionRequestFromJSON,
    PatchedTransactionRequestToJSON,
    TransactionImagesResponseFromJSON,
    TransactionImagesResponseToJSON,
    TransactionsDetailFromJSON,
    TransactionsDetailToJSON,
    TransactionsResponseFromJSON,
    TransactionsResponseToJSON,
} from '../models/index';

export interface TransactionsImagesListRequest {
    uuid: string;
}

export interface TransactionsList2Request {
    after?: string;
    before?: string;
    block?: boolean;
    createdFrom?: Date;
    createdTo?: Date;
    filter?: TransactionsList2FilterEnum;
    page?: number;
    q?: string;
    settledFrom?: Date;
    settledTo?: Date;
}

export interface TransactionsRetrieveRequest {
    uuid: string;
    fileFormat?: TransactionsRetrieveFileFormatEnum;
}

export interface TransactionsUpdateRequest {
    uuid: string;
    patchedTransactionRequest?: PatchedTransactionRequest;
}

/**
 * 
 */
export class TransactionsApi extends runtime.BaseAPI {

    /**
     * Fetch the base 64 encoded front and back check images for a specified transaction. This endpoint may return 503 or 422 status codes when interacting with the 3rd party integration that manages these images.
     * Retrieve transaction image
     */
    async transactionsImagesListRaw(requestParameters: TransactionsImagesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionImagesResponse>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling transactionsImagesList().'
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
            path: `/v1/transactions/{uuid}/images/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionImagesResponseFromJSON(jsonValue));
    }

    /**
     * Fetch the base 64 encoded front and back check images for a specified transaction. This endpoint may return 503 or 422 status codes when interacting with the 3rd party integration that manages these images.
     * Retrieve transaction image
     */
    async transactionsImagesList(requestParameters: TransactionsImagesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionImagesResponse> {
        const response = await this.transactionsImagesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List transactions for the authenticated user. Transactions are collated from accounts which the user is a member of.<br /><br />If queried via the <a href=\"#tag/accounts/operation/user_transactions_list\">/v1/accounts/{account_uuids}/transactions</a> endpoint, the call will return a 404 if all the comma-separated list of `account_uuids` are non-existent.<br /><br />Pagination can be defined either via the `before` and `after` query parameters for cursor pagination or via the `page` parameter for page number pagination. Both styles of pagination accept a `per_page` parameter, which indicates how many results should be returned.
     * List user transactions
     */
    async transactionsList2Raw(requestParameters: TransactionsList2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['after'] != null) {
            queryParameters['after'] = requestParameters['after'];
        }

        if (requestParameters['before'] != null) {
            queryParameters['before'] = requestParameters['before'];
        }

        if (requestParameters['block'] != null) {
            queryParameters['block'] = requestParameters['block'];
        }

        if (requestParameters['createdFrom'] != null) {
            queryParameters['created_from'] = (requestParameters['createdFrom'] as any).toISOString();
        }

        if (requestParameters['createdTo'] != null) {
            queryParameters['created_to'] = (requestParameters['createdTo'] as any).toISOString();
        }

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        if (requestParameters['settledFrom'] != null) {
            queryParameters['settled_from'] = (requestParameters['settledFrom'] as any).toISOString();
        }

        if (requestParameters['settledTo'] != null) {
            queryParameters['settled_to'] = (requestParameters['settledTo'] as any).toISOString();
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
            path: `/v1/transactions/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsResponseFromJSON(jsonValue));
    }

    /**
     * List transactions for the authenticated user. Transactions are collated from accounts which the user is a member of.<br /><br />If queried via the <a href=\"#tag/accounts/operation/user_transactions_list\">/v1/accounts/{account_uuids}/transactions</a> endpoint, the call will return a 404 if all the comma-separated list of `account_uuids` are non-existent.<br /><br />Pagination can be defined either via the `before` and `after` query parameters for cursor pagination or via the `page` parameter for page number pagination. Both styles of pagination accept a `per_page` parameter, which indicates how many results should be returned.
     * List user transactions
     */
    async transactionsList2(requestParameters: TransactionsList2Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionsResponse> {
        const response = await this.transactionsList2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch a specified transaction.
     * Retrieve transaction
     */
    async transactionsRetrieveRaw(requestParameters: TransactionsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionsDetail>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling transactionsRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fileFormat'] != null) {
            queryParameters['file_format'] = requestParameters['fileFormat'];
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
            path: `/v1/transactions/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsDetailFromJSON(jsonValue));
    }

    /**
     * Fetch a specified transaction.
     * Retrieve transaction
     */
    async transactionsRetrieve(requestParameters: TransactionsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionsDetail> {
        const response = await this.transactionsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update fields for a specified transaction.
     * Update transaction
     */
    async transactionsUpdateRaw(requestParameters: TransactionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionsDetail>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling transactionsUpdate().'
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
            path: `/v1/transactions/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedTransactionRequestToJSON(requestParameters['patchedTransactionRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsDetailFromJSON(jsonValue));
    }

    /**
     * Update fields for a specified transaction.
     * Update transaction
     */
    async transactionsUpdate(requestParameters: TransactionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionsDetail> {
        const response = await this.transactionsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const TransactionsList2FilterEnum = {
    Hidden: 'hidden',
    Unsettled: 'unsettled'
} as const;
export type TransactionsList2FilterEnum = typeof TransactionsList2FilterEnum[keyof typeof TransactionsList2FilterEnum];
/**
 * @export
 */
export const TransactionsRetrieveFileFormatEnum = {
    Pdf: 'pdf'
} as const;
export type TransactionsRetrieveFileFormatEnum = typeof TransactionsRetrieveFileFormatEnum[keyof typeof TransactionsRetrieveFileFormatEnum];
