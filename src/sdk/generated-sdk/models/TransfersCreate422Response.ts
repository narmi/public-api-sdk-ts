/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.131)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { TransfersCreate422ResponseMessage } from './TransfersCreate422ResponseMessage';
import {
    TransfersCreate422ResponseMessageFromJSON,
    TransfersCreate422ResponseMessageFromJSONTyped,
    TransfersCreate422ResponseMessageToJSON,
} from './TransfersCreate422ResponseMessage';

/**
 * 
 * @export
 * @interface TransfersCreate422Response
 */
export interface TransfersCreate422Response {
    /**
     * 
     * @type {string}
     * @memberof TransfersCreate422Response
     */
    id?: string;
    /**
     * 
     * @type {TransfersCreate422ResponseMessage}
     * @memberof TransfersCreate422Response
     */
    message?: TransfersCreate422ResponseMessage;
}

/**
 * Check if a given object implements the TransfersCreate422Response interface.
 */
export function instanceOfTransfersCreate422Response(value: object): value is TransfersCreate422Response {
    return true;
}

export function TransfersCreate422ResponseFromJSON(json: any): TransfersCreate422Response {
    return TransfersCreate422ResponseFromJSONTyped(json, false);
}

export function TransfersCreate422ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransfersCreate422Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : TransfersCreate422ResponseMessageFromJSON(json['message']),
    };
}

export function TransfersCreate422ResponseToJSON(value?: TransfersCreate422Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': TransfersCreate422ResponseMessageToJSON(value['message']),
    };
}

