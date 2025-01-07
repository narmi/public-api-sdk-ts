/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.15)
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
 * @interface ThreadUploadPolicyResponse
 */
export interface ThreadUploadPolicyResponse {
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    policy: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    successActionStatus: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    formAction: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    acl: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    xAmzCredential: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    xAmzDate: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    xAmzSignature: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    xAmzAlgorithm: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadUploadPolicyResponse
     */
    contentType: string;
}

/**
 * Check if a given object implements the ThreadUploadPolicyResponse interface.
 */
export function instanceOfThreadUploadPolicyResponse(value: object): value is ThreadUploadPolicyResponse {
    if (!('policy' in value) || value['policy'] === undefined) return false;
    if (!('successActionStatus' in value) || value['successActionStatus'] === undefined) return false;
    if (!('formAction' in value) || value['formAction'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('acl' in value) || value['acl'] === undefined) return false;
    if (!('xAmzCredential' in value) || value['xAmzCredential'] === undefined) return false;
    if (!('xAmzDate' in value) || value['xAmzDate'] === undefined) return false;
    if (!('xAmzSignature' in value) || value['xAmzSignature'] === undefined) return false;
    if (!('xAmzAlgorithm' in value) || value['xAmzAlgorithm'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    return true;
}

export function ThreadUploadPolicyResponseFromJSON(json: any): ThreadUploadPolicyResponse {
    return ThreadUploadPolicyResponseFromJSONTyped(json, false);
}

export function ThreadUploadPolicyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadUploadPolicyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'policy': json['policy'],
        'successActionStatus': json['success_action_status'],
        'formAction': json['form_action'],
        'key': json['key'],
        'acl': json['acl'],
        'xAmzCredential': json['x-amz-credential'],
        'xAmzDate': json['x-amz-date'],
        'xAmzSignature': json['x-amz-signature'],
        'xAmzAlgorithm': json['x-amz-algorithm'],
        'contentType': json['content-type'],
    };
}

export function ThreadUploadPolicyResponseToJSON(value?: ThreadUploadPolicyResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'policy': value['policy'],
        'success_action_status': value['successActionStatus'],
        'form_action': value['formAction'],
        'key': value['key'],
        'acl': value['acl'],
        'x-amz-credential': value['xAmzCredential'],
        'x-amz-date': value['xAmzDate'],
        'x-amz-signature': value['xAmzSignature'],
        'x-amz-algorithm': value['xAmzAlgorithm'],
        'content-type': value['contentType'],
    };
}

