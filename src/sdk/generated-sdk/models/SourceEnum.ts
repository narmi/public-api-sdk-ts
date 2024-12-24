/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.337)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `institution` - institution
 * * `external` - external
 * @export
 */
export const SourceEnum = {
    Institution: 'institution',
    External: 'external'
} as const;
export type SourceEnum = typeof SourceEnum[keyof typeof SourceEnum];


export function instanceOfSourceEnum(value: any): boolean {
    for (const key in SourceEnum) {
        if (Object.prototype.hasOwnProperty.call(SourceEnum, key)) {
            if ((SourceEnum as Record<string, SourceEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SourceEnumFromJSON(json: any): SourceEnum {
    return SourceEnumFromJSONTyped(json, false);
}

export function SourceEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceEnum {
    return json as SourceEnum;
}

export function SourceEnumToJSON(value?: SourceEnum | null): any {
    return value as any;
}

