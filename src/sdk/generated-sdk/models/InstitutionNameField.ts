/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.173)
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
 * @interface InstitutionNameField
 */
export interface InstitutionNameField {
    /**
     * 
     * @type {string}
     * @memberof InstitutionNameField
     */
    name?: string;
}

/**
 * Check if a given object implements the InstitutionNameField interface.
 */
export function instanceOfInstitutionNameField(value: object): value is InstitutionNameField {
    return true;
}

export function InstitutionNameFieldFromJSON(json: any): InstitutionNameField {
    return InstitutionNameFieldFromJSONTyped(json, false);
}

export function InstitutionNameFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstitutionNameField {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function InstitutionNameFieldToJSON(value?: InstitutionNameField | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

