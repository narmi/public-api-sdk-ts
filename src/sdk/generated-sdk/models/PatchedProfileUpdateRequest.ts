/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.75)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Write-serializer for updating paper statements.
 * @export
 * @interface PatchedProfileUpdateRequest
 */
export interface PatchedProfileUpdateRequest {
    /**
     * Whether a user should receive paper statements or eStatements. If the core does not support eStatements or paper statements, or the feature `CoreUpdateEstatementSetting` is not set to true, setting this may fail with a permission denied error.
     * @type {boolean}
     * @memberof PatchedProfileUpdateRequest
     */
    paperStatements?: boolean;
}

/**
 * Check if a given object implements the PatchedProfileUpdateRequest interface.
 */
export function instanceOfPatchedProfileUpdateRequest(value: object): value is PatchedProfileUpdateRequest {
    return true;
}

export function PatchedProfileUpdateRequestFromJSON(json: any): PatchedProfileUpdateRequest {
    return PatchedProfileUpdateRequestFromJSONTyped(json, false);
}

export function PatchedProfileUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedProfileUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'paperStatements': json['paper_statements'] == null ? undefined : json['paper_statements'],
    };
}

export function PatchedProfileUpdateRequestToJSON(value?: PatchedProfileUpdateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'paper_statements': value['paperStatements'],
    };
}

