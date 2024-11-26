/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.308)
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
 * @interface InvalidRequestError
 */
export interface InvalidRequestError {
    /**
     * 
     * @type {string}
     * @memberof InvalidRequestError
     */
    id?: string;
    /**
     * An error response detailing the field and the nature of the error.
     * @type {{ [key: string]: any; }}
     * @memberof InvalidRequestError
     */
    message?: { [key: string]: any; };
}

/**
 * Check if a given object implements the InvalidRequestError interface.
 */
export function instanceOfInvalidRequestError(value: object): value is InvalidRequestError {
    return true;
}

export function InvalidRequestErrorFromJSON(json: any): InvalidRequestError {
    return InvalidRequestErrorFromJSONTyped(json, false);
}

export function InvalidRequestErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvalidRequestError {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function InvalidRequestErrorToJSON(value?: InvalidRequestError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

