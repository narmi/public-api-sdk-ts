/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.166)
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
 * @interface Success
 */
export interface Success {
    /**
     * 
     * @type {boolean}
     * @memberof Success
     */
    success?: boolean;
}

/**
 * Check if a given object implements the Success interface.
 */
export function instanceOfSuccess(value: object): value is Success {
    return true;
}

export function SuccessFromJSON(json: any): Success {
    return SuccessFromJSONTyped(json, false);
}

export function SuccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): Success {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
    };
}

export function SuccessToJSON(value?: Success | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'success': value['success'],
    };
}

