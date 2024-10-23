/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.115)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AutomaticSavingsEnrollmentRetrieve422ResponseMessage } from './AutomaticSavingsEnrollmentRetrieve422ResponseMessage';
import {
    AutomaticSavingsEnrollmentRetrieve422ResponseMessageFromJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseMessageFromJSONTyped,
    AutomaticSavingsEnrollmentRetrieve422ResponseMessageToJSON,
} from './AutomaticSavingsEnrollmentRetrieve422ResponseMessage';

/**
 * 
 * @export
 * @interface AutomaticSavingsEnrollmentRetrieve422Response
 */
export interface AutomaticSavingsEnrollmentRetrieve422Response {
    /**
     * 
     * @type {string}
     * @memberof AutomaticSavingsEnrollmentRetrieve422Response
     */
    id: string;
    /**
     * 
     * @type {AutomaticSavingsEnrollmentRetrieve422ResponseMessage}
     * @memberof AutomaticSavingsEnrollmentRetrieve422Response
     */
    message: AutomaticSavingsEnrollmentRetrieve422ResponseMessage;
}

/**
 * Check if a given object implements the AutomaticSavingsEnrollmentRetrieve422Response interface.
 */
export function instanceOfAutomaticSavingsEnrollmentRetrieve422Response(value: object): value is AutomaticSavingsEnrollmentRetrieve422Response {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function AutomaticSavingsEnrollmentRetrieve422ResponseFromJSON(json: any): AutomaticSavingsEnrollmentRetrieve422Response {
    return AutomaticSavingsEnrollmentRetrieve422ResponseFromJSONTyped(json, false);
}

export function AutomaticSavingsEnrollmentRetrieve422ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutomaticSavingsEnrollmentRetrieve422Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'message': AutomaticSavingsEnrollmentRetrieve422ResponseMessageFromJSON(json['message']),
    };
}

export function AutomaticSavingsEnrollmentRetrieve422ResponseToJSON(value?: AutomaticSavingsEnrollmentRetrieve422Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': AutomaticSavingsEnrollmentRetrieve422ResponseMessageToJSON(value['message']),
    };
}

