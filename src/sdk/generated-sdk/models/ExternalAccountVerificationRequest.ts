/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.175)
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
 * @interface ExternalAccountVerificationRequest
 */
export interface ExternalAccountVerificationRequest {
    /**
     * A list of length 2 which indicates the deposits made to the external account. These amounts can be specified in either order.
     * @type {Array<number>}
     * @memberof ExternalAccountVerificationRequest
     */
    amounts?: Array<number>;
}

/**
 * Check if a given object implements the ExternalAccountVerificationRequest interface.
 */
export function instanceOfExternalAccountVerificationRequest(value: object): value is ExternalAccountVerificationRequest {
    return true;
}

export function ExternalAccountVerificationRequestFromJSON(json: any): ExternalAccountVerificationRequest {
    return ExternalAccountVerificationRequestFromJSONTyped(json, false);
}

export function ExternalAccountVerificationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalAccountVerificationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amounts': json['amounts'] == null ? undefined : json['amounts'],
    };
}

export function ExternalAccountVerificationRequestToJSON(value?: ExternalAccountVerificationRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amounts': value['amounts'],
    };
}

