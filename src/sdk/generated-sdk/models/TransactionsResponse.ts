/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.298)
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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';
import type { TransactionResponseMeta } from './TransactionResponseMeta';
import {
    TransactionResponseMetaFromJSON,
    TransactionResponseMetaFromJSONTyped,
    TransactionResponseMetaToJSON,
} from './TransactionResponseMeta';

/**
 * 
 * @export
 * @interface TransactionsResponse
 */
export interface TransactionsResponse {
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof TransactionsResponse
     */
    transactions: Array<Transaction>;
    /**
     * 
     * @type {PageNumberPagination}
     * @memberof TransactionsResponse
     */
    links: PageNumberPagination;
    /**
     * Metadata about the response, including the total number of results and any warnings that may have surfaced during the request.
     * @type {TransactionResponseMeta}
     * @memberof TransactionsResponse
     */
    meta: TransactionResponseMeta;
}

/**
 * Check if a given object implements the TransactionsResponse interface.
 */
export function instanceOfTransactionsResponse(value: object): value is TransactionsResponse {
    if (!('transactions' in value) || value['transactions'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function TransactionsResponseFromJSON(json: any): TransactionsResponse {
    return TransactionsResponseFromJSONTyped(json, false);
}

export function TransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'transactions': ((json['transactions'] as Array<any>).map(TransactionFromJSON)),
        'links': PageNumberPaginationFromJSON(json['links']),
        'meta': TransactionResponseMetaFromJSON(json['meta']),
    };
}

export function TransactionsResponseToJSON(value?: TransactionsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'transactions': ((value['transactions'] as Array<any>).map(TransactionToJSON)),
        'links': PageNumberPaginationToJSON(value['links']),
        'meta': TransactionResponseMetaToJSON(value['meta']),
    };
}

