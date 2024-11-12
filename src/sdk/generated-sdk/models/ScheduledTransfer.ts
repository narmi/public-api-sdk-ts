/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.88)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ScheduledTransferStateEnum } from './ScheduledTransferStateEnum';
import {
    ScheduledTransferStateEnumFromJSON,
    ScheduledTransferStateEnumFromJSONTyped,
    ScheduledTransferStateEnumToJSON,
} from './ScheduledTransferStateEnum';

/**
 * Represents:
 * indigo.models.recurring_transfer.AchTransfer,
 * indigo.models.recurring_transfer.IntraInstitutionTransfer
 * @export
 * @interface ScheduledTransfer
 */
export interface ScheduledTransfer {
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransfer
     */
    readonly id?: string;
    /**
     * Whether or not the scheduled transfer is expired.
     * 
     * * `expired` - expired
     * * `active` - active
     * @type {ScheduledTransferStateEnum}
     * @memberof ScheduledTransfer
     */
    readonly state?: ScheduledTransferStateEnum;
    /**
     * 
     * @type {Date}
     * @memberof ScheduledTransfer
     */
    readonly createdAt?: Date | null;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof ScheduledTransfer
     */
    amount: number;
    /**
     * UUID identifying the source account in the Narmi database.
     * @type {string}
     * @memberof ScheduledTransfer
     */
    fromAccountId: string;
    /**
     * UUID identifying the destination account in the Narmi database.
     * @type {string}
     * @memberof ScheduledTransfer
     */
    toAccountId: string;
    /**
     * 
     * @type {Date}
     * @memberof ScheduledTransfer
     */
    readonly nextTransferAt?: Date;
    /**
     * Cadence of recurring event, as per the RFC-5545 specification.
     * @type {string}
     * @memberof ScheduledTransfer
     */
    recurringRule: string;
    /**
     * Free-form description of transfer.
     * @type {string}
     * @memberof ScheduledTransfer
     */
    memo?: string;
    /**
     * Free-form description of transfer.
     * @type {string}
     * @memberof ScheduledTransfer
     */
    description?: string;
}

/**
 * Check if a given object implements the ScheduledTransfer interface.
 */
export function instanceOfScheduledTransfer(value: object): value is ScheduledTransfer {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('fromAccountId' in value) || value['fromAccountId'] === undefined) return false;
    if (!('toAccountId' in value) || value['toAccountId'] === undefined) return false;
    if (!('recurringRule' in value) || value['recurringRule'] === undefined) return false;
    return true;
}

export function ScheduledTransferFromJSON(json: any): ScheduledTransfer {
    return ScheduledTransferFromJSONTyped(json, false);
}

export function ScheduledTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransfer {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ScheduledTransferStateEnumFromJSON(json['state']),
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'amount': json['amount'],
        'fromAccountId': json['from_account_id'],
        'toAccountId': json['to_account_id'],
        'nextTransferAt': json['next_transfer_at'] == null ? undefined : (new Date(json['next_transfer_at'])),
        'recurringRule': json['recurring_rule'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function ScheduledTransferToJSON(value?: Omit<ScheduledTransfer, 'id'|'state'|'created_at'|'next_transfer_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'from_account_id': value['fromAccountId'],
        'to_account_id': value['toAccountId'],
        'recurring_rule': value['recurringRule'],
        'memo': value['memo'],
        'description': value['description'],
    };
}

