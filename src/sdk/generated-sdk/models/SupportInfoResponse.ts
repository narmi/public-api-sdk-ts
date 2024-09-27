/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { SupportInfo } from './SupportInfo';
import {
    SupportInfoFromJSON,
    SupportInfoFromJSONTyped,
    SupportInfoToJSON,
} from './SupportInfo';

/**
 * 
 * @export
 * @interface SupportInfoResponse
 */
export interface SupportInfoResponse {
    /**
     * 
     * @type {SupportInfo}
     * @memberof SupportInfoResponse
     */
    supportSettings: SupportInfo;
}

/**
 * Check if a given object implements the SupportInfoResponse interface.
 */
export function instanceOfSupportInfoResponse(value: object): value is SupportInfoResponse {
    if (!('supportSettings' in value) || value['supportSettings'] === undefined) return false;
    return true;
}

export function SupportInfoResponseFromJSON(json: any): SupportInfoResponse {
    return SupportInfoResponseFromJSONTyped(json, false);
}

export function SupportInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupportInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'supportSettings': SupportInfoFromJSON(json['support_settings']),
    };
}

export function SupportInfoResponseToJSON(value?: SupportInfoResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'support_settings': SupportInfoToJSON(value['supportSettings']),
    };
}
