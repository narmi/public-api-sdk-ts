/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.156)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { InstitutionContextProcessor } from './InstitutionContextProcessor';
import {
    InstitutionContextProcessorFromJSON,
    InstitutionContextProcessorFromJSONTyped,
    InstitutionContextProcessorToJSON,
} from './InstitutionContextProcessor';

/**
 * A serializer to render the institutionContextProcessor
 * @export
 * @interface SwaggerInstitutionGet
 */
export interface SwaggerInstitutionGet {
    /**
     * 
     * @type {InstitutionContextProcessor}
     * @memberof SwaggerInstitutionGet
     */
    readonly institution?: InstitutionContextProcessor;
}

/**
 * Check if a given object implements the SwaggerInstitutionGet interface.
 */
export function instanceOfSwaggerInstitutionGet(value: object): value is SwaggerInstitutionGet {
    return true;
}

export function SwaggerInstitutionGetFromJSON(json: any): SwaggerInstitutionGet {
    return SwaggerInstitutionGetFromJSONTyped(json, false);
}

export function SwaggerInstitutionGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwaggerInstitutionGet {
    if (json == null) {
        return json;
    }
    return {
        
        'institution': json['institution'] == null ? undefined : InstitutionContextProcessorFromJSON(json['institution']),
    };
}

export function SwaggerInstitutionGetToJSON(value?: Omit<SwaggerInstitutionGet, 'institution'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

