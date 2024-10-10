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
import type { StateFf1Enum } from './StateFf1Enum';
import {
    StateFf1EnumFromJSON,
    StateFf1EnumFromJSONTyped,
    StateFf1EnumToJSON,
} from './StateFf1Enum';

/**
 * 
 * @export
 * @interface Thread
 */
export interface Thread {
    /**
     * 
     * @type {string}
     * @memberof Thread
     */
    readonly id?: string;
    /**
     * Subject of the thread.
     * @type {string}
     * @memberof Thread
     */
    readonly subject?: string;
    /**
     * Indicates whether the thread has been closed or remains open.
     * 
     * * `closed` - closed
     * * `open` - open
     * @type {StateFf1Enum}
     * @memberof Thread
     */
    readonly state?: StateFf1Enum;
    /**
     * Text content of the initial message for this thread.
     * @type {string}
     * @memberof Thread
     */
    readonly messagePreview?: string;
    /**
     * 
     * @type {Date}
     * @memberof Thread
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Thread
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Thread
     */
    readonly isRead?: boolean;
}

/**
 * Check if a given object implements the Thread interface.
 */
export function instanceOfThread(value: object): value is Thread {
    return true;
}

export function ThreadFromJSON(json: any): Thread {
    return ThreadFromJSONTyped(json, false);
}

export function ThreadFromJSONTyped(json: any, ignoreDiscriminator: boolean): Thread {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'subject': json['subject'] == null ? undefined : json['subject'],
        'state': json['state'] == null ? undefined : StateFf1EnumFromJSON(json['state']),
        'messagePreview': json['message_preview'] == null ? undefined : json['message_preview'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'isRead': json['is_read'] == null ? undefined : json['is_read'],
    };
}

export function ThreadToJSON(value?: Omit<Thread, 'id'|'subject'|'state'|'message_preview'|'created_at'|'updated_at'|'is_read'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}
