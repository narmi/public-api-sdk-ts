/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.379)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { StateFf1Enum } from './StateFf1Enum';
import {
    StateFf1EnumFromJSON,
    StateFf1EnumFromJSONTyped,
    StateFf1EnumToJSON,
} from './StateFf1Enum';

/**
 * 
 * @export
 * @interface ThreadUpdateRequest
 */
export interface ThreadUpdateRequest {
    /**
     * Indicates whether the thread has been closed or remains open.
     * 
     * * `closed` - closed
     * * `open` - open
     * @type {StateFf1Enum}
     * @memberof ThreadUpdateRequest
     */
    state?: StateFf1Enum;
}

/**
 * Check if a given object implements the ThreadUpdateRequest interface.
 */
export function instanceOfThreadUpdateRequest(value: object): value is ThreadUpdateRequest {
    return true;
}

export function ThreadUpdateRequestFromJSON(json: any): ThreadUpdateRequest {
    return ThreadUpdateRequestFromJSONTyped(json, false);
}

export function ThreadUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'state': json['state'] == null ? undefined : StateFf1EnumFromJSON(json['state']),
    };
}

export function ThreadUpdateRequestToJSON(value?: ThreadUpdateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': StateFf1EnumToJSON(value['state']),
    };
}

