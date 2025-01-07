/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.361)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Serializer for two-factor authorization devices.
 * @export
 * @interface Device
 */
export interface Device {
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    readonly numberType?: string;
    /**
     * 
     * @type {string}
     * @memberof Device
     */
    readonly name?: string;
}

/**
 * Check if a given object implements the Device interface.
 */
export function instanceOfDevice(value: object): value is Device {
    return true;
}

export function DeviceFromJSON(json: any): Device {
    return DeviceFromJSONTyped(json, false);
}

export function DeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Device {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'numberType': json['number_type'] == null ? undefined : json['number_type'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function DeviceToJSON(value?: Omit<Device, 'id'|'number_type'|'name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

