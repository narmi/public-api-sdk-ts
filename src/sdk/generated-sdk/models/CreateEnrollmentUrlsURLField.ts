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
 * @interface CreateEnrollmentUrlsURLField
 */
export interface CreateEnrollmentUrlsURLField {
    /**
     * URL that enables a user to enroll without entering their details.
     * @type {string}
     * @memberof CreateEnrollmentUrlsURLField
     */
    url: string;
}

/**
 * Check if a given object implements the CreateEnrollmentUrlsURLField interface.
 */
export function instanceOfCreateEnrollmentUrlsURLField(value: object): value is CreateEnrollmentUrlsURLField {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function CreateEnrollmentUrlsURLFieldFromJSON(json: any): CreateEnrollmentUrlsURLField {
    return CreateEnrollmentUrlsURLFieldFromJSONTyped(json, false);
}

export function CreateEnrollmentUrlsURLFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEnrollmentUrlsURLField {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function CreateEnrollmentUrlsURLFieldToJSON(value?: CreateEnrollmentUrlsURLField | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
    };
}

