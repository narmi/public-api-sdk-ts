/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.230)
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
 * @interface CheckDepositError
 */
export interface CheckDepositError {
    /**
     * 
     * @type {string}
     * @memberof CheckDepositError
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckDepositError
     */
    message?: string;
}

/**
 * Check if a given object implements the CheckDepositError interface.
 */
export function instanceOfCheckDepositError(value: object): value is CheckDepositError {
    return true;
}

export function CheckDepositErrorFromJSON(json: any): CheckDepositError {
    return CheckDepositErrorFromJSONTyped(json, false);
}

export function CheckDepositErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckDepositError {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function CheckDepositErrorToJSON(value?: CheckDepositError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

