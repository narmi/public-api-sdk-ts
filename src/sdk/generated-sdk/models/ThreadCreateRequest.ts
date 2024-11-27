/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.228)
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
 * @interface ThreadCreateRequest
 */
export interface ThreadCreateRequest {
    /**
     * Subject of the thread.
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    subject: string;
    /**
     * Text content of the initial message for this thread.
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    body?: string;
    /**
     * Link to the file uploaded to this thread, if applicable.
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    url?: string;
    /**
     * Identifier for relevant team.
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    teamUuid?: string;
}

/**
 * Check if a given object implements the ThreadCreateRequest interface.
 */
export function instanceOfThreadCreateRequest(value: object): value is ThreadCreateRequest {
    if (!('subject' in value) || value['subject'] === undefined) return false;
    return true;
}

export function ThreadCreateRequestFromJSON(json: any): ThreadCreateRequest {
    return ThreadCreateRequestFromJSONTyped(json, false);
}

export function ThreadCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'subject': json['subject'],
        'body': json['body'] == null ? undefined : json['body'],
        'url': json['url'] == null ? undefined : json['url'],
        'teamUuid': json['team_uuid'] == null ? undefined : json['team_uuid'],
    };
}

export function ThreadCreateRequestToJSON(value?: ThreadCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'subject': value['subject'],
        'body': value['body'],
        'url': value['url'],
        'team_uuid': value['teamUuid'],
    };
}

