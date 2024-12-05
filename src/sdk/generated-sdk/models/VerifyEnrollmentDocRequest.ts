/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.261)
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
 * @interface VerifyEnrollmentDocRequest
 */
export interface VerifyEnrollmentDocRequest {
    /**
     * 
     * @type {string}
     * @memberof VerifyEnrollmentDocRequest
     */
    enrollmentCode: string;
}

/**
 * Check if a given object implements the VerifyEnrollmentDocRequest interface.
 */
export function instanceOfVerifyEnrollmentDocRequest(value: object): value is VerifyEnrollmentDocRequest {
    if (!('enrollmentCode' in value) || value['enrollmentCode'] === undefined) return false;
    return true;
}

export function VerifyEnrollmentDocRequestFromJSON(json: any): VerifyEnrollmentDocRequest {
    return VerifyEnrollmentDocRequestFromJSONTyped(json, false);
}

export function VerifyEnrollmentDocRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyEnrollmentDocRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'enrollmentCode': json['enrollment_code'],
    };
}

export function VerifyEnrollmentDocRequestToJSON(value?: VerifyEnrollmentDocRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'enrollment_code': value['enrollmentCode'],
    };
}

