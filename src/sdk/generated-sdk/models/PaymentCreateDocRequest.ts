/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.109)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ErrorRequest } from './ErrorRequest';
import {
    ErrorRequestFromJSON,
    ErrorRequestFromJSONTyped,
    ErrorRequestToJSON,
} from './ErrorRequest';

/**
 * 
 * @export
 * @interface PaymentCreateDocRequest
 */
export interface PaymentCreateDocRequest {
    /**
     * Identifies payment recipient to the payment processor. Can be fetched via the payees endpoints.
     * @type {string}
     * @memberof PaymentCreateDocRequest
     */
    payeeId: string;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof PaymentCreateDocRequest
     */
    amount: number;
    /**
     * 
     * @type {Date}
     * @memberof PaymentCreateDocRequest
     */
    sendDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof PaymentCreateDocRequest
     */
    expectedArrivalDate: Date;
    /**
     * The mode of payment, such as check or email.
     * @type {string}
     * @memberof PaymentCreateDocRequest
     */
    type: string;
    /**
     * Cadence of recurring payment, as per the RFC-5545 specification.
     * @type {string}
     * @memberof PaymentCreateDocRequest
     */
    recurringRule: string;
    /**
     * Warning codes to be suppressed during call.
     * @type {Array<ErrorRequest>}
     * @memberof PaymentCreateDocRequest
     */
    ignoreWarnings?: Array<ErrorRequest>;
}

/**
 * Check if a given object implements the PaymentCreateDocRequest interface.
 */
export function instanceOfPaymentCreateDocRequest(value: object): value is PaymentCreateDocRequest {
    if (!('payeeId' in value) || value['payeeId'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('sendDate' in value) || value['sendDate'] === undefined) return false;
    if (!('expectedArrivalDate' in value) || value['expectedArrivalDate'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('recurringRule' in value) || value['recurringRule'] === undefined) return false;
    return true;
}

export function PaymentCreateDocRequestFromJSON(json: any): PaymentCreateDocRequest {
    return PaymentCreateDocRequestFromJSONTyped(json, false);
}

export function PaymentCreateDocRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentCreateDocRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payeeId': json['payee_id'],
        'amount': json['amount'],
        'sendDate': (new Date(json['send_date'])),
        'expectedArrivalDate': (new Date(json['expected_arrival_date'])),
        'type': json['type'],
        'recurringRule': json['recurring_rule'],
        'ignoreWarnings': json['ignore_warnings'] == null ? undefined : ((json['ignore_warnings'] as Array<any>).map(ErrorRequestFromJSON)),
    };
}

export function PaymentCreateDocRequestToJSON(value?: PaymentCreateDocRequest | null): any {
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
        'ignore_warnings': value['ignoreWarnings'] == null ? undefined : ((value['ignoreWarnings'] as Array<any>).map(ErrorRequestToJSON)),
    };
}

