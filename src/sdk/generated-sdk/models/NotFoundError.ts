/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.290)
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
 * @interface NotFoundError
 */
export interface NotFoundError {
    /**
     * 
     * @type {string}
     * @memberof NotFoundError
     */
    id?: string;
    /**
     * An error response detailing the nature of the error.
     * @type {string}
     * @memberof NotFoundError
     */
    message: string;
}

/**
 * Check if a given object implements the NotFoundError interface.
 */
export function instanceOfNotFoundError(value: object): value is NotFoundError {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function NotFoundErrorFromJSON(json: any): NotFoundError {
    return NotFoundErrorFromJSONTyped(json, false);
}

export function NotFoundErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotFoundError {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'],
    };
}

export function NotFoundErrorToJSON(value?: NotFoundError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

