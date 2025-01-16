/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.104)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { EnrollmentLevelEnum } from './EnrollmentLevelEnum';
import {
    EnrollmentLevelEnumFromJSON,
    EnrollmentLevelEnumFromJSONTyped,
    EnrollmentLevelEnumToJSON,
} from './EnrollmentLevelEnum';

/**
 * 
 * @export
 * @interface FedNowEligibility
 */
export interface FedNowEligibility {
    /**
     * 
     * @type {boolean}
     * @memberof FedNowEligibility
     */
    online?: boolean;
    /**
     * 
     * @type {EnrollmentLevelEnum}
     * @memberof FedNowEligibility
     */
    enrollmentLevel: EnrollmentLevelEnum;
    /**
     * 
     * @type {string}
     * @memberof FedNowEligibility
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FedNowEligibility
     */
    routingNumber: string;
}

/**
 * Check if a given object implements the FedNowEligibility interface.
 */
export function instanceOfFedNowEligibility(value: object): value is FedNowEligibility {
    if (!('enrollmentLevel' in value) || value['enrollmentLevel'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    return true;
}

export function FedNowEligibilityFromJSON(json: any): FedNowEligibility {
    return FedNowEligibilityFromJSONTyped(json, false);
}

export function FedNowEligibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FedNowEligibility {
    if (json == null) {
        return json;
    }
    return {
        
        'online': json['online'] == null ? undefined : json['online'],
        'enrollmentLevel': EnrollmentLevelEnumFromJSON(json['enrollment_level']),
        'name': json['name'] == null ? undefined : json['name'],
        'routingNumber': json['routing_number'],
    };
}

export function FedNowEligibilityToJSON(value?: FedNowEligibility | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'online': value['online'],
        'enrollment_level': EnrollmentLevelEnumToJSON(value['enrollmentLevel']),
        'name': value['name'],
        'routing_number': value['routingNumber'],
    };
}

