/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.115)
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
 * @interface ServiceFailureError
 */
export interface ServiceFailureError {
    /**
     * 
     * @type {string}
     * @memberof ServiceFailureError
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceFailureError
     */
    message?: string;
}

/**
 * Check if a given object implements the ServiceFailureError interface.
 */
export function instanceOfServiceFailureError(value: object): value is ServiceFailureError {
    return true;
}

export function ServiceFailureErrorFromJSON(json: any): ServiceFailureError {
    return ServiceFailureErrorFromJSONTyped(json, false);
}

export function ServiceFailureErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceFailureError {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function ServiceFailureErrorToJSON(value?: ServiceFailureError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

