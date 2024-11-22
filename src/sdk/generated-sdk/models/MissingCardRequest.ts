/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.297)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ReasonEnum } from './ReasonEnum';
import {
    ReasonEnumFromJSON,
    ReasonEnumFromJSONTyped,
    ReasonEnumToJSON,
} from './ReasonEnum';

/**
 * 
 * @export
 * @interface MissingCardRequest
 */
export interface MissingCardRequest {
    /**
     * 
     * @type {ReasonEnum}
     * @memberof MissingCardRequest
     */
    reason: ReasonEnum;
}

/**
 * Check if a given object implements the MissingCardRequest interface.
 */
export function instanceOfMissingCardRequest(value: object): value is MissingCardRequest {
    if (!('reason' in value) || value['reason'] === undefined) return false;
    return true;
}

export function MissingCardRequestFromJSON(json: any): MissingCardRequest {
    return MissingCardRequestFromJSONTyped(json, false);
}

export function MissingCardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MissingCardRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'reason': ReasonEnumFromJSON(json['reason']),
    };
}

export function MissingCardRequestToJSON(value?: MissingCardRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reason': ReasonEnumToJSON(value['reason']),
    };
}

