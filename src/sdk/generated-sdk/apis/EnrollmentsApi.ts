/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.5)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  AutomaticSavingsEnrollmentRetrieve422Response,
  CreateEnrollmentUrlsResponse,
  EnrollCreate400Response,
  Enrollment,
  EnrollmentCompleteDocRequest,
  EnrollmentDocRequest,
  EnrollmentUrlCreateRequest,
  UsersEnrollmentCodeCreate200Response,
  VerifyEnrollment,
  VerifyEnrollmentDocRequest,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseFromJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseToJSON,
    CreateEnrollmentUrlsResponseFromJSON,
    CreateEnrollmentUrlsResponseToJSON,
    EnrollCreate400ResponseFromJSON,
    EnrollCreate400ResponseToJSON,
    EnrollmentFromJSON,
    EnrollmentToJSON,
    EnrollmentCompleteDocRequestFromJSON,
    EnrollmentCompleteDocRequestToJSON,
    EnrollmentDocRequestFromJSON,
    EnrollmentDocRequestToJSON,
    EnrollmentUrlCreateRequestFromJSON,
    EnrollmentUrlCreateRequestToJSON,
    UsersEnrollmentCodeCreate200ResponseFromJSON,
    UsersEnrollmentCodeCreate200ResponseToJSON,
    VerifyEnrollmentFromJSON,
    VerifyEnrollmentToJSON,
    VerifyEnrollmentDocRequestFromJSON,
    VerifyEnrollmentDocRequestToJSON,
} from '../models/index';

export interface EnrollCreateRequest {
    enrollmentDocRequest?: EnrollmentDocRequest;
}

export interface EnrollVerifyCreateRequest {
    verifyEnrollmentDocRequest: VerifyEnrollmentDocRequest;
}

export interface EnrollmentsCreateRequest {
    enrollmentUrlCreateRequest?: EnrollmentUrlCreateRequest;
}

export interface UsersEnrollmentCodeCreateRequest {
    userUuid: string;
}

export interface UsersEnrollmentCompleteCreateRequest {
    userUuid: string;
    enrollmentCompleteDocRequest?: EnrollmentCompleteDocRequest;
}

/**
 * 
 */
export class EnrollmentsApi extends runtime.BaseAPI {

    /**
     * Verifies a user\'s details against the core and creates a digital banking user.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a digital banking user
     */
    async enrollCreateRaw(requestParameters: EnrollCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Enrollment>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/enroll/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EnrollmentDocRequestToJSON(requestParameters['enrollmentDocRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnrollmentFromJSON(jsonValue));
    }

    /**
     * Verifies a user\'s details against the core and creates a digital banking user.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a digital banking user
     */
    async enrollCreate(requestParameters: EnrollCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Enrollment> {
        const response = await this.enrollCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verifies an enrolling user\'s enrollment code.  Enrollment codes can be generated via the regenerate enrollment code endpoint /v1/users/{user_uuid}/enrollment_code/.  If verified, returns user information.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Verify enrollment code
     */
    async enrollVerifyCreateRaw(requestParameters: EnrollVerifyCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifyEnrollment>> {
        if (requestParameters['verifyEnrollmentDocRequest'] == null) {
            throw new runtime.RequiredError(
                'verifyEnrollmentDocRequest',
                'Required parameter "verifyEnrollmentDocRequest" was null or undefined when calling enrollVerifyCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/enroll_verify/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyEnrollmentDocRequestToJSON(requestParameters['verifyEnrollmentDocRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifyEnrollmentFromJSON(jsonValue));
    }

    /**
     * Verifies an enrolling user\'s enrollment code.  Enrollment codes can be generated via the regenerate enrollment code endpoint /v1/users/{user_uuid}/enrollment_code/.  If verified, returns user information.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Verify enrollment code
     */
    async enrollVerifyCreate(requestParameters: EnrollVerifyCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifyEnrollment> {
        const response = await this.enrollVerifyCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a URL that enables a user to enroll without entering their details on the first step of enrollment. Verifies a user\'s information on the core and generates a link that allows the user to automatically proceed past the initial step of enrollment. After clicking the link, and depending on configuration, the user is redirected to the enrollment code verification or username/password step of enrollment.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create enrollment URL
     */
    async enrollmentsCreateRaw(requestParameters: EnrollmentsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateEnrollmentUrlsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/enrollments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EnrollmentUrlCreateRequestToJSON(requestParameters['enrollmentUrlCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateEnrollmentUrlsResponseFromJSON(jsonValue));
    }

    /**
     * Returns a URL that enables a user to enroll without entering their details on the first step of enrollment. Verifies a user\'s information on the core and generates a link that allows the user to automatically proceed past the initial step of enrollment. After clicking the link, and depending on configuration, the user is redirected to the enrollment code verification or username/password step of enrollment.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create enrollment URL
     */
    async enrollmentsCreate(requestParameters: EnrollmentsCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateEnrollmentUrlsResponse> {
        const response = await this.enrollmentsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Regenerates an enrollment code for an enrolling user and resends the enrollment code email.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a new enrollment code
     */
    async usersEnrollmentCodeCreateRaw(requestParameters: UsersEnrollmentCodeCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersEnrollmentCodeCreate200Response>> {
        if (requestParameters['userUuid'] == null) {
            throw new runtime.RequiredError(
                'userUuid',
                'Required parameter "userUuid" was null or undefined when calling usersEnrollmentCodeCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/users/{user_uuid}/enrollment_code/`.replace(`{${"user_uuid"}}`, encodeURIComponent(String(requestParameters['userUuid']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersEnrollmentCodeCreate200ResponseFromJSON(jsonValue));
    }

    /**
     * Regenerates an enrollment code for an enrolling user and resends the enrollment code email.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a new enrollment code
     */
    async usersEnrollmentCodeCreate(requestParameters: UsersEnrollmentCodeCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersEnrollmentCodeCreate200Response> {
        const response = await this.usersEnrollmentCodeCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Validates that the user meets the requirements to complete enrollment, which may include that they have a permitted MFA device and that they have correctly assented to their estatement preferences. If they meet these requirements, they\'ll be registered in our system as having completed enrollment.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Set user as enrolled
     */
    async usersEnrollmentCompleteCreateRaw(requestParameters: UsersEnrollmentCompleteCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userUuid'] == null) {
            throw new runtime.RequiredError(
                'userUuid',
                'Required parameter "userUuid" was null or undefined when calling usersEnrollmentCompleteCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/users/{user_uuid}/enrollment_complete`.replace(`{${"user_uuid"}}`, encodeURIComponent(String(requestParameters['userUuid']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EnrollmentCompleteDocRequestToJSON(requestParameters['enrollmentCompleteDocRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Validates that the user meets the requirements to complete enrollment, which may include that they have a permitted MFA device and that they have correctly assented to their estatement preferences. If they meet these requirements, they\'ll be registered in our system as having completed enrollment.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Set user as enrolled
     */
    async usersEnrollmentCompleteCreate(requestParameters: UsersEnrollmentCompleteCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.usersEnrollmentCompleteCreateRaw(requestParameters, initOverrides);
    }

}
