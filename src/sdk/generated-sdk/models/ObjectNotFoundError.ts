/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.180)
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
 * @interface ObjectNotFoundError
 */
export interface ObjectNotFoundError {
    /**
     * 
     * @type {string}
     * @memberof ObjectNotFoundError
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjectNotFoundError
     */
    message?: string;
}

/**
 * Check if a given object implements the ObjectNotFoundError interface.
 */
export function instanceOfObjectNotFoundError(value: object): value is ObjectNotFoundError {
    return true;
}

export function ObjectNotFoundErrorFromJSON(json: any): ObjectNotFoundError {
    return ObjectNotFoundErrorFromJSONTyped(json, false);
}

export function ObjectNotFoundErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectNotFoundError {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function ObjectNotFoundErrorToJSON(value?: ObjectNotFoundError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

