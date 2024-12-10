/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.280)
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
  Address,
  CardInfo,
  CardLimits,
  CardRequest,
  CardResponse,
  CardTravelNote,
  CardTravelNoteRequest,
  CommonCard,
  MissingCardRequest,
  PaginatedCardInfoList,
  PaginatedCardTravelNoteList,
  SensitiveCardInfo,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    AchDetailsCreate400ResponseFromJSON,
    AchDetailsCreate400ResponseToJSON,
    AddressFromJSON,
    AddressToJSON,
    CardInfoFromJSON,
    CardInfoToJSON,
    CardLimitsFromJSON,
    CardLimitsToJSON,
    CardRequestFromJSON,
    CardRequestToJSON,
    CardResponseFromJSON,
    CardResponseToJSON,
    CardTravelNoteFromJSON,
    CardTravelNoteToJSON,
    CardTravelNoteRequestFromJSON,
    CardTravelNoteRequestToJSON,
    CommonCardFromJSON,
    CommonCardToJSON,
    MissingCardRequestFromJSON,
    MissingCardRequestToJSON,
    PaginatedCardInfoListFromJSON,
    PaginatedCardInfoListToJSON,
    PaginatedCardTravelNoteListFromJSON,
    PaginatedCardTravelNoteListToJSON,
    SensitiveCardInfoFromJSON,
    SensitiveCardInfoToJSON,
} from '../models/index';

export interface CardsAddressRetrieveRequest {
    cardId: string;
}

export interface CardsLimitsCreateRequest {
    cardId: string;
}

export interface CardsLimitsRetrieveRequest {
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

export interface CardsSensitiveRetrieveRequest {
    cardId: string;
}

export interface CardsTravelNoteCreateRequest {
    cardId: string;
    cardTravelNoteRequest: CardTravelNoteRequest;
}

export interface CardsTravelNoteDestroyRequest {
    cardId: string;
}

export interface CardsTravelNoteListRequest {
    cardId: string;
    page?: number;
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
     * Update card limits. 
     * Update card limits.
     */
    async cardsLimitsCreateRaw(requestParameters: CardsLimitsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CardLimits>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsLimitsCreate().'
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
            path: `/v1/cards/{card_id}/limits/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CardLimitsFromJSON(jsonValue));
    }

    /**
     * Update card limits. 
     * Update card limits.
     */
    async cardsLimitsCreate(requestParameters: CardsLimitsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CardLimits> {
        const response = await this.cardsLimitsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get specified card limits. 
     * Get specified card limits.
     */
    async cardsLimitsRetrieveRaw(requestParameters: CardsLimitsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CardLimits>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsLimitsRetrieve().'
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
            path: `/v1/cards/{card_id}/limits/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CardLimitsFromJSON(jsonValue));
    }

    /**
     * Get specified card limits. 
     * Get specified card limits.
     */
    async cardsLimitsRetrieve(requestParameters: CardsLimitsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CardLimits> {
        const response = await this.cardsLimitsRetrieveRaw(requestParameters, initOverrides);
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
     * Fetches card PAN, CVV, and Expiration Date.
     * Retrieve card PAN
     */
    async cardsSensitiveRetrieveRaw(requestParameters: CardsSensitiveRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SensitiveCardInfo>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsSensitiveRetrieve().'
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
            path: `/v1/cards/{card_id}/sensitive/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SensitiveCardInfoFromJSON(jsonValue));
    }

    /**
     * Fetches card PAN, CVV, and Expiration Date.
     * Retrieve card PAN
     */
    async cardsSensitiveRetrieve(requestParameters: CardsSensitiveRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SensitiveCardInfo> {
        const response = await this.cardsSensitiveRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create travel note for the specified card.
     * Create travel note
     */
    async cardsTravelNoteCreateRaw(requestParameters: CardsTravelNoteCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CardTravelNote>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsTravelNoteCreate().'
            );
        }

        if (requestParameters['cardTravelNoteRequest'] == null) {
            throw new runtime.RequiredError(
                'cardTravelNoteRequest',
                'Required parameter "cardTravelNoteRequest" was null or undefined when calling cardsTravelNoteCreate().'
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
            path: `/v1/cards/{card_id}/travel_note/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CardTravelNoteRequestToJSON(requestParameters['cardTravelNoteRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CardTravelNoteFromJSON(jsonValue));
    }

    /**
     * Create travel note for the specified card.
     * Create travel note
     */
    async cardsTravelNoteCreate(requestParameters: CardsTravelNoteCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CardTravelNote> {
        const response = await this.cardsTravelNoteCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete travel note for specified card.
     * Delete travel note
     */
    async cardsTravelNoteDestroyRaw(requestParameters: CardsTravelNoteDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsTravelNoteDestroy().'
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
            path: `/v1/cards/{card_id}/travel_note/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete travel note for specified card.
     * Delete travel note
     */
    async cardsTravelNoteDestroy(requestParameters: CardsTravelNoteDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.cardsTravelNoteDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * List the travel notices for the specified card.
     * Get a card\'s travel notice
     */
    async cardsTravelNoteListRaw(requestParameters: CardsTravelNoteListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedCardTravelNoteList>> {
        if (requestParameters['cardId'] == null) {
            throw new runtime.RequiredError(
                'cardId',
                'Required parameter "cardId" was null or undefined when calling cardsTravelNoteList().'
            );
        }

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
            path: `/v1/cards/{card_id}/travel_note/`.replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters['cardId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedCardTravelNoteListFromJSON(jsonValue));
    }

    /**
     * List the travel notices for the specified card.
     * Get a card\'s travel notice
     */
    async cardsTravelNoteList(requestParameters: CardsTravelNoteListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedCardTravelNoteList> {
        const response = await this.cardsTravelNoteListRaw(requestParameters, initOverrides);
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
