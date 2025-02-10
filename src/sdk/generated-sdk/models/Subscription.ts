/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.238)
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
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    readonly id?: string;
    /**
     * The URL called when the webhook event occurs.
     * @type {string}
     * @memberof Subscription
     */
    url: string;
    /**
     * 
     * @type {boolean}
     * @memberof Subscription
     */
    isActive?: boolean;
    /**
     * Version string for future versioning functionality, can be left blank
     * @type {string}
     * @memberof Subscription
     */
    version?: string;
    /**
     * The target event type, event types are typically lowercase model name, followed by event type, ie. `message.create`, `user.login`
     * @type {string}
     * @memberof Subscription
     */
    eventType?: string;
    /**
     * Key used to validate signatures sent during webhook calls
     * @type {string}
     * @memberof Subscription
     */
    readonly secret?: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof Subscription
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Subscription
     */
    readonly updatedAt?: Date;
}

/**
 * Check if a given object implements the Subscription interface.
 */
export function instanceOfSubscription(value: object): value is Subscription {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function SubscriptionFromJSON(json: any): Subscription {
    return SubscriptionFromJSONTyped(json, false);
}

export function SubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscription {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'url': json['url'],
        'isActive': json['is_active'] == null ? undefined : json['is_active'],
        'version': json['version'] == null ? undefined : json['version'],
        'eventType': json['event_type'] == null ? undefined : json['event_type'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'description': json['description'] == null ? undefined : json['description'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function SubscriptionToJSON(value?: Omit<Subscription, 'id'|'secret'|'created_at'|'updated_at'> | null): any {
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

