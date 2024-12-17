/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.60)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CardInfo } from './CardInfo';
import {
    CardInfoFromJSON,
    CardInfoFromJSONTyped,
    CardInfoToJSON,
} from './CardInfo';

/**
 * 
 * @export
 * @interface PaginatedCardInfoList
 */
export interface PaginatedCardInfoList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedCardInfoList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCardInfoList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCardInfoList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<CardInfo>}
     * @memberof PaginatedCardInfoList
     */
    results: Array<CardInfo>;
}

/**
 * Check if a given object implements the PaginatedCardInfoList interface.
 */
export function instanceOfPaginatedCardInfoList(value: object): value is PaginatedCardInfoList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedCardInfoListFromJSON(json: any): PaginatedCardInfoList {
    return PaginatedCardInfoListFromJSONTyped(json, false);
}

export function PaginatedCardInfoListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedCardInfoList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(CardInfoFromJSON)),
    };
}

export function PaginatedCardInfoListToJSON(value?: PaginatedCardInfoList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(CardInfoToJSON)),
    };
}

