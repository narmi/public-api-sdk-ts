/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.246)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  Address,
  CardInfo,
  CardRequest,
  CardResponse,
  CardsReplaceCardCreate400Response,
  CommonCard,
  MissingCardRequest,
  PaginatedCardInfoList,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    AddressFromJSON,
    AddressToJSON,
    CardInfoFromJSON,
    CardInfoToJSON,
    CardRequestFromJSON,
    CardRequestToJSON,
    CardResponseFromJSON,
    CardResponseToJSON,
    CardsReplaceCardCreate400ResponseFromJSON,
    CardsReplaceCardCreate400ResponseToJSON,
    CommonCardFromJSON,
    CommonCardToJSON,
    MissingCardRequestFromJSON,
    MissingCardRequestToJSON,
    PaginatedCardInfoListFromJSON,
    PaginatedCardInfoListToJSON,
} from '../models/index';

export interface CardsAddressRetrieveRequest {
    cardId: string;
}

export interface CardsListRequest {
    page?: number;
}

export interface CardsLockCreateRequest {
    cardId: string;
}

export interface CardsReplaceCardCreateRequest {
    cardId: string;
    missingCardRequest: MissingCardRequest;
}

export interface CardsRetrieveRequest {
    cardId: string;
}

export interface CardsUnlockCreateRequest {
    cardId: string;
}

export interface CardsUpdateRequest {
    cardId: string;
    cardRequest: CardRequest;
}

/**
 * 
 */
export class CardsApi extends runtime.BaseAPI {

    /**
     * Retrieve the registered address for the specified card. 
     * Retrieve card address
     */
    async cardsAddressRetrieveRaw(requestParameters: CardsAddressRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsAddressRetrieve().'
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
            path: `/v1/cards/{card_id}/address/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     * Retrieve the registered address for the specified card. 
     * Retrieve card address
     */
    async cardsAddressRetrieve(requestParameters: CardsAddressRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.cardsAddressRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the user\'s cards. 
     * List cards for a user
     */
    async cardsListRaw(requestParameters: CardsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedCardInfoList>> {
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
            path: `/v1/cards/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedCardInfoListFromJSON(jsonValue));
    }

    /**
     * List the user\'s cards. 
     * List cards for a user
     */
    async cardsList(requestParameters: CardsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedCardInfoList> {
        const response = await this.cardsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Freeze a card so that it cannot be used. 
     * Lock a card
     */
    async cardsLockCreateRaw(requestParameters: CardsLockCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommonCard>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsLockCreate().'
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
            path: `/v1/cards/{card_id}/lock/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonCardFromJSON(jsonValue));
    }

    /**
     * Freeze a card so that it cannot be used. 
     * Lock a card
     */
    async cardsLockCreate(requestParameters: CardsLockCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommonCard> {
        const response = await this.cardsLockCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Submits a request to the card processor to send a replacement to the user, as well as notifying the user of said action via email.
     * Replace a missing card
     */
    async cardsReplaceCardCreateRaw(requestParameters: CardsReplaceCardCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommonCard>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsReplaceCardCreate().'
            );
        }

        if (requestParameters['missingCardRequest'] == null) {
            throw new runtime.RequiredError(
                'missingCardRequest',
                'Required parameter "missingCardRequest" was null or undefined when calling cardsReplaceCardCreate().'
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
            path: `/v1/cards/{card_id}/replace_card/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MissingCardRequestToJSON(requestParameters['missingCardRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonCardFromJSON(jsonValue));
    }

    /**
     * Submits a request to the card processor to send a replacement to the user, as well as notifying the user of said action via email.
     * Replace a missing card
     */
    async cardsReplaceCardCreate(requestParameters: CardsReplaceCardCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommonCard> {
        const response = await this.cardsReplaceCardCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve specified card. 
     * Retrieve specified card
     */
    async cardsRetrieveRaw(requestParameters: CardsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CardInfo>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsRetrieve().'
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
            path: `/v1/cards/{card_id}/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CardInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve specified card. 
     * Retrieve specified card
     */
    async cardsRetrieve(requestParameters: CardsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CardInfo> {
        const response = await this.cardsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Un-freeze a card so that it can be used. 
     * Unlock a card
     */
    async cardsUnlockCreateRaw(requestParameters: CardsUnlockCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommonCard>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsUnlockCreate().'
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
            path: `/v1/cards/{card_id}/unlock/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonCardFromJSON(jsonValue));
    }

    /**
     * Un-freeze a card so that it can be used. 
     * Unlock a card
     */
    async cardsUnlockCreate(requestParameters: CardsUnlockCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommonCard> {
        const response = await this.cardsUnlockCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Activate and deactivate a specified card. 
     * Activate or deactivate card
     * @deprecated
     */
    async cardsUpdateRaw(requestParameters: CardsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CardResponse>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsUpdate().'
            );
        }

        if (requestParameters['cardRequest'] == null) {
            throw new runtime.RequiredError(
                'cardRequest',
                'Required parameter "cardRequest" was null or undefined when calling cardsUpdate().'
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
            path: `/v1/cards/{card_id}/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CardRequestToJSON(requestParameters['cardRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CardResponseFromJSON(jsonValue));
    }

    /**
     * Activate and deactivate a specified card. 
     * Activate or deactivate card
     * @deprecated
     */
    async cardsUpdate(requestParameters: CardsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CardResponse> {
        const response = await this.cardsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
