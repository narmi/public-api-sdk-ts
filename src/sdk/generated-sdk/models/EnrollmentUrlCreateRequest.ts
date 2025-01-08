/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.115)
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
 * @interface EnrollmentUrlCreateRequest
 */
export interface EnrollmentUrlCreateRequest {
    /**
     * The enrolling account number.
     * @type {string}
     * @memberof EnrollmentUrlCreateRequest
     */
    accountNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof EnrollmentUrlCreateRequest
     */
    dateOfBirth?: Date;
    /**
     * User social security number.
     * @type {string}
     * @memberof EnrollmentUrlCreateRequest
     */
    taxId?: string;
    /**
     * Organization identifier from the banking core. Only required for business accounts.
     * @type {string}
     * @memberof EnrollmentUrlCreateRequest
     */
    institutionBusinessIdentifier?: string;
    /**
     * Only required for business accounts.
     * @type {string}
     * @memberof EnrollmentUrlCreateRequest
     */
    ein?: string;
}

/**
 * Check if a given object implements the EnrollmentUrlCreateRequest interface.
 */
export function instanceOfEnrollmentUrlCreateRequest(value: object): value is EnrollmentUrlCreateRequest {
    return true;
}

export function EnrollmentUrlCreateRequestFromJSON(json: any): EnrollmentUrlCreateRequest {
    return EnrollmentUrlCreateRequestFromJSONTyped(json, false);
}

export function EnrollmentUrlCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrollmentUrlCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'accountNumber': json['account_number'] == null ? undefined : json['account_number'],
        'dateOfBirth': json['date_of_birth'] == null ? undefined : (new Date(json['date_of_birth'])),
        'taxId': json['tax_id'] == null ? undefined : json['tax_id'],
        'institutionBusinessIdentifier': json['institution_business_identifier'] == null ? undefined : json['institution_business_identifier'],
        'ein': json['ein'] == null ? undefined : json['ein'],
    };
}

export function EnrollmentUrlCreateRequestToJSON(value?: EnrollmentUrlCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_number': value['accountNumber'],
        'date_of_birth': value['dateOfBirth'] == null ? undefined : ((value['dateOfBirth']).toISOString().substring(0,10)),
        'tax_id': value['taxId'],
        'institution_business_identifier': value['institutionBusinessIdentifier'],
        'ein': value['ein'],
    };
}

