/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.314)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BillPayment } from './BillPayment';
import {
    BillPaymentFromJSON,
    BillPaymentFromJSONTyped,
    BillPaymentToJSON,
} from './BillPayment';

/**
 * 
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * 
     * @type {BillPayment}
     * @memberof Payment
     */
    payment: BillPayment;
}

/**
 * Check if a given object implements the Payment interface.
 */
export function instanceOfPayment(value: object): value is Payment {
    if (!('payment' in value) || value['payment'] === undefined) return false;
    return true;
}

export function PaymentFromJSON(json: any): Payment {
    return PaymentFromJSONTyped(json, false);
}

export function PaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Payment {
    if (json == null) {
        return json;
    }
    return {
        
        'payment': BillPaymentFromJSON(json['payment']),
    };
}

export function PaymentToJSON(value?: Payment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'payment': BillPaymentToJSON(value['payment']),
    };
}

