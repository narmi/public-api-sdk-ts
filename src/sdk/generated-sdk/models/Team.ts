/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.158)
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
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    readonly uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    readonly name?: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    readonly description?: string;
}

/**
 * Check if a given object implements the Team interface.
 */
export function instanceOfTeam(value: object): value is Team {
    return true;
}

export function TeamFromJSON(json: any): Team {
    return TeamFromJSONTyped(json, false);
}

export function TeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Team {
    if (json == null) {
        return json;
    }
    return {
        
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function TeamToJSON(value?: Omit<Team, 'uuid'|'name'|'description'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

