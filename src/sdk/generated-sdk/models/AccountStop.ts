/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.64)
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
 * @interface AccountStop
 */
export interface AccountStop {
    /**
     * The account's unique ID on the core.
     * @type {string}
     * @memberof AccountStop
     */
    readonly accountId?: string;
    /**
     * The lower bound check number which the stop applies to or the check number when targeting a single check with a specified amount.
     * @type {string}
     * @memberof AccountStop
     */
    minCheckNumber: string;
    /**
     * The upper bound check number which the stop applies to.
     * @type {string}
     * @memberof AccountStop
     */
    maxCheckNumber?: string;
    /**
     * The amount of the original payment that should be targeted for the stop.
     * @type {number}
     * @memberof AccountStop
     */
    amount?: number;
}

/**
 * Check if a given object implements the AccountStop interface.
 */
export function instanceOfAccountStop(value: object): value is AccountStop {
    if (!('minCheckNumber' in value) || value['minCheckNumber'] === undefined) return false;
    return true;
}

export function AccountStopFromJSON(json: any): AccountStop {
    return AccountStopFromJSONTyped(json, false);
}

export function AccountStopFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStop {
    if (json == null) {
        return json;
    }
    return {
        
        'accountId': json['account_id'] == null ? undefined : json['account_id'],
        'minCheckNumber': json['min_check_number'],
        'maxCheckNumber': json['max_check_number'] == null ? undefined : json['max_check_number'],
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}

export function AccountStopToJSON(value?: Omit<AccountStop, 'account_id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'min_check_number': value['minCheckNumber'],
        'max_check_number': value['maxCheckNumber'],
        'amount': value['amount'],
    };
}

