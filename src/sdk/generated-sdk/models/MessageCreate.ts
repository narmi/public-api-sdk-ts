/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.65)
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
 * @interface MessageCreate
 */
export interface MessageCreate {
    /**
     * Text content of the message; should not be specified with the `url` parameter.
     * @type {string}
     * @memberof MessageCreate
     */
    body?: string;
    /**
     * Link to the file url for a thread file/attachment, should not be specified with the `body` parameter.
     * @type {string}
     * @memberof MessageCreate
     */
    url?: string;
    /**
     * Text which should only be visible to FI staff members.
     * @type {boolean}
     * @memberof MessageCreate
     */
    internalNote?: boolean;
}

/**
 * Check if a given object implements the MessageCreate interface.
 */
export function instanceOfMessageCreate(value: object): value is MessageCreate {
    return true;
}

export function MessageCreateFromJSON(json: any): MessageCreate {
    return MessageCreateFromJSONTyped(json, false);
}

export function MessageCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'body': json['body'] == null ? undefined : json['body'],
        'url': json['url'] == null ? undefined : json['url'],
        'internalNote': json['internal_note'] == null ? undefined : json['internal_note'],
    };
}

export function MessageCreateToJSON(value?: MessageCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'body': value['body'],
        'url': value['url'],
        'internal_note': value['internalNote'],
    };
}

