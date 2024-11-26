/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.310)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AccountStop } from './AccountStop';
import {
    AccountStopFromJSON,
    AccountStopFromJSONTyped,
    AccountStopToJSON,
} from './AccountStop';

/**
 * 
 * @export
 * @interface AccountStopResponse
 */
export interface AccountStopResponse {
    /**
     * 
     * @type {AccountStop}
     * @memberof AccountStopResponse
     */
    stop: AccountStop;
}

/**
 * Check if a given object implements the AccountStopResponse interface.
 */
export function instanceOfAccountStopResponse(value: object): value is AccountStopResponse {
    if (!('stop' in value) || value['stop'] === undefined) return false;
    return true;
}

export function AccountStopResponseFromJSON(json: any): AccountStopResponse {
    return AccountStopResponseFromJSONTyped(json, false);
}

export function AccountStopResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStopResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'stop': AccountStopFromJSON(json['stop']),
    };
}

export function AccountStopResponseToJSON(value?: AccountStopResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'stop': AccountStopToJSON(value['stop']),
    };
}

