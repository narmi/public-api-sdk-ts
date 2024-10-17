/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.251)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `personal` - Personal
 * * `business` - Business
 * @export
 */
export const AccountPurposeEnum = {
    Personal: 'personal',
    Business: 'business'
} as const;
export type AccountPurposeEnum = typeof AccountPurposeEnum[keyof typeof AccountPurposeEnum];


export function instanceOfAccountPurposeEnum(value: any): boolean {
    for (const key in AccountPurposeEnum) {
        if (Object.prototype.hasOwnProperty.call(AccountPurposeEnum, key)) {
            if ((AccountPurposeEnum as Record<string, AccountPurposeEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AccountPurposeEnumFromJSON(json: any): AccountPurposeEnum {
    return AccountPurposeEnumFromJSONTyped(json, false);
}

export function AccountPurposeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPurposeEnum {
    return json as AccountPurposeEnum;
}

export function AccountPurposeEnumToJSON(value?: AccountPurposeEnum | null): any {
    return value as any;
}

