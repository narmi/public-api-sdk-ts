/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.55)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CardShippingInfo } from './CardShippingInfo';
import {
    CardShippingInfoFromJSON,
    CardShippingInfoFromJSONTyped,
    CardShippingInfoToJSON,
} from './CardShippingInfo';
import type { State167Enum } from './State167Enum';
import {
    State167EnumFromJSON,
    State167EnumFromJSONTyped,
    State167EnumToJSON,
} from './State167Enum';

/**
 * integrations.cards.api_messages.CardInfo
 * @export
 * @interface CardInfo
 */
export interface CardInfo {
    /**
     * An identifier for the card object.
     * @type {string}
     * @memberof CardInfo
     */
    id: string;
    /**
     * The card product's name.
     * @type {string}
     * @memberof CardInfo
     */
    name: string;
    /**
     * Last four digits of the card's account number.
     * @type {string}
     * @memberof CardInfo
     */
    lastFourDigits: string;
    /**
     * Shipping information, not always populated.
     * @type {CardShippingInfo}
     * @memberof CardInfo
     */
    shipping?: CardShippingInfo;
    /**
     * The credit card processing network, such as Visa, Discover, etc.
     * @type {string}
     * @memberof CardInfo
     */
    network?: string | null;
    /**
     * Indicates whether the card is functional, and if not for what reason.
     * 
     * * `locked` - locked
     * * `normal` - normal
     * * `shipped` - shipped
     * * `cancelled` - cancelled
     * * `damaged` - damaged
     * @type {State167Enum}
     * @memberof CardInfo
     */
    readonly state?: State167Enum;
    /**
     * An image of the card or a placeholder image.
     * @type {string}
     * @memberof CardInfo
     */
    readonly image?: string;
    /**
     * Hex value indicating text color.
     * @type {string}
     * @memberof CardInfo
     */
    textColor?: string;
    /**
     * The card's type, debit, credit or atm.
     * @type {string}
     * @memberof CardInfo
     */
    cardType: string;
}

/**
 * Check if a given object implements the CardInfo interface.
 */
export function instanceOfCardInfo(value: object): value is CardInfo {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('lastFourDigits' in value) || value['lastFourDigits'] === undefined) return false;
    if (!('cardType' in value) || value['cardType'] === undefined) return false;
    return true;
}

export function CardInfoFromJSON(json: any): CardInfo {
    return CardInfoFromJSONTyped(json, false);
}

export function CardInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'lastFourDigits': json['last_four_digits'],
        'shipping': json['shipping'] == null ? undefined : CardShippingInfoFromJSON(json['shipping']),
        'network': json['network'] == null ? undefined : json['network'],
        'state': json['state'] == null ? undefined : State167EnumFromJSON(json['state']),
        'image': json['image'] == null ? undefined : json['image'],
        'textColor': json['text_color'] == null ? undefined : json['text_color'],
        'cardType': json['card_type'],
    };
}

export function CardInfoToJSON(value?: Omit<CardInfo, 'state'|'image'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'last_four_digits': value['lastFourDigits'],
        'shipping': CardShippingInfoToJSON(value['shipping']),
        'network': value['network'],
        'text_color': value['textColor'],
        'card_type': value['cardType'],
    };
}

