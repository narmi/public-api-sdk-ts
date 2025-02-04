/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.423)
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
 * @interface UpdateAccountDocRequest
 */
export interface UpdateAccountDocRequest {
    /**
     * User-defined nickname for the account. Will be used as the display name for the user.
     * @type {string}
     * @memberof UpdateAccountDocRequest
     */
    name?: string;
    /**
     * Per-user preference used to mark favorited accounts. This does not affect the data returned from the list accounts endpoint.
     * @type {boolean}
     * @memberof UpdateAccountDocRequest
     */
    favorited?: boolean;
    /**
     * Per-user preference to mark hidden accounts. This does not affect the data returned from the list accounts endpoint.
     * @type {boolean}
     * @memberof UpdateAccountDocRequest
     */
    hidden?: boolean;
}

/**
 * Check if a given object implements the UpdateAccountDocRequest interface.
 */
export function instanceOfUpdateAccountDocRequest(value: object): value is UpdateAccountDocRequest {
    return true;
}

export function UpdateAccountDocRequestFromJSON(json: any): UpdateAccountDocRequest {
    return UpdateAccountDocRequestFromJSONTyped(json, false);
}

export function UpdateAccountDocRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAccountDocRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'favorited': json['favorited'] == null ? undefined : json['favorited'],
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
    };
}

export function UpdateAccountDocRequestToJSON(value?: UpdateAccountDocRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'favorited': value['favorited'],
        'hidden': value['hidden'],
    };
}

