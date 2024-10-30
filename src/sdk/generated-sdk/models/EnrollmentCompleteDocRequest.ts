/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.172)
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
 * @interface EnrollmentCompleteDocRequest
 */
export interface EnrollmentCompleteDocRequest {
    /**
     * The enrolling user's estatement preference. Only relevant for the account holder.
     * @type {boolean}
     * @memberof EnrollmentCompleteDocRequest
     */
    hasEstatements?: boolean;
}

/**
 * Check if a given object implements the EnrollmentCompleteDocRequest interface.
 */
export function instanceOfEnrollmentCompleteDocRequest(value: object): value is EnrollmentCompleteDocRequest {
    return true;
}

export function EnrollmentCompleteDocRequestFromJSON(json: any): EnrollmentCompleteDocRequest {
    return EnrollmentCompleteDocRequestFromJSONTyped(json, false);
}

export function EnrollmentCompleteDocRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrollmentCompleteDocRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'hasEstatements': json['has_estatements'] == null ? undefined : json['has_estatements'],
    };
}

export function EnrollmentCompleteDocRequestToJSON(value?: EnrollmentCompleteDocRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'has_estatements': value['hasEstatements'],
    };
}

