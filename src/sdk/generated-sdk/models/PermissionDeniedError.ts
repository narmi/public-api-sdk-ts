/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.225)
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
 * @interface PermissionDeniedError
 */
export interface PermissionDeniedError {
    /**
     * 
     * @type {string}
     * @memberof PermissionDeniedError
     */
    id?: string;
    /**
     * An error response detailing the field and the nature of the error.
     * @type {string}
     * @memberof PermissionDeniedError
     */
    message?: string;
}

/**
 * Check if a given object implements the PermissionDeniedError interface.
 */
export function instanceOfPermissionDeniedError(value: object): value is PermissionDeniedError {
    return true;
}

export function PermissionDeniedErrorFromJSON(json: any): PermissionDeniedError {
    return PermissionDeniedErrorFromJSONTyped(json, false);
}

export function PermissionDeniedErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionDeniedError {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function PermissionDeniedErrorToJSON(value?: PermissionDeniedError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

