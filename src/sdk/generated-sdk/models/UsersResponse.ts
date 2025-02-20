/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.139)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';

/**
 * 
 * @export
 * @interface UsersResponse
 */
export interface UsersResponse {
    /**
     * 
     * @type {Array<Profile>}
     * @memberof UsersResponse
     */
    users: Array<Profile>;
}

/**
 * Check if a given object implements the UsersResponse interface.
 */
export function instanceOfUsersResponse(value: object): value is UsersResponse {
    if (!('users' in value) || value['users'] === undefined) return false;
    return true;
}

export function UsersResponseFromJSON(json: any): UsersResponse {
    return UsersResponseFromJSONTyped(json, false);
}

export function UsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'users': ((json['users'] as Array<any>).map(ProfileFromJSON)),
    };
}

export function UsersResponseToJSON(value?: UsersResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'users': ((value['users'] as Array<any>).map(ProfileToJSON)),
    };
}

