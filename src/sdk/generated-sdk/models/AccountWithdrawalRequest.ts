/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.202)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccountWithdrawalRequest
 */
export interface AccountWithdrawalRequest {
    /**
     * Amount of the withdrawal.
     * @type {number}
     * @memberof AccountWithdrawalRequest
     */
    amount: number;
}

/**
 * Check if a given object implements the AccountWithdrawalRequest interface.
 */
export function instanceOfAccountWithdrawalRequest(value: object): value is AccountWithdrawalRequest {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    return true;
}

export function AccountWithdrawalRequestFromJSON(json: any): AccountWithdrawalRequest {
    return AccountWithdrawalRequestFromJSONTyped(json, false);
}

export function AccountWithdrawalRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountWithdrawalRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
    };
}

export function AccountWithdrawalRequestToJSON(value?: AccountWithdrawalRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
    };
}

