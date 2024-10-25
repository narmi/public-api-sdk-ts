/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.293)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `expired` - expired
 * * `active` - active
 * @export
 */
export const ScheduledTransferStateEnum = {
    Expired: 'expired',
    Active: 'active'
} as const;
export type ScheduledTransferStateEnum = typeof ScheduledTransferStateEnum[keyof typeof ScheduledTransferStateEnum];


export function instanceOfScheduledTransferStateEnum(value: any): boolean {
    for (const key in ScheduledTransferStateEnum) {
        if (Object.prototype.hasOwnProperty.call(ScheduledTransferStateEnum, key)) {
            if ((ScheduledTransferStateEnum as Record<string, ScheduledTransferStateEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ScheduledTransferStateEnumFromJSON(json: any): ScheduledTransferStateEnum {
    return ScheduledTransferStateEnumFromJSONTyped(json, false);
}

export function ScheduledTransferStateEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransferStateEnum {
    return json as ScheduledTransferStateEnum;
}

export function ScheduledTransferStateEnumToJSON(value?: ScheduledTransferStateEnum | null): any {
    return value as any;
}

