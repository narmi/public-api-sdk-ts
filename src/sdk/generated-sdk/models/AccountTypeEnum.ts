/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.72)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `checking` - Checking
 * * `savings` - Savings
 * * `loan` - Loan
 * @export
 */
export const AccountTypeEnum = {
    Checking: 'checking',
    Savings: 'savings',
    Loan: 'loan'
} as const;
export type AccountTypeEnum = typeof AccountTypeEnum[keyof typeof AccountTypeEnum];


export function instanceOfAccountTypeEnum(value: any): boolean {
    for (const key in AccountTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(AccountTypeEnum, key)) {
            if ((AccountTypeEnum as Record<string, AccountTypeEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AccountTypeEnumFromJSON(json: any): AccountTypeEnum {
    return AccountTypeEnumFromJSONTyped(json, false);
}

export function AccountTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTypeEnum {
    return json as AccountTypeEnum;
}

export function AccountTypeEnumToJSON(value?: AccountTypeEnum | null): any {
    return value as any;
}

