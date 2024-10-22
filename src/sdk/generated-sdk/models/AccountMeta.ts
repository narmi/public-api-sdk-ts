/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.272)
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
 * @interface AccountMeta
 */
export interface AccountMeta {
    /**
     * Total number of results.
     * @type {number}
     * @memberof AccountMeta
     */
    total: number;
}

/**
 * Check if a given object implements the AccountMeta interface.
 */
export function instanceOfAccountMeta(value: object): value is AccountMeta {
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function AccountMetaFromJSON(json: any): AccountMeta {
    return AccountMetaFromJSONTyped(json, false);
}

export function AccountMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
    };
}

export function AccountMetaToJSON(value?: AccountMeta | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
    };
}

