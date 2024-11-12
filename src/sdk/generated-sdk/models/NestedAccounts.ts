/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.245)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { MobileAccount } from './MobileAccount';
import {
    MobileAccountFromJSON,
    MobileAccountFromJSONTyped,
    MobileAccountToJSON,
} from './MobileAccount';

/**
 * 
 * @export
 * @interface NestedAccounts
 */
export interface NestedAccounts {
    /**
     * 
     * @type {Array<MobileAccount>}
     * @memberof NestedAccounts
     */
    accounts: Array<MobileAccount>;
}

/**
 * Check if a given object implements the NestedAccounts interface.
 */
export function instanceOfNestedAccounts(value: object): value is NestedAccounts {
    if (!('accounts' in value) || value['accounts'] === undefined) return false;
    return true;
}

export function NestedAccountsFromJSON(json: any): NestedAccounts {
    return NestedAccountsFromJSONTyped(json, false);
}

export function NestedAccountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NestedAccounts {
    if (json == null) {
        return json;
    }
    return {
        
        'accounts': ((json['accounts'] as Array<any>).map(MobileAccountFromJSON)),
    };
}

export function NestedAccountsToJSON(value?: NestedAccounts | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accounts': ((value['accounts'] as Array<any>).map(MobileAccountToJSON)),
    };
}

