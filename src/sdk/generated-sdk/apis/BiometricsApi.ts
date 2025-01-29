/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.164)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  AchDetailsCreate400Response,
  BiometricPublicKey,
  BiometricPublicKeyRequest,
  PaginatedBiometricPublicKeyList,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    AchDetailsCreate400ResponseFromJSON,
    AchDetailsCreate400ResponseToJSON,
    BiometricPublicKeyFromJSON,
    BiometricPublicKeyToJSON,
    BiometricPublicKeyRequestFromJSON,
    BiometricPublicKeyRequestToJSON,
    PaginatedBiometricPublicKeyListFromJSON,
    PaginatedBiometricPublicKeyListToJSON,
} from '../models/index';

export interface BiometricsDevicesCreateRequest {
    biometricPublicKeyRequest: BiometricPublicKeyRequest;
}

export interface BiometricsDevicesListRequest {
    page?: number;
}

export interface BiometricsDevicesUpdateRequest {
    biometricsUuid: string;
    biometricPublicKeyRequest: BiometricPublicKeyRequest;
}

/**
 * 
 */
export class BiometricsApi extends runtime.BaseAPI {

    /**
     * Save a user\'s mobile biometrics public key for user and device
     * Save a user\'s mobile biometrics public key
     */
    async biometricsDevicesCreateRaw(requestParameters: BiometricsDevicesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BiometricPublicKey>> {
        if (requestParameters['biometricPublicKeyRequest'] == null) {
            throw new runtime.RequiredError(
                'biometricPublicKeyRequest',
                'Required parameter "biometricPublicKeyRequest" was null or undefined when calling biometricsDevicesCreate().'
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
            path: `/v1/biometrics/devices/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BiometricPublicKeyRequestToJSON(requestParameters['biometricPublicKeyRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BiometricPublicKeyFromJSON(jsonValue));
    }

    /**
     * Save a user\'s mobile biometrics public key for user and device
     * Save a user\'s mobile biometrics public key
     */
    async biometricsDevicesCreate(requestParameters: BiometricsDevicesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BiometricPublicKey> {
        const response = await this.biometricsDevicesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of biometrics public keys for the user
     * Get biometrics public keys and for the user per device
     */
    async biometricsDevicesListRaw(requestParameters: BiometricsDevicesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedBiometricPublicKeyList>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/biometrics/devices/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedBiometricPublicKeyListFromJSON(jsonValue));
    }

    /**
     * Get a list of biometrics public keys for the user
     * Get biometrics public keys and for the user per device
     */
    async biometricsDevicesList(requestParameters: BiometricsDevicesListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedBiometricPublicKeyList> {
        const response = await this.biometricsDevicesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user\'s mobile biometrics public key for user and device
     * Update a user\'s mobile biometrics public key
     */
    async biometricsDevicesUpdateRaw(requestParameters: BiometricsDevicesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BiometricPublicKey>> {
        if (requestParameters['biometricsUuid'] == null) {
            throw new runtime.RequiredError(
                'biometricsUuid',
                'Required parameter "biometricsUuid" was null or undefined when calling biometricsDevicesUpdate().'
            );
        }

        if (requestParameters['biometricPublicKeyRequest'] == null) {
            throw new runtime.RequiredError(
                'biometricPublicKeyRequest',
                'Required parameter "biometricPublicKeyRequest" was null or undefined when calling biometricsDevicesUpdate().'
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
            path: `/v1/biometrics/devices/{biometrics_uuid}/`.replace(`{${"biometrics_uuid"}}`, encodeURIComponent(String(requestParameters['biometricsUuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BiometricPublicKeyRequestToJSON(requestParameters['biometricPublicKeyRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BiometricPublicKeyFromJSON(jsonValue));
    }

    /**
     * Update a user\'s mobile biometrics public key for user and device
     * Update a user\'s mobile biometrics public key
     */
    async biometricsDevicesUpdate(requestParameters: BiometricsDevicesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BiometricPublicKey> {
        const response = await this.biometricsDevicesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
