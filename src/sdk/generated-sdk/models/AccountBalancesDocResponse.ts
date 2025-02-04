/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.207)
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
 * @interface AccountBalancesDocResponse
 */
export interface AccountBalancesDocResponse {
    /**
     * A list of account balances for each account.
     * @type {Array<AccountBalance>}
     * @memberof AccountBalancesDocResponse
     */
    accountBalances: Array<AccountBalance>;
}

/**
 * Check if a given object implements the AccountBalancesDocResponse interface.
 */
export function instanceOfAccountBalancesDocResponse(value: object): value is AccountBalancesDocResponse {
    if (!('accountBalances' in value) || value['accountBalances'] === undefined) return false;
    return true;
}

export function AccountBalancesDocResponseFromJSON(json: any): AccountBalancesDocResponse {
    return AccountBalancesDocResponseFromJSONTyped(json, false);
}

export function AccountBalancesDocResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBalancesDocResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'accountBalances': ((json['account_balances'] as Array<any>).map(AccountBalanceFromJSON)),
    };
}

export function AccountBalancesDocResponseToJSON(value?: AccountBalancesDocResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_balances': ((value['accountBalances'] as Array<any>).map(AccountBalanceToJSON)),
    };
}

