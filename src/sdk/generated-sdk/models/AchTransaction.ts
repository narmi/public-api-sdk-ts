/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.157)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AchTransactionStateEnum } from './AchTransactionStateEnum';
import {
    AchTransactionStateEnumFromJSON,
    AchTransactionStateEnumFromJSONTyped,
    AchTransactionStateEnumToJSON,
} from './AchTransactionStateEnum';

/**
 * Common fields between `ScheduledTransferSerializer`, and AchTransactionSerializer
 * @export
 * @interface AchTransaction
 */
export interface AchTransaction {
    /**
     * 
     * @type {string}
     * @memberof AchTransaction
     */
    readonly id?: string;
    /**
     * Indicates the status of the transfer, for instance, if it's been processed or is pending.
     * 
     * * `analyzing` - analyzing
     * * `pending` - pending
     * * `processing` - processing
     * * `processed` - processed
     * * `rejected` - rejected
     * * `review` - review
     * * `canceled` - canceled
     * @type {AchTransactionStateEnum}
     * @memberof AchTransaction
     */
    readonly state?: AchTransactionStateEnum;
    /**
     * 
     * @type {Date}
     * @memberof AchTransaction
     */
    readonly createdAt?: Date | null;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof AchTransaction
     */
    amount: number;
    /**
     * UUID identifying the source account in the Narmi database.
     * @type {string}
     * @memberof AchTransaction
     */
    fromAccountId: string;
    /**
     * UUID identifying the destination account in the Narmi database.
     * @type {string}
     * @memberof AchTransaction
     */
    toAccountId: string;
    /**
     * 
     * @type {Date}
     * @memberof AchTransaction
     */
    readonly estimatedProcessDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AchTransaction
     */
    readonly estimatedArrivalDate?: Date;
}

/**
 * Check if a given object implements the AchTransaction interface.
 */
export function instanceOfAchTransaction(value: object): value is AchTransaction {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('fromAccountId' in value) || value['fromAccountId'] === undefined) return false;
    if (!('toAccountId' in value) || value['toAccountId'] === undefined) return false;
    return true;
}

export function AchTransactionFromJSON(json: any): AchTransaction {
    return AchTransactionFromJSONTyped(json, false);
}

export function AchTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AchTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : AchTransactionStateEnumFromJSON(json['state']),
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'amount': json['amount'],
        'fromAccountId': json['from_account_id'],
        'toAccountId': json['to_account_id'],
        'estimatedProcessDate': json['estimated_process_date'] == null ? undefined : (new Date(json['estimated_process_date'])),
        'estimatedArrivalDate': json['estimated_arrival_date'] == null ? undefined : (new Date(json['estimated_arrival_date'])),
    };
}

export function AchTransactionToJSON(value?: Omit<AchTransaction, 'id'|'state'|'created_at'|'estimated_process_date'|'estimated_arrival_date'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'from_account_id': value['fromAccountId'],
        'to_account_id': value['toAccountId'],
    };
}

