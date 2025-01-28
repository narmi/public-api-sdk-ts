/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.178)
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
 * @interface PaginatedAchTransactionListLinks
 */
export interface PaginatedAchTransactionListLinks {
    /**
     * 
     * @type {string}
     * @memberof PaginatedAchTransactionListLinks
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAchTransactionListLinks
     */
    prev?: string | null;
}

/**
 * Check if a given object implements the PaginatedAchTransactionListLinks interface.
 */
export function instanceOfPaginatedAchTransactionListLinks(value: object): value is PaginatedAchTransactionListLinks {
    return true;
}

export function PaginatedAchTransactionListLinksFromJSON(json: any): PaginatedAchTransactionListLinks {
    return PaginatedAchTransactionListLinksFromJSONTyped(json, false);
}

export function PaginatedAchTransactionListLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedAchTransactionListLinks {
    if (json == null) {
        return json;
    }
    return {
        
        'next': json['next'] == null ? undefined : json['next'],
        'prev': json['prev'] == null ? undefined : json['prev'],
    };
}

export function PaginatedAchTransactionListLinksToJSON(value?: PaginatedAchTransactionListLinks | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'next': value['next'],
        'prev': value['prev'],
    };
}

