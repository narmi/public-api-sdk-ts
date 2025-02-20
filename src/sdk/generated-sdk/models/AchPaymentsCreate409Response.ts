/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.135)
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
 * @interface AchPaymentsCreate409Response
 */
export interface AchPaymentsCreate409Response {
    /**
     * 
     * @type {string}
     * @memberof AchPaymentsCreate409Response
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AchPaymentsCreate409Response
     */
    message?: string;
}

/**
 * Check if a given object implements the AchPaymentsCreate409Response interface.
 */
export function instanceOfAchPaymentsCreate409Response(value: object): value is AchPaymentsCreate409Response {
    return true;
}

export function AchPaymentsCreate409ResponseFromJSON(json: any): AchPaymentsCreate409Response {
    return AchPaymentsCreate409ResponseFromJSONTyped(json, false);
}

export function AchPaymentsCreate409ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AchPaymentsCreate409Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function AchPaymentsCreate409ResponseToJSON(value?: AchPaymentsCreate409Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

