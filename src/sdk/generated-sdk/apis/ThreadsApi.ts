/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.309)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  InvalidRequestError,
  MessageCreateRequest,
  MessageCreateResponse,
  MessageResponse,
  MessagesResponse,
  NotFoundError,
  ThreadCreateRequest,
  ThreadResponse,
  ThreadUpdateRequest,
  ThreadUploadPolicyCreateDocRequest,
  ThreadUploadPolicyResponse,
  ThreadsResponse,
  UploadFileError,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    InvalidRequestErrorFromJSON,
    InvalidRequestErrorToJSON,
    MessageCreateRequestFromJSON,
    MessageCreateRequestToJSON,
    MessageCreateResponseFromJSON,
    MessageCreateResponseToJSON,
    MessageResponseFromJSON,
    MessageResponseToJSON,
    MessagesResponseFromJSON,
    MessagesResponseToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    ThreadCreateRequestFromJSON,
    ThreadCreateRequestToJSON,
    ThreadResponseFromJSON,
    ThreadResponseToJSON,
    ThreadUpdateRequestFromJSON,
    ThreadUpdateRequestToJSON,
    ThreadUploadPolicyCreateDocRequestFromJSON,
    ThreadUploadPolicyCreateDocRequestToJSON,
    ThreadUploadPolicyResponseFromJSON,
    ThreadUploadPolicyResponseToJSON,
    ThreadsResponseFromJSON,
    ThreadsResponseToJSON,
    UploadFileErrorFromJSON,
    UploadFileErrorToJSON,
} from '../models/index';

export interface ThreadFilesPoliciesCreateRequest {
    threadUploadPolicyCreateDocRequest: ThreadUploadPolicyCreateDocRequest;
}

export interface ThreadsCreateRequest {
    threadCreateRequest: ThreadCreateRequest;
}

export interface ThreadsListRequest {
    endDate?: Date;
    filter?: string;
    orderBy?: ThreadsListOrderByEnum;
    startDate?: Date;
}

export interface ThreadsMarkReadUpdateRequest {
    uuid: string;
}

export interface ThreadsMessagesListRequest {
    threadUuids: string;
}

export interface ThreadsMessagesRetrieveRequest {
    threadUuid: string;
    uuid: string;
}

export interface ThreadsRetrieveRequest {
    uuid: string;
}

export interface ThreadsUpdateRequest {
    uuid: string;
    threadUpdateRequest?: ThreadUpdateRequest;
}

export interface UserMessagesCreateRequest {
    threadUuids: string;
    messageCreateRequest?: MessageCreateRequest;
}

/**
 * 
 */
export class ThreadsApi extends runtime.BaseAPI {

    /**
     * Creates the payload for a signed request to upload a file directly to S3. Further documentation can be found via the AWS documentation: https://aws.amazon.com/blogs/compute/uploading-to-amazon-s3-directly-from-a-web-or-mobile-application/
     * Create a signed request for uploading a file to S3
     */
    async threadFilesPoliciesCreateRaw(requestParameters: ThreadFilesPoliciesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThreadUploadPolicyResponse>> {
        if (requestParameters['threadUploadPolicyCreateDocRequest'] == null) {
            throw new runtime.RequiredError(
                'threadUploadPolicyCreateDocRequest',
                'Required parameter "threadUploadPolicyCreateDocRequest" was null or undefined when calling threadFilesPoliciesCreate().'
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
            path: `/v1/thread_files/policies/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ThreadUploadPolicyCreateDocRequestToJSON(requestParameters['threadUploadPolicyCreateDocRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadUploadPolicyResponseFromJSON(jsonValue));
    }

    /**
     * Creates the payload for a signed request to upload a file directly to S3. Further documentation can be found via the AWS documentation: https://aws.amazon.com/blogs/compute/uploading-to-amazon-s3-directly-from-a-web-or-mobile-application/
     * Create a signed request for uploading a file to S3
     */
    async threadFilesPoliciesCreate(requestParameters: ThreadFilesPoliciesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThreadUploadPolicyResponse> {
        const response = await this.threadFilesPoliciesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a support message thread for the authenticated user.
     * Create message thread for a user
     */
    async threadsCreateRaw(requestParameters: ThreadsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThreadResponse>> {
        if (requestParameters['threadCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'threadCreateRequest',
                'Required parameter "threadCreateRequest" was null or undefined when calling threadsCreate().'
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
            path: `/v1/threads/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ThreadCreateRequestToJSON(requestParameters['threadCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadResponseFromJSON(jsonValue));
    }

    /**
     * Create a support message thread for the authenticated user.
     * Create message thread for a user
     */
    async threadsCreate(requestParameters: ThreadsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThreadResponse> {
        const response = await this.threadsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List support message threads for the authenticated user.
     * List user\'s message threads
     */
    async threadsListRaw(requestParameters: ThreadsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThreadsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['endDate'] != null) {
            queryParameters['end_date'] = (requestParameters['endDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['orderBy'] != null) {
            queryParameters['order_by'] = requestParameters['orderBy'];
        }

        if (requestParameters['startDate'] != null) {
            queryParameters['start_date'] = (requestParameters['startDate'] as any).toISOString().substring(0,10);
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
            path: `/v1/threads/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadsResponseFromJSON(jsonValue));
    }

    /**
     * List support message threads for the authenticated user.
     * List user\'s message threads
     */
    async threadsList(requestParameters: ThreadsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThreadsResponse> {
        const response = await this.threadsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark the specified support message thread as read.
     * Modify thread mark read
     */
    async threadsMarkReadUpdateRaw(requestParameters: ThreadsMarkReadUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling threadsMarkReadUpdate().'
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
            path: `/v1/threads/{uuid}/mark_read/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Mark the specified support message thread as read.
     * Modify thread mark read
     */
    async threadsMarkReadUpdate(requestParameters: ThreadsMarkReadUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.threadsMarkReadUpdateRaw(requestParameters, initOverrides);
    }

    /**
     * List messages for the specified support message threads. The threads are specified in the path parameters as comma-separated UUIDs. If the thread does not exist, this endpoint will return a 404. Response will include both messages and thread files (i.e. attachments).
     * List messages in a thread
     */
    async threadsMessagesListRaw(requestParameters: ThreadsMessagesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessagesResponse>> {
        if (requestParameters['threadUuids'] == null) {
            throw new runtime.RequiredError(
                'threadUuids',
                'Required parameter "threadUuids" was null or undefined when calling threadsMessagesList().'
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
            path: `/v1/threads/{thread_uuids}/messages/`.replace(`{${"thread_uuids"}}`, encodeURIComponent(String(requestParameters['threadUuids']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessagesResponseFromJSON(jsonValue));
    }

    /**
     * List messages for the specified support message threads. The threads are specified in the path parameters as comma-separated UUIDs. If the thread does not exist, this endpoint will return a 404. Response will include both messages and thread files (i.e. attachments).
     * List messages in a thread
     */
    async threadsMessagesList(requestParameters: ThreadsMessagesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessagesResponse> {
        const response = await this.threadsMessagesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch a specified message on the specified support message thread. This request will not return thread files (i.e. attachments).
     * Retrieve user messages
     */
    async threadsMessagesRetrieveRaw(requestParameters: ThreadsMessagesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageResponse>> {
        if (requestParameters['threadUuid'] == null) {
            throw new runtime.RequiredError(
                'threadUuid',
                'Required parameter "threadUuid" was null or undefined when calling threadsMessagesRetrieve().'
            );
        }

        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling threadsMessagesRetrieve().'
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
            path: `/v1/threads/{thread_uuid}/messages/{uuid}/`.replace(`{${"thread_uuid"}}`, encodeURIComponent(String(requestParameters['threadUuid']))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageResponseFromJSON(jsonValue));
    }

    /**
     * Fetch a specified message on the specified support message thread. This request will not return thread files (i.e. attachments).
     * Retrieve user messages
     */
    async threadsMessagesRetrieve(requestParameters: ThreadsMessagesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageResponse> {
        const response = await this.threadsMessagesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch a specified support message thread.
     * Retrieve a thread
     */
    async threadsRetrieveRaw(requestParameters: ThreadsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThreadResponse>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling threadsRetrieve().'
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
            path: `/v1/threads/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadResponseFromJSON(jsonValue));
    }

    /**
     * Fetch a specified support message thread.
     * Retrieve a thread
     */
    async threadsRetrieve(requestParameters: ThreadsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThreadResponse> {
        const response = await this.threadsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a specified support message thread as closed or open.
     * Update user\'s thread
     */
    async threadsUpdateRaw(requestParameters: ThreadsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThreadResponse>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling threadsUpdate().'
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
            path: `/v1/threads/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ThreadUpdateRequestToJSON(requestParameters['threadUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThreadResponseFromJSON(jsonValue));
    }

    /**
     * Mark a specified support message thread as closed or open.
     * Update user\'s thread
     */
    async threadsUpdate(requestParameters: ThreadsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThreadResponse> {
        const response = await this.threadsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a message on the specified support message thread as the authenticated user.   Define either `body` or `url` in the request to create a message or attachment, respectively.
     * Create a message in a thread
     */
    async userMessagesCreateRaw(requestParameters: UserMessagesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageCreateResponse>> {
        if (requestParameters['threadUuids'] == null) {
            throw new runtime.RequiredError(
                'threadUuids',
                'Required parameter "threadUuids" was null or undefined when calling userMessagesCreate().'
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
            path: `/v1/threads/{thread_uuids}/messages/`.replace(`{${"thread_uuids"}}`, encodeURIComponent(String(requestParameters['threadUuids']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MessageCreateRequestToJSON(requestParameters['messageCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageCreateResponseFromJSON(jsonValue));
    }

    /**
     * Create a message on the specified support message thread as the authenticated user.   Define either `body` or `url` in the request to create a message or attachment, respectively.
     * Create a message in a thread
     */
    async userMessagesCreate(requestParameters: UserMessagesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageCreateResponse> {
        const response = await this.userMessagesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ThreadsListOrderByEnum = {
    CreatedAt: 'created_at',
    UpdatedAt: 'updated_at'
} as const;
export type ThreadsListOrderByEnum = typeof ThreadsListOrderByEnum[keyof typeof ThreadsListOrderByEnum];
