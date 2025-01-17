/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.113)
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
 * @interface GeneralError
 */
export interface GeneralError {
    /**
     * 
     * @type {string}
     * @memberof GeneralError
     */
    id?: string;
    /**
     * An error response detailing the field and the nature of the error.
     * @type {string}
     * @memberof GeneralError
     */
    message: string;
}

/**
 * Check if a given object implements the GeneralError interface.
 */
export function instanceOfGeneralError(value: object): value is GeneralError {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function GeneralErrorFromJSON(json: any): GeneralError {
    return GeneralErrorFromJSONTyped(json, false);
}

export function GeneralErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralError {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'],
    };
}

export function GeneralErrorToJSON(value?: GeneralError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

