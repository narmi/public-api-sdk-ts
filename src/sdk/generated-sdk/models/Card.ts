/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.194)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CardStateEnum } from './CardStateEnum';
import {
    CardStateEnumFromJSON,
    CardStateEnumFromJSONTyped,
    CardStateEnumToJSON,
} from './CardStateEnum';

/**
 * 
 * @export
 * @interface Card
 */
export interface Card {
    /**
     * Indicates whether the card is functional.
     * 
     * * `active` - active
     * * `inactive` - inactive
     * @type {CardStateEnum}
     * @memberof Card
     */
    state: CardStateEnum;
    /**
     * An identifier for the card object.
     * @type {string}
     * @memberof Card
     */
    readonly id?: string;
    /**
     * String uniquely identifying a user or user's primary account on the banking core.
     * @type {string}
     * @memberof Card
     */
    readonly coreUserId?: string;
    /**
     * Bank Identification Number (BIN), the first 6 to 8 digits of the Primary Account Number (PAN)
     * @type {string}
     * @memberof Card
     */
    readonly bin?: string;
    /**
     * Last four digits of the card number.
     * @type {string}
     * @memberof Card
     */
    readonly lastFourDigits?: string;
    /**
     * An image of the card or a placeholder image.
     * @type {string}
     * @memberof Card
     */
    readonly svg?: string;
    /**
     * "True" or "False"
     * @type {string}
     * @memberof Card
     */
    readonly isCardNumberOnFront?: string;
    /**
     * Hex value representing card text color.
     * @type {string}
     * @memberof Card
     */
    readonly cardTextColor?: string;
}

/**
 * Check if a given object implements the Card interface.
 */
export function instanceOfCard(value: object): value is Card {
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function CardFromJSON(json: any): Card {
    return CardFromJSONTyped(json, false);
}

export function CardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Card {
    if (json == null) {
        return json;
    }
    return {
        
        'state': CardStateEnumFromJSON(json['state']),
        'id': json['id'] == null ? undefined : json['id'],
        'coreUserId': json['core_user_id'] == null ? undefined : json['core_user_id'],
        'bin': json['bin'] == null ? undefined : json['bin'],
        'lastFourDigits': json['last_four_digits'] == null ? undefined : json['last_four_digits'],
        'svg': json['svg'] == null ? undefined : json['svg'],
        'isCardNumberOnFront': json['is_card_number_on_front'] == null ? undefined : json['is_card_number_on_front'],
        'cardTextColor': json['card_text_color'] == null ? undefined : json['card_text_color'],
    };
}

export function CardToJSON(value?: Omit<Card, 'id'|'core_user_id'|'bin'|'last_four_digits'|'svg'|'is_card_number_on_front'|'card_text_color'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CardStateEnumToJSON(value['state']),
    };
}

