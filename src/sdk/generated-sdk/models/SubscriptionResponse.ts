/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.166)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';

/**
 * 
 * @export
 * @interface SubscriptionResponse
 */
export interface SubscriptionResponse {
    /**
     * 
     * @type {Subscription}
     * @memberof SubscriptionResponse
     */
    subscription: Subscription;
}

/**
 * Check if a given object implements the SubscriptionResponse interface.
 */
export function instanceOfSubscriptionResponse(value: object): value is SubscriptionResponse {
    if (!('subscription' in value) || value['subscription'] === undefined) return false;
    return true;
}

export function SubscriptionResponseFromJSON(json: any): SubscriptionResponse {
    return SubscriptionResponseFromJSONTyped(json, false);
}

export function SubscriptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'subscription': SubscriptionFromJSON(json['subscription']),
    };
}

export function SubscriptionResponseToJSON(value?: SubscriptionResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'subscription': SubscriptionToJSON(value['subscription']),
    };
}

