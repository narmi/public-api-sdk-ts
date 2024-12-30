/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.86)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ScheduledTransfer } from './ScheduledTransfer';
import {
    ScheduledTransferFromJSON,
    ScheduledTransferFromJSONTyped,
    ScheduledTransferToJSON,
} from './ScheduledTransfer';

/**
 * 
 * @export
 * @interface NestedScheduledTransfer
 */
export interface NestedScheduledTransfer {
    /**
     * 
     * @type {Array<ScheduledTransfer>}
     * @memberof NestedScheduledTransfer
     */
    scheduledTransfers: Array<ScheduledTransfer>;
}

/**
 * Check if a given object implements the NestedScheduledTransfer interface.
 */
export function instanceOfNestedScheduledTransfer(value: object): value is NestedScheduledTransfer {
    if (!('scheduledTransfers' in value) || value['scheduledTransfers'] === undefined) return false;
    return true;
}

export function NestedScheduledTransferFromJSON(json: any): NestedScheduledTransfer {
    return NestedScheduledTransferFromJSONTyped(json, false);
}

export function NestedScheduledTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): NestedScheduledTransfer {
    if (json == null) {
        return json;
    }
    return {
        
        'scheduledTransfers': ((json['scheduled_transfers'] as Array<any>).map(ScheduledTransferFromJSON)),
    };
}

export function NestedScheduledTransferToJSON(value?: NestedScheduledTransfer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'scheduled_transfers': ((value['scheduledTransfers'] as Array<any>).map(ScheduledTransferToJSON)),
    };
}

