/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.133)
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
 * @interface BusinessPermissionsField
 */
export interface BusinessPermissionsField {
    /**
     * 
     * @type {string}
     * @memberof BusinessPermissionsField
     */
    modelStr: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessPermissionsField
     */
    operation: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessPermissionsField
     */
    uuid: string;
}

/**
 * Check if a given object implements the BusinessPermissionsField interface.
 */
export function instanceOfBusinessPermissionsField(value: object): value is BusinessPermissionsField {
    if (!('modelStr' in value) || value['modelStr'] === undefined) return false;
    if (!('operation' in value) || value['operation'] === undefined) return false;
    if (!('uuid' in value) || value['uuid'] === undefined) return false;
    return true;
}

export function BusinessPermissionsFieldFromJSON(json: any): BusinessPermissionsField {
    return BusinessPermissionsFieldFromJSONTyped(json, false);
}

export function BusinessPermissionsFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessPermissionsField {
    if (json == null) {
        return json;
    }
    return {
        
        'modelStr': json['model_str'],
        'operation': json['operation'],
        'uuid': json['uuid'],
    };
}

export function BusinessPermissionsFieldToJSON(value?: BusinessPermissionsField | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'model_str': value['modelStr'],
        'operation': value['operation'],
        'uuid': value['uuid'],
    };
}

