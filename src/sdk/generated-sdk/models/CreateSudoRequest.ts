/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.184)
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
 * @interface CreateSudoRequest
 */
export interface CreateSudoRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSudoRequest
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSudoRequest
     */
    oneTimePassword?: string;
}

/**
 * Check if a given object implements the CreateSudoRequest interface.
 */
export function instanceOfCreateSudoRequest(value: object): value is CreateSudoRequest {
    return true;
}

export function CreateSudoRequestFromJSON(json: any): CreateSudoRequest {
    return CreateSudoRequestFromJSONTyped(json, false);
}

export function CreateSudoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSudoRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'deviceId': json['device_id'] == null ? undefined : json['device_id'],
        'oneTimePassword': json['one_time_password'] == null ? undefined : json['one_time_password'],
    };
}

export function CreateSudoRequestToJSON(value?: CreateSudoRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'device_id': value['deviceId'],
        'one_time_password': value['oneTimePassword'],
    };
}

