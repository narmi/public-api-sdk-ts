/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.75)
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
 * @interface ErrorRequest
 */
export interface ErrorRequest {
    /**
     * 
     * @type {string}
     * @memberof ErrorRequest
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the ErrorRequest interface.
 */
export function instanceOfErrorRequest(value: object): value is ErrorRequest {
    if (!('code' in value) || value['code'] === undefined) return false;
    return true;
}

export function ErrorRequestFromJSON(json: any): ErrorRequest {
    return ErrorRequestFromJSONTyped(json, false);
}

export function ErrorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function ErrorRequestToJSON(value?: ErrorRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'description': value['description'],
    };
}

