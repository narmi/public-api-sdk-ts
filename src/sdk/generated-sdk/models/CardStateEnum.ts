/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.229)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `active` - active
 * * `inactive` - inactive
 * @export
 */
export const CardStateEnum = {
    Active: 'active',
    Inactive: 'inactive'
} as const;
export type CardStateEnum = typeof CardStateEnum[keyof typeof CardStateEnum];


export function instanceOfCardStateEnum(value: any): boolean {
    for (const key in CardStateEnum) {
        if (Object.prototype.hasOwnProperty.call(CardStateEnum, key)) {
            if ((CardStateEnum as Record<string, CardStateEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CardStateEnumFromJSON(json: any): CardStateEnum {
    return CardStateEnumFromJSONTyped(json, false);
}

export function CardStateEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardStateEnum {
    return json as CardStateEnum;
}

export function CardStateEnumToJSON(value?: CardStateEnum | null): any {
    return value as any;
}

