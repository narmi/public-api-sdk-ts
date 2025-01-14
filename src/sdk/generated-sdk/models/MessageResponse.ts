/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.385)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Message } from './Message';
import {
    MessageFromJSON,
    MessageFromJSONTyped,
    MessageToJSON,
} from './Message';

/**
 * 
 * @export
 * @interface MessageResponse
 */
export interface MessageResponse {
    /**
     * 
     * @type {Message}
     * @memberof MessageResponse
     */
    message: Message;
}

/**
 * Check if a given object implements the MessageResponse interface.
 */
export function instanceOfMessageResponse(value: object): value is MessageResponse {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function MessageResponseFromJSON(json: any): MessageResponse {
    return MessageResponseFromJSONTyped(json, false);
}

export function MessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': MessageFromJSON(json['message']),
    };
}

export function MessageResponseToJSON(value?: MessageResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': MessageToJSON(value['message']),
    };
}

