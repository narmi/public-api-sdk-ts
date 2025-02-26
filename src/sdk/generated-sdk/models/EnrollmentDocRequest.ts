/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.183)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { EnrollmentDocUserCategoryEnum } from './EnrollmentDocUserCategoryEnum';
import {
    EnrollmentDocUserCategoryEnumFromJSON,
    EnrollmentDocUserCategoryEnumFromJSONTyped,
    EnrollmentDocUserCategoryEnumToJSON,
} from './EnrollmentDocUserCategoryEnum';

/**
 * 
 * @export
 * @interface EnrollmentDocRequest
 */
export interface EnrollmentDocRequest {
    /**
     * 
     * @type {EnrollmentDocUserCategoryEnum}
     * @memberof EnrollmentDocRequest
     */
    userCategory?: EnrollmentDocUserCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof EnrollmentDocRequest
     */
    primaryAccountNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof EnrollmentDocRequest
     */
    dob?: Date;
    /**
     * 
     * @type {string}
     * @memberof EnrollmentDocRequest
     */
    ssn?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrollmentDocRequest
     */
    ein?: string;
    /**
     * If user is pre-validated via Link Service, supply encoded payload instead of other fields.
     * @type {string}
     * @memberof EnrollmentDocRequest
     */
    payload?: string;
}

/**
 * Check if a given object implements the EnrollmentDocRequest interface.
 */
export function instanceOfEnrollmentDocRequest(value: object): value is EnrollmentDocRequest {
    return true;
}

export function EnrollmentDocRequestFromJSON(json: any): EnrollmentDocRequest {
    return EnrollmentDocRequestFromJSONTyped(json, false);
}

export function EnrollmentDocRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrollmentDocRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userCategory': json['user_category'] == null ? undefined : EnrollmentDocUserCategoryEnumFromJSON(json['user_category']),
        'primaryAccountNumber': json['primary_account_number'] == null ? undefined : json['primary_account_number'],
        'dob': json['dob'] == null ? undefined : (new Date(json['dob'])),
        'ssn': json['ssn'] == null ? undefined : json['ssn'],
        'ein': json['ein'] == null ? undefined : json['ein'],
        'payload': json['payload'] == null ? undefined : json['payload'],
    };
}

export function EnrollmentDocRequestToJSON(value?: EnrollmentDocRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user_category': EnrollmentDocUserCategoryEnumToJSON(value['userCategory']),
        'primary_account_number': value['primaryAccountNumber'],
        'dob': value['dob'] == null ? undefined : ((value['dob']).toISOString().substring(0,10)),
        'ssn': value['ssn'],
        'ein': value['ein'],
        'payload': value['payload'],
    };
}

