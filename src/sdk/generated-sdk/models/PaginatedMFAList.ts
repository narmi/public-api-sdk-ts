/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.146)
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
import type { PaginatedBillPayeeListLinks } from './PaginatedBillPayeeListLinks';
import {
    PaginatedBillPayeeListLinksFromJSON,
    PaginatedBillPayeeListLinksFromJSONTyped,
    PaginatedBillPayeeListLinksToJSON,
} from './PaginatedBillPayeeListLinks';
import type { MFA } from './MFA';
import {
    MFAFromJSON,
    MFAFromJSONTyped,
    MFAToJSON,
} from './MFA';

/**
 * 
 * @export
 * @interface PaginatedMFAList
 */
export interface PaginatedMFAList {
    /**
     * 
     * @type {Array<MFA>}
     * @memberof PaginatedMFAList
     */
    results: Array<MFA>;
    /**
     * 
     * @type {PaginatedBillPayeeListLinks}
     * @memberof PaginatedMFAList
     */
    links: PaginatedBillPayeeListLinks;
    /**
     * 
     * @type {PaginatedAchTransactionListMeta}
     * @memberof PaginatedMFAList
     */
    meta: PaginatedAchTransactionListMeta;
}

/**
 * Check if a given object implements the PaginatedMFAList interface.
 */
export function instanceOfPaginatedMFAList(value: object): value is PaginatedMFAList {
    if (!('results' in value) || value['results'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function PaginatedMFAListFromJSON(json: any): PaginatedMFAList {
    return PaginatedMFAListFromJSONTyped(json, false);
}

export function PaginatedMFAListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedMFAList {
    if (json == null) {
        return json;
    }
    return {
        
        'results': ((json['results'] as Array<any>).map(MFAFromJSON)),
        'links': PaginatedBillPayeeListLinksFromJSON(json['links']),
        'meta': PaginatedAchTransactionListMetaFromJSON(json['meta']),
    };
}

export function PaginatedMFAListToJSON(value?: PaginatedMFAList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'results': ((value['results'] as Array<any>).map(MFAToJSON)),
        'links': PaginatedBillPayeeListLinksToJSON(value['links']),
        'meta': PaginatedAchTransactionListMetaToJSON(value['meta']),
    };
}

