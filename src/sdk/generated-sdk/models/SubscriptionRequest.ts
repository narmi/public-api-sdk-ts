/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.107)
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
 * @interface SubscriptionRequest
 */
export interface SubscriptionRequest {
    /**
     * The URL called when the webhook event occurs.
     * @type {string}
     * @memberof SubscriptionRequest
     */
    url: string;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionRequest
     */
    isActive?: boolean;
    /**
     * Version string for future versioning functionality, can be left blank
     * @type {string}
     * @memberof SubscriptionRequest
     */
    version?: string;
    /**
     * The target event type, event types are typically lowercase model name, followed by event type, ie. `message.create`, `user.login`
     * @type {string}
     * @memberof SubscriptionRequest
     */
    eventType?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the SubscriptionRequest interface.
 */
export function instanceOfSubscriptionRequest(value: object): value is SubscriptionRequest {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function SubscriptionRequestFromJSON(json: any): SubscriptionRequest {
    return SubscriptionRequestFromJSONTyped(json, false);
}

export function SubscriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
        'isActive': json['is_active'] == null ? undefined : json['is_active'],
        'version': json['version'] == null ? undefined : json['version'],
        'eventType': json['event_type'] == null ? undefined : json['event_type'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function SubscriptionRequestToJSON(value?: SubscriptionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'is_active': value['isActive'],
        'version': value['version'],
        'event_type': value['eventType'],
        'description': value['description'],
    };
}

