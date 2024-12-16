/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.301)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * URIs linking to sequential pages of the result.
 * @export
 * @interface PaginatedBillPayeeListLinks
 */
export interface PaginatedBillPayeeListLinks {
    /**
     * 
     * @type {string}
     * @memberof PaginatedBillPayeeListLinks
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBillPayeeListLinks
     */
    prev?: string | null;
}

/**
 * Check if a given object implements the PaginatedBillPayeeListLinks interface.
 */
export function instanceOfPaginatedBillPayeeListLinks(value: object): value is PaginatedBillPayeeListLinks {
    return true;
}

export function PaginatedBillPayeeListLinksFromJSON(json: any): PaginatedBillPayeeListLinks {
    return PaginatedBillPayeeListLinksFromJSONTyped(json, false);
}

export function PaginatedBillPayeeListLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedBillPayeeListLinks {
    if (json == null) {
        return json;
    }
    return {
        
        'next': json['next'] == null ? undefined : json['next'],
        'prev': json['prev'] == null ? undefined : json['prev'],
    };
}

export function PaginatedBillPayeeListLinksToJSON(value?: PaginatedBillPayeeListLinks | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'next': value['next'],
        'prev': value['prev'],
    };
}

