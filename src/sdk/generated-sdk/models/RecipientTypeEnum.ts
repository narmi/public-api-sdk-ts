/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.149)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `person` - Person
 * * `business` - Business
 * @export
 */
export const RecipientTypeEnum = {
    Person: 'person',
    Business: 'business'
} as const;
export type RecipientTypeEnum = typeof RecipientTypeEnum[keyof typeof RecipientTypeEnum];


export function instanceOfRecipientTypeEnum(value: any): boolean {
    for (const key in RecipientTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(RecipientTypeEnum, key)) {
            if ((RecipientTypeEnum as Record<string, RecipientTypeEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RecipientTypeEnumFromJSON(json: any): RecipientTypeEnum {
    return RecipientTypeEnumFromJSONTyped(json, false);
}

export function RecipientTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipientTypeEnum {
    return json as RecipientTypeEnum;
}

export function RecipientTypeEnumToJSON(value?: RecipientTypeEnum | null): any {
    return value as any;
}

