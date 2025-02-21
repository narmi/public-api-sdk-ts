/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.150)
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
 * @interface PatchedSubscriptionRequest
 */
export interface PatchedSubscriptionRequest {
    /**
     * The URL called when the webhook event occurs.
     * @type {string}
     * @memberof PatchedSubscriptionRequest
     */
    url: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedSubscriptionRequest
     */
    isActive?: boolean;
    /**
     * Version string for future versioning functionality, can be left blank
     * @type {string}
     * @memberof PatchedSubscriptionRequest
     */
    version?: string;
    /**
     * The target event type, event types are typically lowercase model name, followed by event type, ie. `message.create`, `user.login`
     * @type {string}
     * @memberof PatchedSubscriptionRequest
     */
    eventType?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedSubscriptionRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the PatchedSubscriptionRequest interface.
 */
export function instanceOfPatchedSubscriptionRequest(value: object): value is PatchedSubscriptionRequest {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function PatchedSubscriptionRequestFromJSON(json: any): PatchedSubscriptionRequest {
    return PatchedSubscriptionRequestFromJSONTyped(json, false);
}

export function PatchedSubscriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedSubscriptionRequest {
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

export function PatchedSubscriptionRequestToJSON(value?: PatchedSubscriptionRequest | null): any {
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

