/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.174)
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
export const Type5d6Enum = {
    Personal: 'personal',
    Business: 'business'
} as const;
export type Type5d6Enum = typeof Type5d6Enum[keyof typeof Type5d6Enum];


export function instanceOfType5d6Enum(value: any): boolean {
    for (const key in Type5d6Enum) {
        if (Object.prototype.hasOwnProperty.call(Type5d6Enum, key)) {
            if ((Type5d6Enum as Record<string, Type5d6Enum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function Type5d6EnumFromJSON(json: any): Type5d6Enum {
    return Type5d6EnumFromJSONTyped(json, false);
}

export function Type5d6EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): Type5d6Enum {
    return json as Type5d6Enum;
}

export function Type5d6EnumToJSON(value?: Type5d6Enum | null): any {
    return value as any;
}

