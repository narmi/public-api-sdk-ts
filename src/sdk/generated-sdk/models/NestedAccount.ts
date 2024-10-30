/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.165)
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
 * @interface NestedAccount
 */
export interface NestedAccount {
    /**
     * 
     * @type {MobileAccount}
     * @memberof NestedAccount
     */
    account: MobileAccount;
}

/**
 * Check if a given object implements the NestedAccount interface.
 */
export function instanceOfNestedAccount(value: object): value is NestedAccount {
    if (!('account' in value) || value['account'] === undefined) return false;
    return true;
}

export function NestedAccountFromJSON(json: any): NestedAccount {
    return NestedAccountFromJSONTyped(json, false);
}

export function NestedAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): NestedAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'account': MobileAccountFromJSON(json['account']),
    };
}

export function NestedAccountToJSON(value?: NestedAccount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account': MobileAccountToJSON(value['account']),
    };
}

