/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.123)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * A representation of an account with respect to its balance totals.
 * @export
 * @interface AccountBalance
 */
export interface AccountBalance {
    /**
     * Account UUID prefixed with "abl_" for use with this endpoint.
     * @type {string}
     * @memberof AccountBalance
     */
    readonly id?: string;
    /**
     * UUID to the associated account.
     * @type {string}
     * @memberof AccountBalance
     */
    readonly accountId?: string;
    /**
     * The balance to be presented to the customer. Set to the available balance for non CD deposit accounts, and ledger balance otherwise.
     * @type {number}
     * @memberof AccountBalance
     */
    readonly primary?: number;
    /**
     * The funds immediately available to use, including any pending transactions or temporary holds on the account.
     * @type {number}
     * @memberof AccountBalance
     */
    readonly available?: number;
    /**
     * The total amount of funds in the account not including temporary holds or pending transactions.
     * @type {number}
     * @memberof AccountBalance
     */
    readonly ledger?: number;
    /**
     * Date when the account was last updated.
     * @type {Date}
     * @memberof AccountBalance
     */
    readonly updatedAt?: Date;
}

/**
 * Check if a given object implements the AccountBalance interface.
 */
export function instanceOfAccountBalance(value: object): value is AccountBalance {
    return true;
}

export function AccountBalanceFromJSON(json: any): AccountBalance {
    return AccountBalanceFromJSONTyped(json, false);
}

export function AccountBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBalance {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'accountId': json['account_id'] == null ? undefined : json['account_id'],
        'primary': json['primary'] == null ? undefined : json['primary'],
        'available': json['available'] == null ? undefined : json['available'],
        'ledger': json['ledger'] == null ? undefined : json['ledger'],
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function AccountBalanceToJSON(value?: Omit<AccountBalance, 'id'|'account_id'|'primary'|'available'|'ledger'|'updated_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

