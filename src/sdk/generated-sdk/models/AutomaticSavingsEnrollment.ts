/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.51)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Account } from './Account';
import {
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
} from './Account';

/**
 * 
 * @export
 * @interface AutomaticSavingsEnrollment
 */
export interface AutomaticSavingsEnrollment {
    /**
     * 
     * @type {Account}
     * @memberof AutomaticSavingsEnrollment
     */
    sourceAccount?: Account;
    /**
     * 
     * @type {Account}
     * @memberof AutomaticSavingsEnrollment
     */
    destinationAccount?: Account;
    /**
     * 
     * @type {boolean}
     * @memberof AutomaticSavingsEnrollment
     */
    automaticSavingsEligible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AutomaticSavingsEnrollment
     */
    automaticSavingsActive?: boolean;
}

/**
 * Check if a given object implements the AutomaticSavingsEnrollment interface.
 */
export function instanceOfAutomaticSavingsEnrollment(value: object): value is AutomaticSavingsEnrollment {
    return true;
}

export function AutomaticSavingsEnrollmentFromJSON(json: any): AutomaticSavingsEnrollment {
    return AutomaticSavingsEnrollmentFromJSONTyped(json, false);
}

export function AutomaticSavingsEnrollmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutomaticSavingsEnrollment {
    if (json == null) {
        return json;
    }
    return {
        
        'sourceAccount': json['source_account'] == null ? undefined : AccountFromJSON(json['source_account']),
        'destinationAccount': json['destination_account'] == null ? undefined : AccountFromJSON(json['destination_account']),
        'automaticSavingsEligible': json['automatic_savings_eligible'] == null ? undefined : json['automatic_savings_eligible'],
        'automaticSavingsActive': json['automatic_savings_active'] == null ? undefined : json['automatic_savings_active'],
    };
}

export function AutomaticSavingsEnrollmentToJSON(value?: AutomaticSavingsEnrollment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'source_account': AccountToJSON(value['sourceAccount']),
        'destination_account': AccountToJSON(value['destinationAccount']),
        'automatic_savings_eligible': value['automaticSavingsEligible'],
        'automatic_savings_active': value['automaticSavingsActive'],
    };
}

