/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.80)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { StateE11Enum } from './StateE11Enum';
import {
    StateE11EnumFromJSON,
    StateE11EnumFromJSONTyped,
    StateE11EnumToJSON,
} from './StateE11Enum';
import type { AccountBalance } from './AccountBalance';
import {
    AccountBalanceFromJSON,
    AccountBalanceFromJSONTyped,
    AccountBalanceToJSON,
} from './AccountBalance';
import type { SourceEnum } from './SourceEnum';
import {
    SourceEnumFromJSON,
    SourceEnumFromJSONTyped,
    SourceEnumToJSON,
} from './SourceEnum';
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';
import type { LoanDetails } from './LoanDetails';
import {
    LoanDetailsFromJSON,
    LoanDetailsFromJSONTyped,
    LoanDetailsToJSON,
} from './LoanDetails';

/**
 * A representation of either an account or an external account.
 * @export
 * @interface MobileAccount
 */
export interface MobileAccount {
    /**
     * Customer-facing name for the account, can be customized per user, but defaults to account name or product name.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly name?: string;
    /**
     * Customizable nickname for the account, this is blank if custom name is not set.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly nickname?: string;
    /**
     * UUID of the account, can be used to query the account elsewhere in the API.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly id?: string;
    /**
     * Account number.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly number?: string;
    /**
     * Account type, can be set to `credit`, `debit`, or `deposit`.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly type?: string;
    /**
     * Product type for the account, can be one of `checking`, `savings`, `certificate_of_deposit`, `hsa`, `ira`, `ira_certificate_of_deposit`, `money_market`, `line_of_credit`, `credit_card`, `loan`, `mortgage`, or `lease`.
     * @type {Product}
     * @memberof MobileAccount
     */
    readonly product?: Product;
    /**
     * Date the account was last updated or changed.
     * @type {Date}
     * @memberof MobileAccount
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof MobileAccount
     */
    readonly users?: Array<string>;
    /**
     * List of capabilities for the account. Dictates when and how money can be moved to and from the account. Can contain any of the values `transfer_destination`, `transfer_source`, `ach_destination`, `ach_source`, `check_order`, `stop_payment`, `check_withdrawal`, `external_loan_management`, and `zero_balance`.
     * @type {Array<string>}
     * @memberof MobileAccount
     */
    readonly features?: Array<string>;
    /**
     * Routing number for the account.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly routing?: string | null;
    /**
     * Information related to loan payments associated with the account.
     * @type {LoanDetails}
     * @memberof MobileAccount
     */
    readonly loanDetails?: LoanDetails;
    /**
     * Set to `institution` for internal accounts and `external` for external accounts.
     * 
     * * `institution` - institution
     * * `external` - external
     * @type {SourceEnum}
     * @memberof MobileAccount
     */
    readonly source?: SourceEnum;
    /**
     * Indicates whether the account is active (unlocked) or inactive (locked). This does not affect the data returned from the list accounts endpoint.
     * @type {StateE11Enum}
     * @memberof MobileAccount
     */
    readonly state?: StateE11Enum;
    /**
     * Per-user preference used to mark favorited accounts. This does not affect the data returned from the list accounts endpoint.
     * @type {boolean}
     * @memberof MobileAccount
     */
    readonly favorited?: boolean;
    /**
     * Per-user preference to mark hidden accounts. This does not affect the data returned from the list accounts endpoint.
     * @type {boolean}
     * @memberof MobileAccount
     */
    readonly hidden?: boolean;
    /**
     * Whether the account has been recently updated successfully from the upstream core banking system. The threshold is defined by a setting that can vary, but by default is set to 300 seconds.
     * @type {boolean}
     * @memberof MobileAccount
     */
    readonly outOfDate?: boolean;
    /**
     * Last datetime the account was updated from the core.
     * @type {Date}
     * @memberof MobileAccount
     */
    readonly updatedFromSourceAt?: Date;
    /**
     * A unique identifier that has a one-to-one mapping with an account number. This identifier is typically printed on the MICR line of physical checks written against this account and/or used in other externally facing bank payments like ACH or wires. Depending on the financial institution, it may be the same as account number or a different value.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly checkMicr?: string | null;
    /**
     * Additional information about the account such as interest rates, minimum balances, maturity date, etc.
     * @type {{ [key: string]: any; }}
     * @memberof MobileAccount
     */
    readonly metadata?: { [key: string]: any; };
    /**
     * Primary, available, and ledger balance information.
     * @type {AccountBalance}
     * @memberof MobileAccount
     */
    readonly balances?: AccountBalance;
    /**
     * Display name of the financial institution the account belongs to, derived from the routing number on the account.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly fiName?: string | null;
    /**
     * Date account was created in the database.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly createdAt?: string;
    /**
     * Whether the account has been verified. Always true for internal accounts.
     * @type {boolean}
     * @memberof MobileAccount
     */
    readonly verified?: boolean;
    /**
     * Logo data for the financial institution in SVG (HTML) format.
     * @type {string}
     * @memberof MobileAccount
     */
    readonly fiSvg?: string;
}

/**
 * Check if a given object implements the MobileAccount interface.
 */
export function instanceOfMobileAccount(value: object): value is MobileAccount {
    return true;
}

export function MobileAccountFromJSON(json: any): MobileAccount {
    return MobileAccountFromJSONTyped(json, false);
}

export function MobileAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): MobileAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'nickname': json['nickname'] == null ? undefined : json['nickname'],
        'id': json['id'] == null ? undefined : json['id'],
        'number': json['number'] == null ? undefined : json['number'],
        'type': json['type'] == null ? undefined : json['type'],
        'product': json['product'] == null ? undefined : ProductFromJSON(json['product']),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'users': json['users'] == null ? undefined : json['users'],
        'features': json['features'] == null ? undefined : json['features'],
        'routing': json['routing'] == null ? undefined : json['routing'],
        'loanDetails': json['loan_details'] == null ? undefined : LoanDetailsFromJSON(json['loan_details']),
        'source': json['source'] == null ? undefined : SourceEnumFromJSON(json['source']),
        'state': json['state'] == null ? undefined : StateE11EnumFromJSON(json['state']),
        'favorited': json['favorited'] == null ? undefined : json['favorited'],
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
        'outOfDate': json['out_of_date'] == null ? undefined : json['out_of_date'],
        'updatedFromSourceAt': json['updated_from_source_at'] == null ? undefined : (new Date(json['updated_from_source_at'])),
        'checkMicr': json['check_micr'] == null ? undefined : json['check_micr'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'balances': json['balances'] == null ? undefined : AccountBalanceFromJSON(json['balances']),
        'fiName': json['fi_name'] == null ? undefined : json['fi_name'],
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
        'verified': json['verified'] == null ? undefined : json['verified'],
        'fiSvg': json['fi_svg'] == null ? undefined : json['fi_svg'],
    };
}

export function MobileAccountToJSON(value?: Omit<MobileAccount, 'name'|'nickname'|'id'|'number'|'type'|'product'|'updated_at'|'users'|'features'|'routing'|'loan_details'|'source'|'state'|'favorited'|'hidden'|'out_of_date'|'updated_from_source_at'|'check_micr'|'metadata'|'balances'|'fi_name'|'created_at'|'verified'|'fi_svg'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

