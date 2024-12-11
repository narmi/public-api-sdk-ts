/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.285)
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
export const NullEnum = {
    Null: 'null'
} as const;
export type NullEnum = typeof NullEnum[keyof typeof NullEnum];


export function instanceOfNullEnum(value: any): boolean {
    for (const key in NullEnum) {
        if (Object.prototype.hasOwnProperty.call(NullEnum, key)) {
            if ((NullEnum as Record<string, NullEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function NullEnumFromJSON(json: any): NullEnum {
    return NullEnumFromJSONTyped(json, false);
}

export function NullEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NullEnum {
    return json as NullEnum;
}

export function NullEnumToJSON(value?: NullEnum | null): any {
    return value as any;
}

