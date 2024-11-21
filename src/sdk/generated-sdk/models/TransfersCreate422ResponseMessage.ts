/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.288)
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
 * @interface TransfersCreate422ResponseMessage
 */
export interface TransfersCreate422ResponseMessage {
    /**
     * 
     * @type {string}
     * @memberof TransfersCreate422ResponseMessage
     */
    amount?: string;
}

/**
 * Check if a given object implements the TransfersCreate422ResponseMessage interface.
 */
export function instanceOfTransfersCreate422ResponseMessage(value: object): value is TransfersCreate422ResponseMessage {
    return true;
}

export function TransfersCreate422ResponseMessageFromJSON(json: any): TransfersCreate422ResponseMessage {
    return TransfersCreate422ResponseMessageFromJSONTyped(json, false);
}

export function TransfersCreate422ResponseMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransfersCreate422ResponseMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}

export function TransfersCreate422ResponseMessageToJSON(value?: TransfersCreate422ResponseMessage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
    };
}

