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
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';

/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * The text body of a message or the url of a threadfile/attachment.
     * @type {string}
     * @memberof Message
     */
    readonly body?: string;
    /**
     * Link to the file url for a thread file/attachment, should not be specified with the `body` parameter.
     * @type {string}
     * @memberof Message
     */
    url?: string;
    /**
     * Text which should only be visible to FI staff members.
     * @type {boolean}
     * @memberof Message
     */
    internalNote?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    readonly id?: string;
    /**
     * The UUID of the thread to which the message belongs.
     * @type {string}
     * @memberof Message
     */
    readonly threadId?: string;
    /**
     * User information about the author of the message.
     * @type {Profile}
     * @memberof Message
     */
    readonly author?: Profile;
    /**
     * 
     * @type {Date}
     * @memberof Message
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Message
     */
    readonly updatedAt?: Date;
}

/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): value is Message {
    return true;
}

export function MessageFromJSON(json: any): Message {
    return MessageFromJSONTyped(json, false);
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
    if (json == null) {
        return json;
    }
    return {
        
        'body': json['body'] == null ? undefined : json['body'],
        'url': json['url'] == null ? undefined : json['url'],
        'internalNote': json['internal_note'] == null ? undefined : json['internal_note'],
        'id': json['id'] == null ? undefined : json['id'],
        'threadId': json['thread_id'] == null ? undefined : json['thread_id'],
        'author': json['author'] == null ? undefined : ProfileFromJSON(json['author']),
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function MessageToJSON(value?: Omit<Message, 'body'|'id'|'thread_id'|'author'|'created_at'|'updated_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'internal_note': value['internalNote'],
    };
}
