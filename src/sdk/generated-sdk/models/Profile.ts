/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.269)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { OrgRoleEnum } from './OrgRoleEnum';
import {
    OrgRoleEnumFromJSON,
    OrgRoleEnumFromJSONTyped,
    OrgRoleEnumToJSON,
} from './OrgRoleEnum';
import type { BusinessPermissionsField } from './BusinessPermissionsField';
import {
    BusinessPermissionsFieldFromJSON,
    BusinessPermissionsFieldFromJSONTyped,
    BusinessPermissionsFieldToJSON,
} from './BusinessPermissionsField';
import type { Phone } from './Phone';
import {
    PhoneFromJSON,
    PhoneFromJSONTyped,
    PhoneToJSON,
} from './Phone';
import type { ProfileEnabledEstatementsAt } from './ProfileEnabledEstatementsAt';
import {
    ProfileEnabledEstatementsAtFromJSON,
    ProfileEnabledEstatementsAtFromJSONTyped,
    ProfileEnabledEstatementsAtToJSON,
} from './ProfileEnabledEstatementsAt';
import type { UserCategory52fEnum } from './UserCategory52fEnum';
import {
    UserCategory52fEnumFromJSON,
    UserCategory52fEnumFromJSONTyped,
    UserCategory52fEnumToJSON,
} from './UserCategory52fEnum';

/**
 * 
 * @export
 * @interface Profile
 */
export interface Profile {
    /**
     * Email address for the registered user.
     * @type {string}
     * @memberof Profile
     */
    readonly email?: string;
    /**
     * Email address the user has registered to the core.
     * @type {string}
     * @memberof Profile
     */
    readonly coreProvidedEmail?: string | null;
    /**
     * Username for the registered user.
     * @type {string}
     * @memberof Profile
     */
    readonly username?: string | null;
    /**
     * UUID of the registered user. This value is used as the unique identifier for the user in the API.
     * @type {string}
     * @memberof Profile
     */
    readonly id?: string | null;
    /**
     * Core user ID, may be set to empty string if the requesting user does not have the `core_user_id` scope for the target user.
     * @type {string}
     * @memberof Profile
     */
    readonly institutionUserIdentifier?: string;
    /**
     * The last date-time that the information for this user was altered or saved.
     * @type {Date}
     * @memberof Profile
     */
    readonly updatedAt?: Date | null;
    /**
     * A list of addresses for the registered user. This list contains the primary address and the mailing address of the user, if it exists. This may be set to empty list if the requesting user does not have the `address` scope for the target user.
     * @type {Array<Address>}
     * @memberof Profile
     */
    readonly addresses?: Array<Address>;
    /**
     * A list of phone numbers for the registered user. This list often includes only one phone number. This may be set to empty list if the requesting user does not have the `phone` scope for the target user.
     * @type {Array<Phone>}
     * @memberof Profile
     */
    readonly phoneNumbers?: Array<Phone>;
    /**
     * Whether the user has registered a device for notifications. This field will also check to make sure that at least one of the devices is set to active.
     * @type {boolean}
     * @memberof Profile
     */
    readonly notificationsEnabled?: boolean | null;
    /**
     * First name of the registered user, can also include middle or second names. This may be set to empty string if the requesting user does not have the `name` scope for the target user.
     * @type {string}
     * @memberof Profile
     */
    readonly firstName?: string;
    /**
     * Last name of the registered user, may include items such as hyphenated/multiple surnames and generational suffixes (ie. Jr, Sr, III). This may be set to empty string if the requesting user does not have the `name` scope for the target user.
     * @type {string}
     * @memberof Profile
     */
    readonly lastName?: string;
    /**
     * Whether the registered user has opted to receive eStatements. This may be set to `null` if the requesting user does not have the `preferences` scope for the target user.
     * @type {boolean}
     * @memberof Profile
     */
    readonly paperStatements?: boolean | null;
    /**
     * 
     * @type {UserCategory52fEnum}
     * @memberof Profile
     */
    userCategory?: UserCategory52fEnum | null;
    /**
     * A set of user features which define what the user can and can not do.
     * @type {{ [key: string]: any; }}
     * @memberof Profile
     */
    readonly features?: { [key: string]: any; } | null;
    /**
     * The UUID of the organization which the user belongs to. This will be set to `null` if the user category is set to `personal`.
     * @type {string}
     * @memberof Profile
     */
    readonly orgUuid?: string | null;
    /**
     * 
     * @type {OrgRoleEnum}
     * @memberof Profile
     */
    orgRole?: OrgRoleEnum | null;
    /**
     * Name of the organization the user belongs to. This will be the DBA (Doing Business As) name if it exists, otherwise it will be set to the organization's legal name.
     * @type {string}
     * @memberof Profile
     */
    readonly orgName?: string;
    /**
     * Permissions that a user has to a business. The permissions which are granted are dictated by the users role in the organization. This will be set to an empty list for non-business users.
     * @type {Array<BusinessPermissionsField>}
     * @memberof Profile
     */
    readonly businessPermissions?: Array<BusinessPermissionsField>;
    /**
     * For business users, this field indicates whether transactions initiated by the user require approval from the organization. For non-business users this will always be set to `false`.
     * @type {boolean}
     * @memberof Profile
     */
    readonly dualApprovalRequired?: boolean | null;
    /**
     * Indicates whether the registered user is an employee of the financial institution.
     * @type {boolean}
     * @memberof Profile
     */
    readonly isStaff?: boolean;
    /**
     * Indicates whether the user has been disabled.
     * @type {boolean}
     * @memberof Profile
     */
    readonly isActive?: boolean;
    /**
     * Indicates whether the user is an admin.
     * @type {boolean}
     * @memberof Profile
     */
    readonly isSuperuser?: boolean;
    /**
     * Indicates whether the user is a Narmi user.
     * @type {boolean}
     * @memberof Profile
     */
    readonly isNarmi?: boolean;
    /**
     * The date-time the user was enrolled in the Narmi system.
     * @type {Date}
     * @memberof Profile
     */
    readonly dateJoined?: Date;
    /**
     * The date-time the user last logged in.
     * @type {Date}
     * @memberof Profile
     */
    readonly lastLogin?: Date | null;
    /**
     * The banking segment which the user is a member of. These values can be unique for different financial institutions.
     * @type {string}
     * @memberof Profile
     */
    readonly segment?: string;
    /**
     * Metadata for the registered user, this is often set as an empty object `{}`.
     * @type {{ [key: string]: any; }}
     * @memberof Profile
     */
    readonly metadata?: { [key: string]: any; };
    /**
     * Whether the username was defined by the user or was autogenerated by the system.
     * @type {boolean}
     * @memberof Profile
     */
    readonly hasUsername?: boolean;
    /**
     * Whether the password was set by the user.
     * @type {boolean}
     * @memberof Profile
     */
    readonly hasPassword?: boolean;
    /**
     * Whether the user has accepted the latest terms of service.
     * @type {boolean}
     * @memberof Profile
     */
    readonly hasAcceptedLatestTerms?: boolean;
    /**
     * Whether the user has verified their account. This can prevent the user from logging in. Enrollment can be completed via `/v1/enroll_verify/`.
     * @type {boolean}
     * @memberof Profile
     */
    readonly requiresEnrollmentCodeVerification?: boolean;
    /**
     * 
     * @type {ProfileEnabledEstatementsAt}
     * @memberof Profile
     */
    enabledEstatementsAt?: ProfileEnabledEstatementsAt | null;
    /**
     * Whether the user is in the process of enrolling into online banking.
     * @type {boolean}
     * @memberof Profile
     */
    readonly isConverting?: boolean;
    /**
     * When 2FA is enabled for the FI, this field indicates whether the user has a device which they can use to authenticate to the system.
     * @type {boolean}
     * @memberof Profile
     */
    readonly hasPermittedDevice?: boolean;
    /**
     * Whether the registered user has a one-time password backup code for two-factor authentication.
     * @type {boolean}
     * @memberof Profile
     */
    readonly hasBackupCodes?: boolean;
}

/**
 * Check if a given object implements the Profile interface.
 */
export function instanceOfProfile(value: object): value is Profile {
    return true;
}

export function ProfileFromJSON(json: any): Profile {
    return ProfileFromJSONTyped(json, false);
}

export function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'coreProvidedEmail': json['core_provided_email'] == null ? undefined : json['core_provided_email'],
        'username': json['username'] == null ? undefined : json['username'],
        'id': json['id'] == null ? undefined : json['id'],
        'institutionUserIdentifier': json['institution_user_identifier'] == null ? undefined : json['institution_user_identifier'],
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'addresses': json['addresses'] == null ? undefined : ((json['addresses'] as Array<any>).map(AddressFromJSON)),
        'phoneNumbers': json['phone_numbers'] == null ? undefined : ((json['phone_numbers'] as Array<any>).map(PhoneFromJSON)),
        'notificationsEnabled': json['notifications_enabled'] == null ? undefined : json['notifications_enabled'],
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'paperStatements': json['paper_statements'] == null ? undefined : json['paper_statements'],
        'userCategory': json['user_category'] == null ? undefined : UserCategory52fEnumFromJSON(json['user_category']),
        'features': json['features'] == null ? undefined : json['features'],
        'orgUuid': json['org_uuid'] == null ? undefined : json['org_uuid'],
        'orgRole': json['org_role'] == null ? undefined : OrgRoleEnumFromJSON(json['org_role']),
        'orgName': json['org_name'] == null ? undefined : json['org_name'],
        'businessPermissions': json['business_permissions'] == null ? undefined : ((json['business_permissions'] as Array<any>).map(BusinessPermissionsFieldFromJSON)),
        'dualApprovalRequired': json['dual_approval_required'] == null ? undefined : json['dual_approval_required'],
        'isStaff': json['is_staff'] == null ? undefined : json['is_staff'],
        'isActive': json['is_active'] == null ? undefined : json['is_active'],
        'isSuperuser': json['is_superuser'] == null ? undefined : json['is_superuser'],
        'isNarmi': json['is_narmi'] == null ? undefined : json['is_narmi'],
        'dateJoined': json['date_joined'] == null ? undefined : (new Date(json['date_joined'])),
        'lastLogin': json['last_login'] == null ? undefined : (new Date(json['last_login'])),
        'segment': json['segment'] == null ? undefined : json['segment'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'hasUsername': json['has_username'] == null ? undefined : json['has_username'],
        'hasPassword': json['has_password'] == null ? undefined : json['has_password'],
        'hasAcceptedLatestTerms': json['has_accepted_latest_terms'] == null ? undefined : json['has_accepted_latest_terms'],
        'requiresEnrollmentCodeVerification': json['requires_enrollment_code_verification'] == null ? undefined : json['requires_enrollment_code_verification'],
        'enabledEstatementsAt': json['enabled_estatements_at'] == null ? undefined : ProfileEnabledEstatementsAtFromJSON(json['enabled_estatements_at']),
        'isConverting': json['is_converting'] == null ? undefined : json['is_converting'],
        'hasPermittedDevice': json['has_permitted_device'] == null ? undefined : json['has_permitted_device'],
        'hasBackupCodes': json['has_backup_codes'] == null ? undefined : json['has_backup_codes'],
    };
}

export function ProfileToJSON(value?: Omit<Profile, 'email'|'core_provided_email'|'username'|'id'|'institution_user_identifier'|'updated_at'|'addresses'|'phone_numbers'|'notifications_enabled'|'first_name'|'last_name'|'paper_statements'|'features'|'org_uuid'|'org_name'|'business_permissions'|'dual_approval_required'|'is_staff'|'is_active'|'is_superuser'|'is_narmi'|'date_joined'|'last_login'|'segment'|'metadata'|'has_username'|'has_password'|'has_accepted_latest_terms'|'requires_enrollment_code_verification'|'is_converting'|'has_permitted_device'|'has_backup_codes'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user_category': UserCategory52fEnumToJSON(value['userCategory']),
        'org_role': OrgRoleEnumToJSON(value['orgRole']),
        'enabled_estatements_at': ProfileEnabledEstatementsAtToJSON(value['enabledEstatementsAt']),
    };
}

