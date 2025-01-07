/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.112)
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
 * @interface MessageCreateRequest
 */
export interface MessageCreateRequest {
    /**
     * Text content of the message; should not be specified with the `url` parameter.
     * @type {string}
     * @memberof MessageCreateRequest
     */
    body?: string;
    /**
     * Link to the file url for a thread file/attachment, should not be specified with the `body` parameter.
     * @type {string}
     * @memberof MessageCreateRequest
     */
    url?: string;
    /**
     * Text which should only be visible to FI staff members.
     * @type {boolean}
     * @memberof MessageCreateRequest
     */
    internalNote?: boolean;
}

/**
 * Check if a given object implements the MessageCreateRequest interface.
 */
export function instanceOfMessageCreateRequest(value: object): value is MessageCreateRequest {
    return true;
}

export function MessageCreateRequestFromJSON(json: any): MessageCreateRequest {
    return MessageCreateRequestFromJSONTyped(json, false);
}

export function MessageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'body': json['body'] == null ? undefined : json['body'],
        'url': json['url'] == null ? undefined : json['url'],
        'internalNote': json['internal_note'] == null ? undefined : json['internal_note'],
    };
}

export function MessageCreateRequestToJSON(value?: MessageCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'body': value['body'],
        'url': value['url'],
        'internal_note': value['internalNote'],
    };
}

