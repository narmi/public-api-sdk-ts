/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.252)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountBalanceDocResponse,
  AccountBalancesDocResponse,
  NotFoundError,
} from '../models/index';
import {
    AccountBalanceDocResponseFromJSON,
    AccountBalanceDocResponseToJSON,
    AccountBalancesDocResponseFromJSON,
    AccountBalancesDocResponseToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
} from '../models/index';

export interface AccountBalancesRetrieveRequest {
    uuid: string;
}

/**
 * 
 */
export class AccountBalancesApi extends runtime.BaseAPI {

    /**
     * List the authenticated user\'s account balances for each account. A caller may use this endpoint in order to update the balance totals for an account who\'s data has already been fetched.   A full set of account data can be queried via <a href=\"#tag/accounts\">accounts section</a>.
     * List account balances
     */
    async accountBalancesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountBalancesDocResponse>> {
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
            path: `/v1/account_balances/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountBalancesDocResponseFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s account balances for each account. A caller may use this endpoint in order to update the balance totals for an account who\'s data has already been fetched.   A full set of account data can be queried via <a href=\"#tag/accounts\">accounts section</a>.
     * List account balances
     */
    async accountBalancesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountBalancesDocResponse> {
        const response = await this.accountBalancesListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Fetch the balances for an account as specified by its uuid. A caller may use this endpoint in order to update the balance totals for an account who\'s data has already been fetched.   A full set of account data can be queried via <a href=\"#tag/accounts\">accounts section</a>.
     * Retrieve account balances for an account
     */
    async accountBalancesRetrieveRaw(requestParameters: AccountBalancesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountBalanceDocResponse>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling accountBalancesRetrieve().'
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
            path: `/v1/account_balances/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountBalanceDocResponseFromJSON(jsonValue));
    }

    /**
     * Fetch the balances for an account as specified by its uuid. A caller may use this endpoint in order to update the balance totals for an account who\'s data has already been fetched.   A full set of account data can be queried via <a href=\"#tag/accounts\">accounts section</a>.
     * Retrieve account balances for an account
     */
    async accountBalancesRetrieve(requestParameters: AccountBalancesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountBalanceDocResponse> {
        const response = await this.accountBalancesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
