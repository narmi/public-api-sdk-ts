/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.13)
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
 * @interface ThreadsResponse
 */
export interface ThreadsResponse {
    /**
     * 
     * @type {Array<Thread>}
     * @memberof ThreadsResponse
     */
    threads: Array<Thread>;
}

/**
 * Check if a given object implements the ThreadsResponse interface.
 */
export function instanceOfThreadsResponse(value: object): value is ThreadsResponse {
    if (!('threads' in value) || value['threads'] === undefined) return false;
    return true;
}

export function ThreadsResponseFromJSON(json: any): ThreadsResponse {
    return ThreadsResponseFromJSONTyped(json, false);
}

export function ThreadsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'threads': ((json['threads'] as Array<any>).map(ThreadFromJSON)),
    };
}

export function ThreadsResponseToJSON(value?: ThreadsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'threads': ((value['threads'] as Array<any>).map(ThreadToJSON)),
    };
}

