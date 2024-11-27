/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.312)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BillPayee } from './BillPayee';
import {
    BillPayeeFromJSON,
    BillPayeeFromJSONTyped,
    BillPayeeToJSON,
} from './BillPayee';
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

/**
 * 
 * @export
 * @interface PaginatedBillPayeeList
 */
export interface PaginatedBillPayeeList {
    /**
     * 
     * @type {Array<BillPayee>}
     * @memberof PaginatedBillPayeeList
     */
    payees: Array<BillPayee>;
    /**
     * 
     * @type {PaginatedBillPayeeListLinks}
     * @memberof PaginatedBillPayeeList
     */
    links: PaginatedBillPayeeListLinks;
    /**
     * 
     * @type {PaginatedAchTransactionListMeta}
     * @memberof PaginatedBillPayeeList
     */
    meta: PaginatedAchTransactionListMeta;
}

/**
 * Check if a given object implements the PaginatedBillPayeeList interface.
 */
export function instanceOfPaginatedBillPayeeList(value: object): value is PaginatedBillPayeeList {
    if (!('payees' in value) || value['payees'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function PaginatedBillPayeeListFromJSON(json: any): PaginatedBillPayeeList {
    return PaginatedBillPayeeListFromJSONTyped(json, false);
}

export function PaginatedBillPayeeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedBillPayeeList {
    if (json == null) {
        return json;
    }
    return {
        
        'payees': ((json['payees'] as Array<any>).map(BillPayeeFromJSON)),
        'links': PaginatedBillPayeeListLinksFromJSON(json['links']),
        'meta': PaginatedAchTransactionListMetaFromJSON(json['meta']),
    };
}

export function PaginatedBillPayeeListToJSON(value?: PaginatedBillPayeeList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'payees': ((value['payees'] as Array<any>).map(BillPayeeToJSON)),
        'links': PaginatedBillPayeeListLinksToJSON(value['links']),
        'meta': PaginatedAchTransactionListMetaToJSON(value['meta']),
    };
}

