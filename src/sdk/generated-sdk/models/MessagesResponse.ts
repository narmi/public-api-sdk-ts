/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.170)
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
 * @interface MessagesResponse
 */
export interface MessagesResponse {
    /**
     * 
     * @type {Array<Message>}
     * @memberof MessagesResponse
     */
    messages: Array<Message>;
}

/**
 * Check if a given object implements the MessagesResponse interface.
 */
export function instanceOfMessagesResponse(value: object): value is MessagesResponse {
    if (!('messages' in value) || value['messages'] === undefined) return false;
    return true;
}

export function MessagesResponseFromJSON(json: any): MessagesResponse {
    return MessagesResponseFromJSONTyped(json, false);
}

export function MessagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'messages': ((json['messages'] as Array<any>).map(MessageFromJSON)),
    };
}

export function MessagesResponseToJSON(value?: MessagesResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'messages': ((value['messages'] as Array<any>).map(MessageToJSON)),
    };
}

