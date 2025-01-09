/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.34)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';

/**
 * 
 * @export
 * @interface TransactionsDetail
 */
export interface TransactionsDetail {
    /**
     * 
     * @type {Transaction}
     * @memberof TransactionsDetail
     */
    transaction: Transaction;
}

/**
 * Check if a given object implements the TransactionsDetail interface.
 */
export function instanceOfTransactionsDetail(value: object): value is TransactionsDetail {
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    return true;
}

export function TransactionsDetailFromJSON(json: any): TransactionsDetail {
    return TransactionsDetailFromJSONTyped(json, false);
}

export function TransactionsDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'transaction': TransactionFromJSON(json['transaction']),
    };
}

export function TransactionsDetailToJSON(value?: TransactionsDetail | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'transaction': TransactionToJSON(value['transaction']),
    };
}

