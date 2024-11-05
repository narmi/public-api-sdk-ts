/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.322)
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
 * @interface BillDeliveryOptionRequest
 */
export interface BillDeliveryOptionRequest {
    /**
     * 
     * @type {Date}
     * @memberof BillDeliveryOptionRequest
     */
    date: Date;
}

/**
 * Check if a given object implements the BillDeliveryOptionRequest interface.
 */
export function instanceOfBillDeliveryOptionRequest(value: object): value is BillDeliveryOptionRequest {
    if (!('date' in value) || value['date'] === undefined) return false;
    return true;
}

export function BillDeliveryOptionRequestFromJSON(json: any): BillDeliveryOptionRequest {
    return BillDeliveryOptionRequestFromJSONTyped(json, false);
}

export function BillDeliveryOptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillDeliveryOptionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
    };
}

export function BillDeliveryOptionRequestToJSON(value?: BillDeliveryOptionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date': ((value['date']).toISOString().substring(0,10)),
    };
}

