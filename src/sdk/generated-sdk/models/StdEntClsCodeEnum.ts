/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.210)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `PPD` - Batch Personal
 * * `CCD` - Batch Corporate
 * * `ARC` - Batch Accounts Receivable
 * * `CTX` - Batch Corporate Exchange
 * * `POS` - Batch Point Of Sale
 * * `WEB` - Batch Internet Initiated
 * * `BOC` - Batch Backoffice Conversion
 * * `TEL` - Batch Telephone Initiated
 * * `MTE` - Batch Machine Transfer
 * * `SHR` - Batch Shared Network
 * * `CIE` - Batch Customer Initiated
 * * `POP` - Batch Point Of Purchase
 * * `RCK` - Batch Represented Check
 * @export
 */
export const StdEntClsCodeEnum = {
    Ppd: 'PPD',
    Ccd: 'CCD',
    Arc: 'ARC',
    Ctx: 'CTX',
    Pos: 'POS',
    Web: 'WEB',
    Boc: 'BOC',
    Tel: 'TEL',
    Mte: 'MTE',
    Shr: 'SHR',
    Cie: 'CIE',
    Pop: 'POP',
    Rck: 'RCK'
} as const;
export type StdEntClsCodeEnum = typeof StdEntClsCodeEnum[keyof typeof StdEntClsCodeEnum];


export function instanceOfStdEntClsCodeEnum(value: any): boolean {
    for (const key in StdEntClsCodeEnum) {
        if (Object.prototype.hasOwnProperty.call(StdEntClsCodeEnum, key)) {
            if ((StdEntClsCodeEnum as Record<string, StdEntClsCodeEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function StdEntClsCodeEnumFromJSON(json: any): StdEntClsCodeEnum {
    return StdEntClsCodeEnumFromJSONTyped(json, false);
}

export function StdEntClsCodeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): StdEntClsCodeEnum {
    return json as StdEntClsCodeEnum;
}

export function StdEntClsCodeEnumToJSON(value?: StdEntClsCodeEnum | null): any {
    return value as any;
}

