/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.165)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BillPayee } from './BillPayee';
import {
    BillPayeeFromJSON,
    BillPayeeFromJSONTyped,
    BillPayeeToJSON,
} from './BillPayee';

/**
 * 
 * @export
 * @interface Payee
 */
export interface Payee {
    /**
     * 
     * @type {BillPayee}
     * @memberof Payee
     */
    payee: BillPayee;
}

/**
 * Check if a given object implements the Payee interface.
 */
export function instanceOfPayee(value: object): value is Payee {
    if (!('payee' in value) || value['payee'] === undefined) return false;
    return true;
}

export function PayeeFromJSON(json: any): Payee {
    return PayeeFromJSONTyped(json, false);
}

export function PayeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Payee {
    if (json == null) {
        return json;
    }
    return {
        
        'payee': BillPayeeFromJSON(json['payee']),
    };
}

export function PayeeToJSON(value?: Payee | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'payee': BillPayeeToJSON(value['payee']),
    };
}

