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
    readonly body: string;
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
    readonly id: string;
    /**
     * The UUID of the thread to which the message belongs.
     * @type {string}
     * @memberof Message
     */
    readonly threadId: string;
    /**
     * User information about the author of the message.
     * @type {Profile}
     * @memberof Message
     */
    readonly author: Profile;
    /**
     * 
     * @type {Date}
     * @memberof Message
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Message
     */
    readonly updatedAt: Date;
}

/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): value is Message {
    if (!('body' in value) || value['body'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('threadId' in value) || value['threadId'] === undefined) return false;
    if (!('author' in value) || value['author'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
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
        
        'body': json['body'],
        'url': json['url'] == null ? undefined : json['url'],
        'internalNote': json['internal_note'] == null ? undefined : json['internal_note'],
        'id': json['id'],
        'threadId': json['thread_id'],
        'author': ProfileFromJSON(json['author']),
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
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

