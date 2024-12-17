/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.312)
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
 * @interface UsersEnrollmentCodeCreate200Response
 */
export interface UsersEnrollmentCodeCreate200Response {
    /**
     * 
     * @type {string}
     * @memberof UsersEnrollmentCodeCreate200Response
     */
    message?: string;
}

/**
 * Check if a given object implements the UsersEnrollmentCodeCreate200Response interface.
 */
export function instanceOfUsersEnrollmentCodeCreate200Response(value: object): value is UsersEnrollmentCodeCreate200Response {
    return true;
}

export function UsersEnrollmentCodeCreate200ResponseFromJSON(json: any): UsersEnrollmentCodeCreate200Response {
    return UsersEnrollmentCodeCreate200ResponseFromJSONTyped(json, false);
}

export function UsersEnrollmentCodeCreate200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersEnrollmentCodeCreate200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function UsersEnrollmentCodeCreate200ResponseToJSON(value?: UsersEnrollmentCodeCreate200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}

