/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.210)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PaginatedAchTransactionListMeta } from './PaginatedAchTransactionListMeta';
import {
    PaginatedAchTransactionListMetaFromJSON,
    PaginatedAchTransactionListMetaFromJSONTyped,
    PaginatedAchTransactionListMetaToJSON,
} from './PaginatedAchTransactionListMeta';
import type { PaginatedAchTransactionListLinks } from './PaginatedAchTransactionListLinks';
import {
    PaginatedAchTransactionListLinksFromJSON,
    PaginatedAchTransactionListLinksFromJSONTyped,
    PaginatedAchTransactionListLinksToJSON,
} from './PaginatedAchTransactionListLinks';
import type { AchTransaction } from './AchTransaction';
import {
    AchTransactionFromJSON,
    AchTransactionFromJSONTyped,
    AchTransactionToJSON,
} from './AchTransaction';

/**
 * 
 * @export
 * @interface PaginatedAchTransactionList
 */
export interface PaginatedAchTransactionList {
    /**
     * 
     * @type {PaginatedAchTransactionListMeta}
     * @memberof PaginatedAchTransactionList
     */
    meta: PaginatedAchTransactionListMeta;
    /**
     * 
     * @type {PaginatedAchTransactionListLinks}
     * @memberof PaginatedAchTransactionList
     */
    links: PaginatedAchTransactionListLinks;
    /**
     * 
     * @type {Array<AchTransaction>}
     * @memberof PaginatedAchTransactionList
     */
    transfers?: Array<AchTransaction>;
}

/**
 * Check if a given object implements the PaginatedAchTransactionList interface.
 */
export function instanceOfPaginatedAchTransactionList(value: object): value is PaginatedAchTransactionList {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function PaginatedAchTransactionListFromJSON(json: any): PaginatedAchTransactionList {
    return PaginatedAchTransactionListFromJSONTyped(json, false);
}

export function PaginatedAchTransactionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedAchTransactionList {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': PaginatedAchTransactionListMetaFromJSON(json['meta']),
        'links': PaginatedAchTransactionListLinksFromJSON(json['links']),
        'transfers': json['transfers'] == null ? undefined : ((json['transfers'] as Array<any>).map(AchTransactionFromJSON)),
    };
}

export function PaginatedAchTransactionListToJSON(value?: PaginatedAchTransactionList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': PaginatedAchTransactionListMetaToJSON(value['meta']),
        'links': PaginatedAchTransactionListLinksToJSON(value['links']),
        'transfers': value['transfers'] == null ? undefined : ((value['transfers'] as Array<any>).map(AchTransactionToJSON)),
    };
}

