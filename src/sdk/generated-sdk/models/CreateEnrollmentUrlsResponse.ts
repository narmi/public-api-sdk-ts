/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.260)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CreateEnrollmentUrlsURLField } from './CreateEnrollmentUrlsURLField';
import {
    CreateEnrollmentUrlsURLFieldFromJSON,
    CreateEnrollmentUrlsURLFieldFromJSONTyped,
    CreateEnrollmentUrlsURLFieldToJSON,
} from './CreateEnrollmentUrlsURLField';

/**
 * 
 * @export
 * @interface CreateEnrollmentUrlsResponse
 */
export interface CreateEnrollmentUrlsResponse {
    /**
     * 
     * @type {CreateEnrollmentUrlsURLField}
     * @memberof CreateEnrollmentUrlsResponse
     */
    enrollment: CreateEnrollmentUrlsURLField;
}

/**
 * Check if a given object implements the CreateEnrollmentUrlsResponse interface.
 */
export function instanceOfCreateEnrollmentUrlsResponse(value: object): value is CreateEnrollmentUrlsResponse {
    if (!('enrollment' in value) || value['enrollment'] === undefined) return false;
    return true;
}

export function CreateEnrollmentUrlsResponseFromJSON(json: any): CreateEnrollmentUrlsResponse {
    return CreateEnrollmentUrlsResponseFromJSONTyped(json, false);
}

export function CreateEnrollmentUrlsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEnrollmentUrlsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'enrollment': CreateEnrollmentUrlsURLFieldFromJSON(json['enrollment']),
    };
}

export function CreateEnrollmentUrlsResponseToJSON(value?: CreateEnrollmentUrlsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'enrollment': CreateEnrollmentUrlsURLFieldToJSON(value['enrollment']),
    };
}

