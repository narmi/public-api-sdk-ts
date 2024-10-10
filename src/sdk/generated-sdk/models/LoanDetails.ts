/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.225)
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
 * @interface LoanDetails
 */
export interface LoanDetails {
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof LoanDetails
     */
    readonly minimumPayment?: number;
    /**
     * 
     * @type {number}
     * @memberof LoanDetails
     */
    readonly interestRate?: number;
    /**
     * 
     * @type {Date}
     * @memberof LoanDetails
     */
    readonly nextPaymentAt?: Date;
}

/**
 * Check if a given object implements the LoanDetails interface.
 */
export function instanceOfLoanDetails(value: object): value is LoanDetails {
    return true;
}

export function LoanDetailsFromJSON(json: any): LoanDetails {
    return LoanDetailsFromJSONTyped(json, false);
}

export function LoanDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoanDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'minimumPayment': json['minimum_payment'] == null ? undefined : json['minimum_payment'],
        'interestRate': json['interest_rate'] == null ? undefined : json['interest_rate'],
        'nextPaymentAt': json['next_payment_at'] == null ? undefined : (new Date(json['next_payment_at'])),
    };
}

export function LoanDetailsToJSON(value?: Omit<LoanDetails, 'minimum_payment'|'interest_rate'|'next_payment_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}
