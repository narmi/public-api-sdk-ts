/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.213)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AccountBalance } from './AccountBalance';
import {
    AccountBalanceFromJSON,
    AccountBalanceFromJSONTyped,
    AccountBalanceToJSON,
} from './AccountBalance';

/**
 * 
 * @export
 * @interface AccountBalanceDocResponse
 */
export interface AccountBalanceDocResponse {
    /**
     * Account balances for the specified account.
     * @type {AccountBalance}
     * @memberof AccountBalanceDocResponse
     */
    accountBalance: AccountBalance;
}

/**
 * Check if a given object implements the AccountBalanceDocResponse interface.
 */
export function instanceOfAccountBalanceDocResponse(value: object): value is AccountBalanceDocResponse {
    if (!('accountBalance' in value) || value['accountBalance'] === undefined) return false;
    return true;
}

export function AccountBalanceDocResponseFromJSON(json: any): AccountBalanceDocResponse {
    return AccountBalanceDocResponseFromJSONTyped(json, false);
}

export function AccountBalanceDocResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBalanceDocResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'accountBalance': AccountBalanceFromJSON(json['account_balance']),
    };
}

export function AccountBalanceDocResponseToJSON(value?: AccountBalanceDocResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_balance': AccountBalanceToJSON(value['accountBalance']),
    };
}

