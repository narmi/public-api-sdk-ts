/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.207)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AccountPurposeEnum } from './AccountPurposeEnum';
import {
    AccountPurposeEnumFromJSON,
    AccountPurposeEnumFromJSONTyped,
    AccountPurposeEnumToJSON,
} from './AccountPurposeEnum';
import type { MoneyMovementDestination } from './MoneyMovementDestination';
import {
    MoneyMovementDestinationFromJSON,
    MoneyMovementDestinationFromJSONTyped,
    MoneyMovementDestinationToJSON,
} from './MoneyMovementDestination';
import type { AccountTypeEnum } from './AccountTypeEnum';
import {
    AccountTypeEnumFromJSON,
    AccountTypeEnumFromJSONTyped,
    AccountTypeEnumToJSON,
} from './AccountTypeEnum';

/**
 * In addition to the standard ACHDestination fields you'd expect for a create/updated request,
 * this serializer also requires a recipient (passed in as the uuid of the recipient)
 * that will be associated with the created/updated ACHDestination.
 * @export
 * @interface ACHDestination
 */
export interface ACHDestination {
    /**
     * 
     * @type {string}
     * @memberof ACHDestination
     */
    readonly id?: string;
    /**
     * 
     * @type {AccountTypeEnum}
     * @memberof ACHDestination
     */
    accountType: AccountTypeEnum;
    /**
     * 
     * @type {AccountPurposeEnum}
     * @memberof ACHDestination
     */
    accountPurpose: AccountPurposeEnum;
    /**
     * 
     * @type {MoneyMovementDestination}
     * @memberof ACHDestination
     */
    readonly destination?: MoneyMovementDestination;
    /**
     * 
     * @type {string}
     * @memberof ACHDestination
     */
    readonly institutionName?: string;
}

/**
 * Check if a given object implements the ACHDestination interface.
 */
export function instanceOfACHDestination(value: object): value is ACHDestination {
    if (!('accountType' in value) || value['accountType'] === undefined) return false;
    if (!('accountPurpose' in value) || value['accountPurpose'] === undefined) return false;
    return true;
}

export function ACHDestinationFromJSON(json: any): ACHDestination {
    return ACHDestinationFromJSONTyped(json, false);
}

export function ACHDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHDestination {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'accountType': AccountTypeEnumFromJSON(json['account_type']),
        'accountPurpose': AccountPurposeEnumFromJSON(json['account_purpose']),
        'destination': json['destination'] == null ? undefined : MoneyMovementDestinationFromJSON(json['destination']),
        'institutionName': json['institution_name'] == null ? undefined : json['institution_name'],
    };
}

export function ACHDestinationToJSON(value?: Omit<ACHDestination, 'id'|'destination'|'institution_name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_type': AccountTypeEnumToJSON(value['accountType']),
        'account_purpose': AccountPurposeEnumToJSON(value['accountPurpose']),
    };
}

