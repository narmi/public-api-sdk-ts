/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.150)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Common fields between `ScheduledTransferSerializer`, and AchTransactionSerializer
 * @export
 * @interface AchTransactionRequest
 */
export interface AchTransactionRequest {
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof AchTransactionRequest
     */
    amount: number;
    /**
     * UUID identifying the source account in the Narmi database.
     * @type {string}
     * @memberof AchTransactionRequest
     */
    fromAccountId: string;
    /**
     * UUID identifying the destination account in the Narmi database.
     * @type {string}
     * @memberof AchTransactionRequest
     */
    toAccountId: string;
    /**
     * Whether or not the terms of the transfer were agreed to.
     * @type {boolean}
     * @memberof AchTransactionRequest
     */
    agreement: boolean;
    /**
     * Device 'fingerprint' from alloy/iovation.
     * @type {string}
     * @memberof AchTransactionRequest
     */
    deviceId?: string;
    /**
     * Free-form description of transfer.
     * @type {string}
     * @memberof AchTransactionRequest
     */
    memo?: string;
}

/**
 * Check if a given object implements the AchTransactionRequest interface.
 */
export function instanceOfAchTransactionRequest(value: object): value is AchTransactionRequest {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('fromAccountId' in value) || value['fromAccountId'] === undefined) return false;
    if (!('toAccountId' in value) || value['toAccountId'] === undefined) return false;
    if (!('agreement' in value) || value['agreement'] === undefined) return false;
    return true;
}

export function AchTransactionRequestFromJSON(json: any): AchTransactionRequest {
    return AchTransactionRequestFromJSONTyped(json, false);
}

export function AchTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AchTransactionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'fromAccountId': json['from_account_id'],
        'toAccountId': json['to_account_id'],
        'agreement': json['agreement'],
        'deviceId': json['device_id'] == null ? undefined : json['device_id'],
        'memo': json['memo'] == null ? undefined : json['memo'],
    };
}

export function AchTransactionRequestToJSON(value?: AchTransactionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'from_account_id': value['fromAccountId'],
        'to_account_id': value['toAccountId'],
        'agreement': value['agreement'],
        'device_id': value['deviceId'],
        'memo': value['memo'],
    };
}

