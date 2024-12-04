/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.258)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { MessageCreate } from './MessageCreate';
import {
    MessageCreateFromJSON,
    MessageCreateFromJSONTyped,
    MessageCreateToJSON,
} from './MessageCreate';

/**
 * 
 * @export
 * @interface MessageCreateResponse
 */
export interface MessageCreateResponse {
    /**
     * 
     * @type {MessageCreate}
     * @memberof MessageCreateResponse
     */
    message: MessageCreate;
}

/**
 * Check if a given object implements the MessageCreateResponse interface.
 */
export function instanceOfMessageCreateResponse(value: object): value is MessageCreateResponse {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function MessageCreateResponseFromJSON(json: any): MessageCreateResponse {
    return MessageCreateResponseFromJSONTyped(json, false);
}

export function MessageCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': MessageCreateFromJSON(json['message']),
    };
}

export function MessageCreateResponseToJSON(value?: MessageCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': MessageCreateToJSON(value['message']),
    };
}

