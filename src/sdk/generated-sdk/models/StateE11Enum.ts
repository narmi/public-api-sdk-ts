/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.188)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const StateE11Enum = {
    Active: 'active',
    Inactive: 'inactive',
    Pending: 'pending',
    Verified: 'verified',
    Removed: 'removed'
} as const;
export type StateE11Enum = typeof StateE11Enum[keyof typeof StateE11Enum];


export function instanceOfStateE11Enum(value: any): boolean {
    for (const key in StateE11Enum) {
        if (Object.prototype.hasOwnProperty.call(StateE11Enum, key)) {
            if ((StateE11Enum as Record<string, StateE11Enum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function StateE11EnumFromJSON(json: any): StateE11Enum {
    return StateE11EnumFromJSONTyped(json, false);
}

export function StateE11EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateE11Enum {
    return json as StateE11Enum;
}

export function StateE11EnumToJSON(value?: StateE11Enum | null): any {
    return value as any;
}

