/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.35)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Thread } from './Thread';
import {
    ThreadFromJSON,
    ThreadFromJSONTyped,
    ThreadToJSON,
} from './Thread';

/**
 * 
 * @export
 * @interface ThreadResponse
 */
export interface ThreadResponse {
    /**
     * 
     * @type {Thread}
     * @memberof ThreadResponse
     */
    thread: Thread;
}

/**
 * Check if a given object implements the ThreadResponse interface.
 */
export function instanceOfThreadResponse(value: object): value is ThreadResponse {
    if (!('thread' in value) || value['thread'] === undefined) return false;
    return true;
}

export function ThreadResponseFromJSON(json: any): ThreadResponse {
    return ThreadResponseFromJSONTyped(json, false);
}

export function ThreadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'thread': ThreadFromJSON(json['thread']),
    };
}

export function ThreadResponseToJSON(value?: ThreadResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'thread': ThreadToJSON(value['thread']),
    };
}

