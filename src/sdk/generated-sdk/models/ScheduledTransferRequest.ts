/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.334)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Represents:
 * indigo.models.recurring_transfer.AchTransfer,
 * indigo.models.recurring_transfer.IntraInstitutionTransfer
 * @export
 * @interface ScheduledTransferRequest
 */
export interface ScheduledTransferRequest {
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof ScheduledTransferRequest
     */
    amount: number;
    /**
     * UUID identifying the source account in the Narmi database.
     * @type {string}
     * @memberof ScheduledTransferRequest
     */
    fromAccountId: string;
    /**
     * UUID identifying the destination account in the Narmi database.
     * @type {string}
     * @memberof ScheduledTransferRequest
     */
    toAccountId: string;
    /**
     * Whether or not the terms of the transfer were agreed to.
     * @type {boolean}
     * @memberof ScheduledTransferRequest
     */
    agreement: boolean;
    /**
     * Device 'fingerprint' from alloy/iovation.
     * @type {string}
     * @memberof ScheduledTransferRequest
     */
    deviceId?: string;
    /**
     * Cadence of recurring event, as per the RFC-5545 specification.
     * @type {string}
     * @memberof ScheduledTransferRequest
     */
    recurringRule: string;
    /**
     * Free-form description of transfer.
     * @type {string}
     * @memberof ScheduledTransferRequest
     */
    memo?: string;
    /**
     * Free-form description of transfer.
     * @type {string}
     * @memberof ScheduledTransferRequest
     */
    description?: string;
    /**
     * Associated ACH Transfer used to evaluate transfer limits, and if they've been exceeded.
     * @type {string}
     * @memberof ScheduledTransferRequest
     */
    achTransfer?: string;
}

/**
 * Check if a given object implements the ScheduledTransferRequest interface.
 */
export function instanceOfScheduledTransferRequest(value: object): value is ScheduledTransferRequest {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('fromAccountId' in value) || value['fromAccountId'] === undefined) return false;
    if (!('toAccountId' in value) || value['toAccountId'] === undefined) return false;
    if (!('agreement' in value) || value['agreement'] === undefined) return false;
    if (!('recurringRule' in value) || value['recurringRule'] === undefined) return false;
    return true;
}

export function ScheduledTransferRequestFromJSON(json: any): ScheduledTransferRequest {
    return ScheduledTransferRequestFromJSONTyped(json, false);
}

export function ScheduledTransferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransferRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'fromAccountId': json['from_account_id'],
        'toAccountId': json['to_account_id'],
        'agreement': json['agreement'],
        'deviceId': json['device_id'] == null ? undefined : json['device_id'],
        'recurringRule': json['recurring_rule'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'description': json['description'] == null ? undefined : json['description'],
        'achTransfer': json['ach_transfer'] == null ? undefined : json['ach_transfer'],
    };
}

export function ScheduledTransferRequestToJSON(value?: ScheduledTransferRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'from_account_id': value['fromAccountId'],
        'to_account_id': value['toAccountId'],
        'agreement': value['agreement'],
        'device_id': value['deviceId'],
        'recurring_rule': value['recurringRule'],
        'memo': value['memo'],
        'description': value['description'],
        'ach_transfer': value['achTransfer'],
    };
}

