/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.352)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * For getting and setting card limits
 * @export
 * @interface CardLimits
 */
export interface CardLimits {
    /**
     * Current ATM withdrawal limit.
     * @type {number}
     * @memberof CardLimits
     */
    atmLimit?: number;
    /**
     * Current spending limit.
     * @type {number}
     * @memberof CardLimits
     */
    posLimit?: number;
    /**
     * ATM withdrawal limit was increased today.
     * @type {boolean}
     * @memberof CardLimits
     */
    hasAtmLimitIncreasedToday?: boolean;
    /**
     * Spending limit was increased today.
     * @type {boolean}
     * @memberof CardLimits
     */
    hasPosLimitIncreasedToday?: boolean;
    /**
     * Is the user allowed to request a limit increase?
     * @type {boolean}
     * @memberof CardLimits
     */
    canUserRequestLimitIncrease?: boolean;
}

/**
 * Check if a given object implements the CardLimits interface.
 */
export function instanceOfCardLimits(value: object): value is CardLimits {
    return true;
}

export function CardLimitsFromJSON(json: any): CardLimits {
    return CardLimitsFromJSONTyped(json, false);
}

export function CardLimitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardLimits {
    if (json == null) {
        return json;
    }
    return {
        
        'atmLimit': json['atm_limit'] == null ? undefined : json['atm_limit'],
        'posLimit': json['pos_limit'] == null ? undefined : json['pos_limit'],
        'hasAtmLimitIncreasedToday': json['has_atm_limit_increased_today'] == null ? undefined : json['has_atm_limit_increased_today'],
        'hasPosLimitIncreasedToday': json['has_pos_limit_increased_today'] == null ? undefined : json['has_pos_limit_increased_today'],
        'canUserRequestLimitIncrease': json['can_user_request_limit_increase'] == null ? undefined : json['can_user_request_limit_increase'],
    };
}

export function CardLimitsToJSON(value?: CardLimits | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'atm_limit': value['atmLimit'],
        'pos_limit': value['posLimit'],
        'has_atm_limit_increased_today': value['hasAtmLimitIncreasedToday'],
        'has_pos_limit_increased_today': value['hasPosLimitIncreasedToday'],
        'can_user_request_limit_increase': value['canUserRequestLimitIncrease'],
    };
}

