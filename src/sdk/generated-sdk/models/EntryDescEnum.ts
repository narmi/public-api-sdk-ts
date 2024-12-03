/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.12)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `EXT-TRAN` - External Transfer
 * @export
 */
export const EntryDescEnum = {
    ExtTran: 'EXT-TRAN'
} as const;
export type EntryDescEnum = typeof EntryDescEnum[keyof typeof EntryDescEnum];


export function instanceOfEntryDescEnum(value: any): boolean {
    for (const key in EntryDescEnum) {
        if (Object.prototype.hasOwnProperty.call(EntryDescEnum, key)) {
            if ((EntryDescEnum as Record<string, EntryDescEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function EntryDescEnumFromJSON(json: any): EntryDescEnum {
    return EntryDescEnumFromJSONTyped(json, false);
}

export function EntryDescEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntryDescEnum {
    return json as EntryDescEnum;
}

export function EntryDescEnumToJSON(value?: EntryDescEnum | null): any {
    return value as any;
}

