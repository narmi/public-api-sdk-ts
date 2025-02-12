/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.95)
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
 * @interface VerifyEnrollment
 */
export interface VerifyEnrollment {
    /**
     * 
     * @type {Profile}
     * @memberof VerifyEnrollment
     */
    readonly user?: Profile;
}

/**
 * Check if a given object implements the VerifyEnrollment interface.
 */
export function instanceOfVerifyEnrollment(value: object): value is VerifyEnrollment {
    return true;
}

export function VerifyEnrollmentFromJSON(json: any): VerifyEnrollment {
    return VerifyEnrollmentFromJSONTyped(json, false);
}

export function VerifyEnrollmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyEnrollment {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'] == null ? undefined : ProfileFromJSON(json['user']),
    };
}

export function VerifyEnrollmentToJSON(value?: Omit<VerifyEnrollment, 'user'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

