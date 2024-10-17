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
import type { BillPaymentStateEnum } from './BillPaymentStateEnum';
import {
    BillPaymentStateEnumFromJSON,
    BillPaymentStateEnumFromJSONTyped,
    BillPaymentStateEnumToJSON,
} from './BillPaymentStateEnum';

/**
 * 
 * @export
 * @interface BillPayment
 */
export interface BillPayment {
    /**
     * Identifies payment sender to the payment processor.
     * @type {string}
     * @memberof BillPayment
     */
    readonly id?: string;
    /**
     * Indicates the status of the payment, for instance, if it's been processed or is pending.
     * @type {BillPaymentStateEnum}
     * @memberof BillPayment
     */
    readonly state?: BillPaymentStateEnum;
    /**
     * Identifies payment recipient to the payment processor. Can be fetched via the payees endpoints.
     * @type {string}
     * @memberof BillPayment
     */
    payeeId: string;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof BillPayment
     */
    amount: number;
    /**
     * 
     * @type {Date}
     * @memberof BillPayment
     */
    sendDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof BillPayment
     */
    expectedArrivalDate: Date;
    /**
     * The mode of payment, such as check or email.
     * @type {string}
     * @memberof BillPayment
     */
    type: string;
    /**
     * Cadence of recurring payment, as per the RFC-5545 specification.
     * @type {string}
     * @memberof BillPayment
     */
    recurringRule: string;
    /**
     * UUID identifying the source account in the Narmi database.
     * @type {string}
     * @memberof BillPayment
     */
    readonly fromAccountId?: string | null;
}

/**
 * Check if a given object implements the BillPayment interface.
 */
export function instanceOfBillPayment(value: object): value is BillPayment {
    if (!('payeeId' in value) || value['payeeId'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('sendDate' in value) || value['sendDate'] === undefined) return false;
    if (!('expectedArrivalDate' in value) || value['expectedArrivalDate'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('recurringRule' in value) || value['recurringRule'] === undefined) return false;
    return true;
}

export function BillPaymentFromJSON(json: any): BillPayment {
    return BillPaymentFromJSONTyped(json, false);
}

export function BillPaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillPayment {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : BillPaymentStateEnumFromJSON(json['state']),
        'payeeId': json['payee_id'],
        'amount': json['amount'],
        'sendDate': (new Date(json['send_date'])),
        'expectedArrivalDate': (new Date(json['expected_arrival_date'])),
        'type': json['type'],
        'recurringRule': json['recurring_rule'],
        'fromAccountId': json['from_account_id'] == null ? undefined : json['from_account_id'],
    };
}

export function BillPaymentToJSON(value?: Omit<BillPayment, 'id'|'state'|'from_account_id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'payee_id': value['payeeId'],
        'amount': value['amount'],
        'send_date': ((value['sendDate']).toISOString().substring(0,10)),
        'expected_arrival_date': ((value['expectedArrivalDate']).toISOString().substring(0,10)),
        'type': value['type'],
        'recurring_rule': value['recurringRule'],
    };
}

