/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.66)
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
 * @interface CheckImage
 */
export interface CheckImage {
    /**
     * A base 64 encoded image of the front of the check
     * @type {string}
     * @memberof CheckImage
     */
    readonly front?: string;
    /**
     * A base 64 encoded image of the back of the check
     * @type {string}
     * @memberof CheckImage
     */
    readonly back?: string;
}

/**
 * Check if a given object implements the CheckImage interface.
 */
export function instanceOfCheckImage(value: object): value is CheckImage {
    return true;
}

export function CheckImageFromJSON(json: any): CheckImage {
    return CheckImageFromJSONTyped(json, false);
}

export function CheckImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckImage {
    if (json == null) {
        return json;
    }
    return {
        
        'front': json['front'] == null ? undefined : json['front'],
        'back': json['back'] == null ? undefined : json['back'],
    };
}

export function CheckImageToJSON(value?: Omit<CheckImage, 'front'|'back'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

