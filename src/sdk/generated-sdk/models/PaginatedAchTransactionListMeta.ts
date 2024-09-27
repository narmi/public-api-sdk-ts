/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Free-form object, contains total object count.
 * @export
 * @interface PaginatedAchTransactionListMeta
 */
export interface PaginatedAchTransactionListMeta {
    /**
     * 
     * @type {number}
     * @memberof PaginatedAchTransactionListMeta
     */
    total?: number;
}

/**
 * Check if a given object implements the PaginatedAchTransactionListMeta interface.
 */
export function instanceOfPaginatedAchTransactionListMeta(value: object): value is PaginatedAchTransactionListMeta {
    return true;
}

export function PaginatedAchTransactionListMetaFromJSON(json: any): PaginatedAchTransactionListMeta {
    return PaginatedAchTransactionListMetaFromJSONTyped(json, false);
}

export function PaginatedAchTransactionListMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedAchTransactionListMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function PaginatedAchTransactionListMetaToJSON(value?: PaginatedAchTransactionListMeta | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
    };
}
