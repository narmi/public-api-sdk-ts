/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.395)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountStopResponse,
  AccountWithdrawalRequest,
  AccountsDocumentsRetrieve404Response,
  AccountsNotFoundError,
  ExternalAccountCreateRequest,
  ExternalAccountVerificationRequest,
  GeneralError,
  HoldsListResponse,
  InvalidRequestError,
  NestedAccount,
  NestedAccounts,
  NotFoundError,
  PaginatedAccountStopsResponse,
  PaginatedAccounts,
  PatchedAccountStopRequest,
  PermissionDeniedError,
  ServiceFailureError,
  Success,
  TransactionsResponse,
  UpdateAccountDocRequest,
  UserDocument,
} from '../models/index';
import {
    AccountStopResponseFromJSON,
    AccountStopResponseToJSON,
    AccountWithdrawalRequestFromJSON,
    AccountWithdrawalRequestToJSON,
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    AccountsNotFoundErrorFromJSON,
    AccountsNotFoundErrorToJSON,
    ExternalAccountCreateRequestFromJSON,
    ExternalAccountCreateRequestToJSON,
    ExternalAccountVerificationRequestFromJSON,
    ExternalAccountVerificationRequestToJSON,
    GeneralErrorFromJSON,
    GeneralErrorToJSON,
    HoldsListResponseFromJSON,
    HoldsListResponseToJSON,
    InvalidRequestErrorFromJSON,
    InvalidRequestErrorToJSON,
    NestedAccountFromJSON,
    NestedAccountToJSON,
    NestedAccountsFromJSON,
    NestedAccountsToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    PaginatedAccountStopsResponseFromJSON,
    PaginatedAccountStopsResponseToJSON,
    PaginatedAccountsFromJSON,
    PaginatedAccountsToJSON,
    PatchedAccountStopRequestFromJSON,
    PatchedAccountStopRequestToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
    ServiceFailureErrorFromJSON,
    ServiceFailureErrorToJSON,
    SuccessFromJSON,
    SuccessToJSON,
    TransactionsResponseFromJSON,
    TransactionsResponseToJSON,
    UpdateAccountDocRequestFromJSON,
    UpdateAccountDocRequestToJSON,
    UserDocumentFromJSON,
    UserDocumentToJSON,
} from '../models/index';

export interface AccountVerifyRequest {
    uuid: string;
    externalAccountVerificationRequest?: ExternalAccountVerificationRequest;
}

export interface AccountVerifyInstantRequest {
    externalAccountVerificationRequest?: ExternalAccountVerificationRequest;
}

export interface AccountsCreateRequest {
    externalAccountCreateRequest: ExternalAccountCreateRequest;
}

export interface AccountsDestroyRequest {
    uuid: string;
}

export interface AccountsDocumentsRetrieveRequest {
    accountUuid: string;
    documentId: string;
    data?: boolean;
}

export interface AccountsHoldsListRequest {
    accountUuid: string;
}

export interface AccountsRetrieveRequest {
    uuid: string;
}

export interface AccountsStopsCreateRequest {
    accountUuid: string;
    patchedAccountStopRequest?: PatchedAccountStopRequest;
}

export interface AccountsStopsListRequest {
    accountUuid: string;
}

export interface AccountsTransactionsDownloadRetrieveRequest {
    accountUuid: string;
    fileFormat?: AccountsTransactionsDownloadRetrieveFileFormatEnum;
    maxDate?: Date;
    minDate?: Date;
    period?: AccountsTransactionsDownloadRetrievePeriodEnum;
}

export interface AccountsUpdateRequest {
    uuid: string;
    updateAccountDocRequest?: UpdateAccountDocRequest;
}

export interface AccountsWithdrawalsCreateRequest {
    uuid: string;
    accountWithdrawalRequest: AccountWithdrawalRequest;
}

export interface TransactionsListRequest {
    accountUuids: string;
    after?: string;
    before?: string;
    block?: boolean;
    createdFrom?: Date;
    createdTo?: Date;
    filter?: TransactionsListFilterEnum;
    page?: number;
    q?: string;
    settledFrom?: Date;
    settledTo?: Date;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     * Verify the micro-deposit amounts for a specified external account. Additional information on micro-deposits/micro-entries and how they work can be found here https://www.nacha.org/micro-entries.  In the event that the account does not exist or cannot be associated with the user, or ACH is not enabled, the endpoint will return a 404.  In the event that the user does not have permission to modify the account, the endpoint will return a 403.
     * Run account verification
     */
    async accountVerifyRaw(requestParameters: AccountVerifyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NestedAccounts>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling accountVerify().'
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
            path: `/v1/accounts/{uuid}/verify/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExternalAccountVerificationRequestToJSON(requestParameters['externalAccountVerificationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NestedAccountsFromJSON(jsonValue));
    }

    /**
     * Verify the micro-deposit amounts for a specified external account. Additional information on micro-deposits/micro-entries and how they work can be found here https://www.nacha.org/micro-entries.  In the event that the account does not exist or cannot be associated with the user, or ACH is not enabled, the endpoint will return a 404.  In the event that the user does not have permission to modify the account, the endpoint will return a 403.
     * Run account verification
     */
    async accountVerify(requestParameters: AccountVerifyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NestedAccounts> {
        const response = await this.accountVerifyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Instant verification for accounts that have been linked through MX. The FI must have features `ach` and `instant_account_verification` enabled. If ACH is not enabled the endpoint will return a 404. If `instant_account_verification` is not enabled, the endpoint will return a 422 detailing the issue. In the event that there is an issue running verification, the endpoint will return a 500.
     * Run instant account verification
     */
    async accountVerifyInstantRaw(requestParameters: AccountVerifyInstantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NestedAccounts>> {
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
            path: `/v1/accounts/verify/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExternalAccountVerificationRequestToJSON(requestParameters['externalAccountVerificationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NestedAccountsFromJSON(jsonValue));
    }

    /**
     * Instant verification for accounts that have been linked through MX. The FI must have features `ach` and `instant_account_verification` enabled. If ACH is not enabled the endpoint will return a 404. If `instant_account_verification` is not enabled, the endpoint will return a 422 detailing the issue. In the event that there is an issue running verification, the endpoint will return a 500.
     * Run instant account verification
     */
    async accountVerifyInstant(requestParameters: AccountVerifyInstantRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NestedAccounts> {
        const response = await this.accountVerifyInstantRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a reference to an external account. Returns a list of accounts that will always be length 1.
     * Create external account
     */
    async accountsCreateRaw(requestParameters: AccountsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NestedAccounts>> {
        if (requestParameters['externalAccountCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'externalAccountCreateRequest',
                'Required parameter "externalAccountCreateRequest" was null or undefined when calling accountsCreate().'
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
            path: `/v1/accounts/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExternalAccountCreateRequestToJSON(requestParameters['externalAccountCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NestedAccountsFromJSON(jsonValue));
    }

    /**
     * Create a reference to an external account. Returns a list of accounts that will always be length 1.
     * Create external account
     */
    async accountsCreate(requestParameters: AccountsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NestedAccounts> {
        const response = await this.accountsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove the logged-in user from a specified account. The account must be external, users cannot unlink themselves from internal accounts.
     * Remove user from an account
     */
    async accountsDestroyRaw(requestParameters: AccountsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling accountsDestroy().'
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
            path: `/v1/accounts/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove the logged-in user from a specified account. The account must be external, users cannot unlink themselves from internal accounts.
     * Remove user from an account
     */
    async accountsDestroy(requestParameters: AccountsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.accountsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * Fetch a specific statement by statement ID.   An invalid document ID will typically return the documented error response, however if the `statements` feature is not enabled, it may also return a blank 404 response.  This endpoint will return a 404 if a trailing slash is included in the request.
     * Retrieve a document
     */
    async accountsDocumentsRetrieveRaw(requestParameters: AccountsDocumentsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDocument>> {
        if (requestParameters['accountUuid'] == null) {
            throw new runtime.RequiredError(
                'accountUuid',
                'Required parameter "accountUuid" was null or undefined when calling accountsDocumentsRetrieve().'
            );
        }

        if (requestParameters['documentId'] == null) {
            throw new runtime.RequiredError(
                'documentId',
                'Required parameter "documentId" was null or undefined when calling accountsDocumentsRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['data'] != null) {
            queryParameters['data'] = requestParameters['data'];
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
            path: `/v1/accounts/{account_uuid}/documents/{document_id}/`.replace(`{${"account_uuid"}}`, encodeURIComponent(String(requestParameters['accountUuid']))).replace(`{${"document_id"}}`, encodeURIComponent(String(requestParameters['documentId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDocumentFromJSON(jsonValue));
    }

    /**
     * Fetch a specific statement by statement ID.   An invalid document ID will typically return the documented error response, however if the `statements` feature is not enabled, it may also return a blank 404 response.  This endpoint will return a 404 if a trailing slash is included in the request.
     * Retrieve a document
     */
    async accountsDocumentsRetrieve(requestParameters: AccountsDocumentsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDocument> {
        const response = await this.accountsDocumentsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the holds for an authenticated user\'s account specified by UUID, excluding expired holds.Will return 404 if the account specified does not exist. Will return 500 error if there are any issues connecting to the core.
     * List holds for account
     */
    async accountsHoldsListRaw(requestParameters: AccountsHoldsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HoldsListResponse>> {
        if (requestParameters['accountUuid'] == null) {
            throw new runtime.RequiredError(
                'accountUuid',
                'Required parameter "accountUuid" was null or undefined when calling accountsHoldsList().'
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
            path: `/v1/accounts/{account_uuid}/holds/`.replace(`{${"account_uuid"}}`, encodeURIComponent(String(requestParameters['accountUuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HoldsListResponseFromJSON(jsonValue));
    }

    /**
     * List the holds for an authenticated user\'s account specified by UUID, excluding expired holds.Will return 404 if the account specified does not exist. Will return 500 error if there are any issues connecting to the core.
     * List holds for account
     */
    async accountsHoldsList(requestParameters: AccountsHoldsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HoldsListResponse> {
        const response = await this.accountsHoldsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the authenticated user\'s accounts. The account data will update from the core when this endpoint is requested if the oldest account has not been updated in over `Core Minimum Update Seconds`. The response contains both internal and external account types.
     * List accounts
     */
    async accountsListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedAccounts>> {
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
            path: `/v1/accounts/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedAccountsFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s accounts. The account data will update from the core when this endpoint is requested if the oldest account has not been updated in over `Core Minimum Update Seconds`. The response contains both internal and external account types.
     * List accounts
     */
    async accountsList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedAccounts> {
        const response = await this.accountsListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Fetch a specified account. Both external and internal accounts can be listed using this call. Account information is not updated from the core, and is fetched from the database.
     * Retrieve an account
     */
    async accountsRetrieveRaw(requestParameters: AccountsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NestedAccount>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling accountsRetrieve().'
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
            path: `/v1/accounts/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NestedAccountFromJSON(jsonValue));
    }

    /**
     * Fetch a specified account. Both external and internal accounts can be listed using this call. Account information is not updated from the core, and is fetched from the database.
     * Retrieve an account
     */
    async accountsRetrieve(requestParameters: AccountsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NestedAccount> {
        const response = await this.accountsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a stop payment for a specified account. This endpoint will return a 404 if the account does not exist or if the stop feature is not enabled for the institution. Some cores will support the ability to specify a stop payment range (`min_check_number`->`max_check_number`) but in the event that it is not supported, the endpoint will also return a 404. If the core is inactive the endpoint will return a 500, and if there is an issue creating the stop on the core, the endpoint will return a 503.
     * Create a stop payment
     */
    async accountsStopsCreateRaw(requestParameters: AccountsStopsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountStopResponse>> {
        if (requestParameters['accountUuid'] == null) {
            throw new runtime.RequiredError(
                'accountUuid',
                'Required parameter "accountUuid" was null or undefined when calling accountsStopsCreate().'
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
            path: `/v1/accounts/{account_uuid}/stops/`.replace(`{${"account_uuid"}}`, encodeURIComponent(String(requestParameters['accountUuid']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedAccountStopRequestToJSON(requestParameters['patchedAccountStopRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountStopResponseFromJSON(jsonValue));
    }

    /**
     * Create a stop payment for a specified account. This endpoint will return a 404 if the account does not exist or if the stop feature is not enabled for the institution. Some cores will support the ability to specify a stop payment range (`min_check_number`->`max_check_number`) but in the event that it is not supported, the endpoint will also return a 404. If the core is inactive the endpoint will return a 500, and if there is an issue creating the stop on the core, the endpoint will return a 503.
     * Create a stop payment
     */
    async accountsStopsCreate(requestParameters: AccountsStopsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountStopResponse> {
        const response = await this.accountsStopsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List stop payments for a specified account. Pagination for this response is used only as a placeholder for future implementation and will not return metadata or pagination links.
     * List stop payments
     */
    async accountsStopsListRaw(requestParameters: AccountsStopsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedAccountStopsResponse>> {
        if (requestParameters['accountUuid'] == null) {
            throw new runtime.RequiredError(
                'accountUuid',
                'Required parameter "accountUuid" was null or undefined when calling accountsStopsList().'
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
            path: `/v1/accounts/{account_uuid}/stops/`.replace(`{${"account_uuid"}}`, encodeURIComponent(String(requestParameters['accountUuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedAccountStopsResponseFromJSON(jsonValue));
    }

    /**
     * List stop payments for a specified account. Pagination for this response is used only as a placeholder for future implementation and will not return metadata or pagination links.
     * List stop payments
     */
    async accountsStopsList(requestParameters: AccountsStopsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedAccountStopsResponse> {
        const response = await this.accountsStopsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Export transaction history to a file.  Custom date range can be defined by specifying the `period` parameter as `custom`.  Some validation errors (e.g. when specifying a min date which is greater than a max date) may result in malformatted error responses.  Please note that the response headers do not indicate the proper response content type.
     * Get transactions download
     */
    async accountsTransactionsDownloadRetrieveRaw(requestParameters: AccountsTransactionsDownloadRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['accountUuid'] == null) {
            throw new runtime.RequiredError(
                'accountUuid',
                'Required parameter "accountUuid" was null or undefined when calling accountsTransactionsDownloadRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fileFormat'] != null) {
            queryParameters['file_format'] = requestParameters['fileFormat'];
        }

        if (requestParameters['maxDate'] != null) {
            queryParameters['max_date'] = (requestParameters['maxDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['minDate'] != null) {
            queryParameters['min_date'] = (requestParameters['minDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['period'] != null) {
            queryParameters['period'] = requestParameters['period'];
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
            path: `/v1/accounts/{account_uuid}/transactions_download/`.replace(`{${"account_uuid"}}`, encodeURIComponent(String(requestParameters['accountUuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Export transaction history to a file.  Custom date range can be defined by specifying the `period` parameter as `custom`.  Some validation errors (e.g. when specifying a min date which is greater than a max date) may result in malformatted error responses.  Please note that the response headers do not indicate the proper response content type.
     * Get transactions download
     */
    async accountsTransactionsDownloadRetrieve(requestParameters: AccountsTransactionsDownloadRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.accountsTransactionsDownloadRetrieveRaw(requestParameters, initOverrides);
    }

    /**
     * Update fields for a specified account. This endpoint performs a partial, non-idempotent update, so any fields can be included or omitted. Any missing or additional fields will be ignored.
     * Update an account
     */
    async accountsUpdateRaw(requestParameters: AccountsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NestedAccount>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling accountsUpdate().'
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
            path: `/v1/accounts/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAccountDocRequestToJSON(requestParameters['updateAccountDocRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NestedAccountFromJSON(jsonValue));
    }

    /**
     * Update fields for a specified account. This endpoint performs a partial, non-idempotent update, so any fields can be included or omitted. Any missing or additional fields will be ignored.
     * Update an account
     */
    async accountsUpdate(requestParameters: AccountsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NestedAccount> {
        const response = await this.accountsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a withdrawal for an account specified by UUID.
     * Create account withdrawal
     */
    async accountsWithdrawalsCreateRaw(requestParameters: AccountsWithdrawalsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling accountsWithdrawalsCreate().'
            );
        }

        if (requestParameters['accountWithdrawalRequest'] == null) {
            throw new runtime.RequiredError(
                'accountWithdrawalRequest',
                'Required parameter "accountWithdrawalRequest" was null or undefined when calling accountsWithdrawalsCreate().'
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
            path: `/v1/accounts/{uuid}/withdrawals/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountWithdrawalRequestToJSON(requestParameters['accountWithdrawalRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Create a withdrawal for an account specified by UUID.
     * Create account withdrawal
     */
    async accountsWithdrawalsCreate(requestParameters: AccountsWithdrawalsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.accountsWithdrawalsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List transactions for the authenticated user. Transactions are collated from accounts which the user is a member of.<br /><br />If queried via the <a href=\"#tag/accounts/operation/user_transactions_list\">/v1/accounts/{account_uuids}/transactions</a> endpoint, the call will return a 404 if all the comma-separated list of `account_uuids` are non-existent.<br /><br />Pagination can be defined either via the `before` and `after` query parameters for cursor pagination or via the `page` parameter for page number pagination. Both styles of pagination accept a `per_page` parameter, which indicates how many results should be returned.
     * List user transactions
     */
    async transactionsListRaw(requestParameters: TransactionsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionsResponse>> {
        if (requestParameters['accountUuids'] == null) {
            throw new runtime.RequiredError(
                'accountUuids',
                'Required parameter "accountUuids" was null or undefined when calling transactionsList().'
            );
        }

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
            path: `/v1/accounts/{account_uuids}/transactions/`.replace(`{${"account_uuids"}}`, encodeURIComponent(String(requestParameters['accountUuids']))),
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
    async transactionsList(requestParameters: TransactionsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionsResponse> {
        const response = await this.transactionsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AccountsTransactionsDownloadRetrieveFileFormatEnum = {
    Csv: 'csv',
    Ofx: 'ofx',
    Qbo: 'qbo',
    Qfx: 'qfx',
    Qif: 'qif'
} as const;
export type AccountsTransactionsDownloadRetrieveFileFormatEnum = typeof AccountsTransactionsDownloadRetrieveFileFormatEnum[keyof typeof AccountsTransactionsDownloadRetrieveFileFormatEnum];
/**
 * @export
 */
export const AccountsTransactionsDownloadRetrievePeriodEnum = {
    CurrentMonth: 'current_month',
    CurrentYear: 'current_year',
    Custom: 'custom',
    Month: 'month',
    PreviousMonth: 'previous_month',
    PreviousYear: 'previous_year',
    Year: 'year'
} as const;
export type AccountsTransactionsDownloadRetrievePeriodEnum = typeof AccountsTransactionsDownloadRetrievePeriodEnum[keyof typeof AccountsTransactionsDownloadRetrievePeriodEnum];
/**
 * @export
 */
export const TransactionsListFilterEnum = {
    Hidden: 'hidden',
    Unsettled: 'unsettled'
} as const;
export type TransactionsListFilterEnum = typeof TransactionsListFilterEnum[keyof typeof TransactionsListFilterEnum];
