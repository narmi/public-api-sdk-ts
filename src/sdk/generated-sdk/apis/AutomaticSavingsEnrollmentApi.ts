/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.134)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AutomaticSavingsEnrollment,
  AutomaticSavingsEnrollmentDeserializerRequest,
  AutomaticSavingsEnrollmentRetrieve422Response,
} from '../models/index';
import {
    AutomaticSavingsEnrollmentFromJSON,
    AutomaticSavingsEnrollmentToJSON,
    AutomaticSavingsEnrollmentDeserializerRequestFromJSON,
    AutomaticSavingsEnrollmentDeserializerRequestToJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseFromJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseToJSON,
} from '../models/index';

export interface AutomaticSavingsEnrollmentListRequest {
    automaticSavingsEnrollmentDeserializerRequest: AutomaticSavingsEnrollmentDeserializerRequest;
}

/**
 * 
 */
export class AutomaticSavingsEnrollmentApi extends runtime.BaseAPI {

    /**
     * Delete a user\'s automatic saving enrollment. The endpoint will return a 422 in the event that the service fails to unenroll the user.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete automatic savings enrollment
     */
    async automaticSavingsEnrollmentDestroyRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/v1/automatic_savings_enrollment/`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a user\'s automatic saving enrollment. The endpoint will return a 422 in the event that the service fails to unenroll the user.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete automatic savings enrollment
     */
    async automaticSavingsEnrollmentDestroy(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.automaticSavingsEnrollmentDestroyRaw(initOverrides);
    }

    /**
     * Create an automatic saving enrollment for a user.Automatic Savings Enrollment detects any deposit from the source account and does an internal transfer of 3% of the deposit amount into the specified destination account.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create automatic savings enrollment
     */
    async automaticSavingsEnrollmentListRaw(requestParameters: AutomaticSavingsEnrollmentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['automaticSavingsEnrollmentDeserializerRequest'] == null) {
            throw new runtime.RequiredError(
                'automaticSavingsEnrollmentDeserializerRequest',
                'Required parameter "automaticSavingsEnrollmentDeserializerRequest" was null or undefined when calling automaticSavingsEnrollmentList().'
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
            path: `/v1/automatic_savings_enrollment/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AutomaticSavingsEnrollmentDeserializerRequestToJSON(requestParameters['automaticSavingsEnrollmentDeserializerRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create an automatic saving enrollment for a user.Automatic Savings Enrollment detects any deposit from the source account and does an internal transfer of 3% of the deposit amount into the specified destination account.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create automatic savings enrollment
     */
    async automaticSavingsEnrollmentList(requestParameters: AutomaticSavingsEnrollmentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.automaticSavingsEnrollmentListRaw(requestParameters, initOverrides);
    }

    /**
     * Fetch a user\'s automatic saving enrollment. Automatic savings enrollment detects any deposit from the source account and does an internal transfer of 3% of the deposit amount into the specified destination account.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Get automatic savings enrollment
     */
    async automaticSavingsEnrollmentRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutomaticSavingsEnrollment>> {
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
            path: `/v1/automatic_savings_enrollment/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutomaticSavingsEnrollmentFromJSON(jsonValue));
    }

    /**
     * Fetch a user\'s automatic saving enrollment. Automatic savings enrollment detects any deposit from the source account and does an internal transfer of 3% of the deposit amount into the specified destination account.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Get automatic savings enrollment
     */
    async automaticSavingsEnrollmentRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutomaticSavingsEnrollment> {
        const response = await this.automaticSavingsEnrollmentRetrieveRaw(initOverrides);
        return await response.value();
    }

}
