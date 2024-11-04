/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.11)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { State167Enum } from './State167Enum';
import {
    State167EnumFromJSON,
    State167EnumFromJSONTyped,
    State167EnumToJSON,
} from './State167Enum';

/**
 * integrations.cards.common.Card
 * @export
 * @interface CommonCard
 */
export interface CommonCard {
    /**
     * An identifier for the card object.
     * @type {string}
     * @memberof CommonCard
     */
    id: string;
    /**
     * String uniquely identifying a user or user's primary account on the banking core
     * @type {string}
     * @memberof CommonCard
     */
    coreUserId: string;
    /**
     * Last four digits of the card's account number.
     * @type {string}
     * @memberof CommonCard
     */
    lastFourDigits: string;
    /**
     * Indicates whether the card is functional, and if not for what reason.
     * 
     * * `locked` - locked
     * * `normal` - normal
     * * `shipped` - shipped
     * * `cancelled` - cancelled
     * * `damaged` - damaged
     * @type {State167Enum}
     * @memberof CommonCard
     */
    readonly state?: State167Enum;
    /**
     * Bank Identification Number (BIN) is the first 6 to 8 digits of the Primary Account Number (PAN).
     * @type {string}
     * @memberof CommonCard
     */
    bin: string;
    /**
     * The credit card processing network, such as Visa, Discover, etc.
     * @type {string}
     * @memberof CommonCard
     */
    network: string;
    /**
     * The card product's name.
     * @type {string}
     * @memberof CommonCard
     */
    name: string;
    /**
     * The card's type, debit, credit or atm.
     * @type {string}
     * @memberof CommonCard
     */
    cardType: string;
}

/**
 * Check if a given object implements the CommonCard interface.
 */
export function instanceOfCommonCard(value: object): value is CommonCard {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('coreUserId' in value) || value['coreUserId'] === undefined) return false;
    if (!('lastFourDigits' in value) || value['lastFourDigits'] === undefined) return false;
    if (!('bin' in value) || value['bin'] === undefined) return false;
    if (!('network' in value) || value['network'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('cardType' in value) || value['cardType'] === undefined) return false;
    return true;
}

export function CommonCardFromJSON(json: any): CommonCard {
    return CommonCardFromJSONTyped(json, false);
}

export function CommonCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonCard {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'coreUserId': json['core_user_id'],
        'lastFourDigits': json['last_four_digits'],
        'state': json['state'] == null ? undefined : State167EnumFromJSON(json['state']),
        'bin': json['bin'],
        'network': json['network'],
        'name': json['name'],
        'cardType': json['card_type'],
    };
}

export function CommonCardToJSON(value?: Omit<CommonCard, 'state'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'core_user_id': value['coreUserId'],
        'last_four_digits': value['lastFourDigits'],
        'bin': value['bin'],
        'network': value['network'],
        'name': value['name'],
        'card_type': value['cardType'],
    };
}

