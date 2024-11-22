/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.195)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  PaginatedDocumentList,
  ServiceFailureError,
  UserDocument,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    PaginatedDocumentListFromJSON,
    PaginatedDocumentListToJSON,
    ServiceFailureErrorFromJSON,
    ServiceFailureErrorToJSON,
    UserDocumentFromJSON,
    UserDocumentToJSON,
} from '../models/index';

export interface DocumentsListRequest {
    limit?: number;
    offset?: number;
}

export interface DocumentsRetrieveRequest {
    documentId: string;
    data?: boolean;
}

/**
 * 
 */
export class DocumentsApi extends runtime.BaseAPI {

    /**
     * List the authenticated user\'s documents (statements, tax forms, etc.).
     * List documents
     */
    async documentsListRaw(requestParameters: DocumentsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedDocumentList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
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
            path: `/v1/documents/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedDocumentListFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s documents (statements, tax forms, etc.).
     * List documents
     */
    async documentsList(requestParameters: DocumentsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedDocumentList> {
        const response = await this.documentsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch a specific statement by statement ID.   An invalid document ID will typically return the documented error response, however if the `statements` feature is not enabled, it may also return a blank 404 response.  This endpoint will return a 404 if a trailing slash is included in the request.
     * Retrieve a document
     */
    async documentsRetrieveRaw(requestParameters: DocumentsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDocument>> {
        if (requestParameters['documentId'] == null) {
            throw new runtime.RequiredError(
                'documentId',
                'Required parameter "documentId" was null or undefined when calling documentsRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['data'] != null) {
            queryParameters['data'] = requestParameters['data'];
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
            path: `/v1/documents/{document_id}/`.replace(`{${"document_id"}}`, encodeURIComponent(String(requestParameters['documentId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDocumentFromJSON(jsonValue));
    }

    /**
     * Fetch a specific statement by statement ID.   An invalid document ID will typically return the documented error response, however if the `statements` feature is not enabled, it may also return a blank 404 response.  This endpoint will return a 404 if a trailing slash is included in the request.
     * Retrieve a document
     */
    async documentsRetrieve(requestParameters: DocumentsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDocument> {
        const response = await this.documentsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
