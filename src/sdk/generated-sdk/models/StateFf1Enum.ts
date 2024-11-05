/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.205)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `closed` - closed
 * * `open` - open
 * @export
 */
export const StateFf1Enum = {
    Closed: 'closed',
    Open: 'open'
} as const;
export type StateFf1Enum = typeof StateFf1Enum[keyof typeof StateFf1Enum];


export function instanceOfStateFf1Enum(value: any): boolean {
    for (const key in StateFf1Enum) {
        if (Object.prototype.hasOwnProperty.call(StateFf1Enum, key)) {
            if ((StateFf1Enum as Record<string, StateFf1Enum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function StateFf1EnumFromJSON(json: any): StateFf1Enum {
    return StateFf1EnumFromJSONTyped(json, false);
}

export function StateFf1EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateFf1Enum {
    return json as StateFf1Enum;
}

export function StateFf1EnumToJSON(value?: StateFf1Enum | null): any {
    return value as any;
}

