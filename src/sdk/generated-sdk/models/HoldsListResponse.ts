/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.245)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PageNumberPagination } from './PageNumberPagination';
import {
    PageNumberPaginationFromJSON,
    PageNumberPaginationFromJSONTyped,
    PageNumberPaginationToJSON,
} from './PageNumberPagination';
import type { Hold } from './Hold';
import {
    HoldFromJSON,
    HoldFromJSONTyped,
    HoldToJSON,
} from './Hold';

/**
 * 
 * @export
 * @interface HoldsListResponse
 */
export interface HoldsListResponse {
    /**
     * 
     * @type {Array<Hold>}
     * @memberof HoldsListResponse
     */
    holds: Array<Hold>;
    /**
     * 
     * @type {PageNumberPagination}
     * @memberof HoldsListResponse
     */
    links: PageNumberPagination;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof HoldsListResponse
     */
    meta?: { [key: string]: any; };
}

/**
 * Check if a given object implements the HoldsListResponse interface.
 */
export function instanceOfHoldsListResponse(value: object): value is HoldsListResponse {
    if (!('holds' in value) || value['holds'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function HoldsListResponseFromJSON(json: any): HoldsListResponse {
    return HoldsListResponseFromJSONTyped(json, false);
}

export function HoldsListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HoldsListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'holds': ((json['holds'] as Array<any>).map(HoldFromJSON)),
        'links': PageNumberPaginationFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : json['meta'],
    };
}

export function HoldsListResponseToJSON(value?: HoldsListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'holds': ((value['holds'] as Array<any>).map(HoldToJSON)),
        'links': PageNumberPaginationToJSON(value['links']),
        'meta': value['meta'],
    };
}

