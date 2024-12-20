/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.77)
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
 * @interface AutomaticSavingsEnrollmentDeserializerRequest
 */
export interface AutomaticSavingsEnrollmentDeserializerRequest {
    /**
     * 
     * @type {string}
     * @memberof AutomaticSavingsEnrollmentDeserializerRequest
     */
    sourceAccountUuid: string;
    /**
     * 
     * @type {string}
     * @memberof AutomaticSavingsEnrollmentDeserializerRequest
     */
    destinationAccountUuid: string;
}

/**
 * Check if a given object implements the AutomaticSavingsEnrollmentDeserializerRequest interface.
 */
export function instanceOfAutomaticSavingsEnrollmentDeserializerRequest(value: object): value is AutomaticSavingsEnrollmentDeserializerRequest {
    if (!('sourceAccountUuid' in value) || value['sourceAccountUuid'] === undefined) return false;
    if (!('destinationAccountUuid' in value) || value['destinationAccountUuid'] === undefined) return false;
    return true;
}

export function AutomaticSavingsEnrollmentDeserializerRequestFromJSON(json: any): AutomaticSavingsEnrollmentDeserializerRequest {
    return AutomaticSavingsEnrollmentDeserializerRequestFromJSONTyped(json, false);
}

export function AutomaticSavingsEnrollmentDeserializerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutomaticSavingsEnrollmentDeserializerRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'sourceAccountUuid': json['source_account_uuid'],
        'destinationAccountUuid': json['destination_account_uuid'],
    };
}

export function AutomaticSavingsEnrollmentDeserializerRequestToJSON(value?: AutomaticSavingsEnrollmentDeserializerRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'source_account_uuid': value['sourceAccountUuid'],
        'destination_account_uuid': value['destinationAccountUuid'],
    };
}

