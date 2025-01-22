/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.404)
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
 * @interface AccountsDocumentsRetrieve404Response
 */
export interface AccountsDocumentsRetrieve404Response {
    /**
     * 
     * @type {string}
     * @memberof AccountsDocumentsRetrieve404Response
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountsDocumentsRetrieve404Response
     */
    message?: string;
}

/**
 * Check if a given object implements the AccountsDocumentsRetrieve404Response interface.
 */
export function instanceOfAccountsDocumentsRetrieve404Response(value: object): value is AccountsDocumentsRetrieve404Response {
    return true;
}

export function AccountsDocumentsRetrieve404ResponseFromJSON(json: any): AccountsDocumentsRetrieve404Response {
    return AccountsDocumentsRetrieve404ResponseFromJSONTyped(json, false);
}

export function AccountsDocumentsRetrieve404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsDocumentsRetrieve404Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function AccountsDocumentsRetrieve404ResponseToJSON(value?: AccountsDocumentsRetrieve404Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

