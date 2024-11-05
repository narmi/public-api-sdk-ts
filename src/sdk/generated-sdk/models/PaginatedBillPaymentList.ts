/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.323)
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
import type { BillPayment } from './BillPayment';
import {
    BillPaymentFromJSON,
    BillPaymentFromJSONTyped,
    BillPaymentToJSON,
} from './BillPayment';
import type { PaginatedBillPayeeListLinks } from './PaginatedBillPayeeListLinks';
import {
    PaginatedBillPayeeListLinksFromJSON,
    PaginatedBillPayeeListLinksFromJSONTyped,
    PaginatedBillPayeeListLinksToJSON,
} from './PaginatedBillPayeeListLinks';

/**
 * 
 * @export
 * @interface PaginatedBillPaymentList
 */
export interface PaginatedBillPaymentList {
    /**
     * 
     * @type {Array<BillPayment>}
     * @memberof PaginatedBillPaymentList
     */
    payments: Array<BillPayment>;
    /**
     * 
     * @type {PaginatedBillPayeeListLinks}
     * @memberof PaginatedBillPaymentList
     */
    links: PaginatedBillPayeeListLinks;
    /**
     * 
     * @type {PaginatedAchTransactionListMeta}
     * @memberof PaginatedBillPaymentList
     */
    meta: PaginatedAchTransactionListMeta;
}

/**
 * Check if a given object implements the PaginatedBillPaymentList interface.
 */
export function instanceOfPaginatedBillPaymentList(value: object): value is PaginatedBillPaymentList {
    if (!('payments' in value) || value['payments'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function PaginatedBillPaymentListFromJSON(json: any): PaginatedBillPaymentList {
    return PaginatedBillPaymentListFromJSONTyped(json, false);
}

export function PaginatedBillPaymentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedBillPaymentList {
    if (json == null) {
        return json;
    }
    return {
        
        'payments': ((json['payments'] as Array<any>).map(BillPaymentFromJSON)),
        'links': PaginatedBillPayeeListLinksFromJSON(json['links']),
        'meta': PaginatedAchTransactionListMetaFromJSON(json['meta']),
    };
}

export function PaginatedBillPaymentListToJSON(value?: PaginatedBillPaymentList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'payments': ((value['payments'] as Array<any>).map(BillPaymentToJSON)),
        'links': PaginatedBillPayeeListLinksToJSON(value['links']),
        'meta': PaginatedAchTransactionListMetaToJSON(value['meta']),
    };
}

