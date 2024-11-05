/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.200)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `damaged` - damaged
 * * `lost` - lost
 * * `stolen` - stolen
 * @export
 */
export const ReasonEnum = {
    Damaged: 'damaged',
    Lost: 'lost',
    Stolen: 'stolen'
} as const;
export type ReasonEnum = typeof ReasonEnum[keyof typeof ReasonEnum];


export function instanceOfReasonEnum(value: any): boolean {
    for (const key in ReasonEnum) {
        if (Object.prototype.hasOwnProperty.call(ReasonEnum, key)) {
            if ((ReasonEnum as Record<string, ReasonEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ReasonEnumFromJSON(json: any): ReasonEnum {
    return ReasonEnumFromJSONTyped(json, false);
}

export function ReasonEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReasonEnum {
    return json as ReasonEnum;
}

export function ReasonEnumToJSON(value?: ReasonEnum | null): any {
    return value as any;
}

