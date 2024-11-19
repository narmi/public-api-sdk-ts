/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.153)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { InstitutionNameField } from './InstitutionNameField';
import {
    InstitutionNameFieldFromJSON,
    InstitutionNameFieldFromJSONTyped,
    InstitutionNameFieldToJSON,
} from './InstitutionNameField';

/**
 * 
 * @export
 * @interface InstitutionNameResponse
 */
export interface InstitutionNameResponse {
    /**
     * 
     * @type {InstitutionNameField}
     * @memberof InstitutionNameResponse
     */
    institution: InstitutionNameField;
}

/**
 * Check if a given object implements the InstitutionNameResponse interface.
 */
export function instanceOfInstitutionNameResponse(value: object): value is InstitutionNameResponse {
    if (!('institution' in value) || value['institution'] === undefined) return false;
    return true;
}

export function InstitutionNameResponseFromJSON(json: any): InstitutionNameResponse {
    return InstitutionNameResponseFromJSONTyped(json, false);
}

export function InstitutionNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstitutionNameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'institution': InstitutionNameFieldFromJSON(json['institution']),
    };
}

export function InstitutionNameResponseToJSON(value?: InstitutionNameResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'institution': InstitutionNameFieldToJSON(value['institution']),
    };
}

