/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.78)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AchTransaction } from './AchTransaction';
import {
    AchTransactionFromJSON,
    AchTransactionFromJSONTyped,
    AchTransactionToJSON,
} from './AchTransaction';

/**
 * 
 * @export
 * @interface RetrieveAchTransaction
 */
export interface RetrieveAchTransaction {
    /**
     * 
     * @type {AchTransaction}
     * @memberof RetrieveAchTransaction
     */
    readonly transfer?: AchTransaction;
}

/**
 * Check if a given object implements the RetrieveAchTransaction interface.
 */
export function instanceOfRetrieveAchTransaction(value: object): value is RetrieveAchTransaction {
    return true;
}

export function RetrieveAchTransactionFromJSON(json: any): RetrieveAchTransaction {
    return RetrieveAchTransactionFromJSONTyped(json, false);
}

export function RetrieveAchTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveAchTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'transfer': json['transfer'] == null ? undefined : AchTransactionFromJSON(json['transfer']),
    };
}

export function RetrieveAchTransactionToJSON(value?: Omit<RetrieveAchTransaction, 'transfer'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

