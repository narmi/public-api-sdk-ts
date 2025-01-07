/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.356)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Device } from './Device';
import {
    DeviceFromJSON,
    DeviceFromJSONTyped,
    DeviceToJSON,
} from './Device';
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';

/**
 * 
 * @export
 * @interface Enrollment
 */
export interface Enrollment {
    /**
     * 
     * @type {Profile}
     * @memberof Enrollment
     */
    readonly user?: Profile;
    /**
     * 
     * @type {Array<Device>}
     * @memberof Enrollment
     */
    readonly devices?: Array<Device>;
}

/**
 * Check if a given object implements the Enrollment interface.
 */
export function instanceOfEnrollment(value: object): value is Enrollment {
    return true;
}

export function EnrollmentFromJSON(json: any): Enrollment {
    return EnrollmentFromJSONTyped(json, false);
}

export function EnrollmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Enrollment {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'] == null ? undefined : ProfileFromJSON(json['user']),
        'devices': json['devices'] == null ? undefined : ((json['devices'] as Array<any>).map(DeviceFromJSON)),
    };
}

export function EnrollmentToJSON(value?: Omit<Enrollment, 'user'|'devices'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

