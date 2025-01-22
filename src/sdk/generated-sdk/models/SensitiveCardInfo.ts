/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.410)
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
 * @interface SensitiveCardInfo
 */
export interface SensitiveCardInfo {
    /**
     * 
     * @type {string}
     * @memberof SensitiveCardInfo
     */
    pan: string;
    /**
     * 
     * @type {string}
     * @memberof SensitiveCardInfo
     */
    cvv: string;
    /**
     * 
     * @type {Date}
     * @memberof SensitiveCardInfo
     */
    expirationDate: Date;
}

/**
 * Check if a given object implements the SensitiveCardInfo interface.
 */
export function instanceOfSensitiveCardInfo(value: object): value is SensitiveCardInfo {
    if (!('pan' in value) || value['pan'] === undefined) return false;
    if (!('cvv' in value) || value['cvv'] === undefined) return false;
    if (!('expirationDate' in value) || value['expirationDate'] === undefined) return false;
    return true;
}

export function SensitiveCardInfoFromJSON(json: any): SensitiveCardInfo {
    return SensitiveCardInfoFromJSONTyped(json, false);
}

export function SensitiveCardInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensitiveCardInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'pan': json['pan'],
        'cvv': json['cvv'],
        'expirationDate': (new Date(json['expiration_date'])),
    };
}

export function SensitiveCardInfoToJSON(value?: SensitiveCardInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'pan': value['pan'],
        'cvv': value['cvv'],
        'expiration_date': ((value['expirationDate']).toISOString().substring(0,10)),
    };
}

