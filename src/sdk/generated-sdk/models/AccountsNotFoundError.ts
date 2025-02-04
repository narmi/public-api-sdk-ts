/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.17)
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
 * @interface AccountsNotFoundError
 */
export interface AccountsNotFoundError {
    /**
     * 
     * @type {string}
     * @memberof AccountsNotFoundError
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountsNotFoundError
     */
    message?: string;
}

/**
 * Check if a given object implements the AccountsNotFoundError interface.
 */
export function instanceOfAccountsNotFoundError(value: object): value is AccountsNotFoundError {
    return true;
}

export function AccountsNotFoundErrorFromJSON(json: any): AccountsNotFoundError {
    return AccountsNotFoundErrorFromJSONTyped(json, false);
}

export function AccountsNotFoundErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsNotFoundError {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function AccountsNotFoundErrorToJSON(value?: AccountsNotFoundError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

