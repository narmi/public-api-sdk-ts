/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.168)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `locked` - locked
 * * `normal` - normal
 * * `shipped` - shipped
 * * `cancelled` - cancelled
 * * `damaged` - damaged
 * @export
 */
export const State167Enum = {
    Locked: 'locked',
    Normal: 'normal',
    Shipped: 'shipped',
    Cancelled: 'cancelled',
    Damaged: 'damaged'
} as const;
export type State167Enum = typeof State167Enum[keyof typeof State167Enum];


export function instanceOfState167Enum(value: any): boolean {
    for (const key in State167Enum) {
        if (Object.prototype.hasOwnProperty.call(State167Enum, key)) {
            if ((State167Enum as Record<string, State167Enum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function State167EnumFromJSON(json: any): State167Enum {
    return State167EnumFromJSONTyped(json, false);
}

export function State167EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): State167Enum {
    return json as State167Enum;
}

export function State167EnumToJSON(value?: State167Enum | null): any {
    return value as any;
}

