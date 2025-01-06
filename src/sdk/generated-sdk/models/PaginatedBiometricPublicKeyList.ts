/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.103)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BiometricPublicKey } from './BiometricPublicKey';
import {
    BiometricPublicKeyFromJSON,
    BiometricPublicKeyFromJSONTyped,
    BiometricPublicKeyToJSON,
} from './BiometricPublicKey';

/**
 * 
 * @export
 * @interface PaginatedBiometricPublicKeyList
 */
export interface PaginatedBiometricPublicKeyList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedBiometricPublicKeyList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBiometricPublicKeyList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBiometricPublicKeyList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<BiometricPublicKey>}
     * @memberof PaginatedBiometricPublicKeyList
     */
    results: Array<BiometricPublicKey>;
}

/**
 * Check if a given object implements the PaginatedBiometricPublicKeyList interface.
 */
export function instanceOfPaginatedBiometricPublicKeyList(value: object): value is PaginatedBiometricPublicKeyList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedBiometricPublicKeyListFromJSON(json: any): PaginatedBiometricPublicKeyList {
    return PaginatedBiometricPublicKeyListFromJSONTyped(json, false);
}

export function PaginatedBiometricPublicKeyListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedBiometricPublicKeyList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(BiometricPublicKeyFromJSON)),
    };
}

export function PaginatedBiometricPublicKeyListToJSON(value?: PaginatedBiometricPublicKeyList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(BiometricPublicKeyToJSON)),
    };
}

