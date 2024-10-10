/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.225)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BillDeliveryOption
 */
export interface BillDeliveryOption {
    /**
     * 
     * @type {string}
     * @memberof BillDeliveryOption
     */
    readonly description?: string;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof BillDeliveryOption
     */
    readonly fee?: number;
    /**
     * 
     * @type {number}
     * @memberof BillDeliveryOption
     */
    readonly transitDays?: number;
    /**
     * 
     * @type {Date}
     * @memberof BillDeliveryOption
     */
    date: Date;
}

/**
 * Check if a given object implements the BillDeliveryOption interface.
 */
export function instanceOfBillDeliveryOption(value: object): value is BillDeliveryOption {
    if (!('date' in value) || value['date'] === undefined) return false;
    return true;
}

export function BillDeliveryOptionFromJSON(json: any): BillDeliveryOption {
    return BillDeliveryOptionFromJSONTyped(json, false);
}

export function BillDeliveryOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillDeliveryOption {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'fee': json['fee'] == null ? undefined : json['fee'],
        'transitDays': json['transit_days'] == null ? undefined : json['transit_days'],
        'date': (new Date(json['date'])),
    };
}

export function BillDeliveryOptionToJSON(value?: Omit<BillDeliveryOption, 'description'|'fee'|'transit_days'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date': ((value['date']).toISOString().substring(0,10)),
    };
}
