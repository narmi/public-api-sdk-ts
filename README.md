# Getting started 
1. Setup .env file with CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, AUTH_URL, API_URL, PORT
2. Run `npm run build; npm start`
3. Navigate to http://localhost:3000/login
4. Login to Narmi sandbox as `testuser`
5. Use index page to view user account information.

# Understanding How it Works

The generated API creates a series of classes representing each *tag* of the documenation at https://online.sandbox.narmi.dev/v1/docs as an API. For instance, https://online.sandbox.narmi.dev/v1/docs#tag/accounts becomes: 

```typescript
import * as publicApiSDK from './public-api-sdk/index';
let apiClass = publicApiSDK.AccountsApi
```

Each API must be provided with a configuration object when instantiated for authentication purposes. A utility has been defined at `public-api-sdk/src/utils.ts` to make this easier:

```typescript
import * as utils from "./utils"
let api = new publicApiSDK.AccountsApi(utils.getConfiguration(access_token, header_secret))
```

Each API method is defined to represent an operation id from the documentation, so https://online.sandbox.narmi.dev/v1/docs#tag/accounts/operation/accounts_list becomes `accountsList`:

```typescript
let response = await api.accountsList()
```

Responses will be promises resolving to typed data structures, allowing typescript compatible linters to assist you with interacting with them. In the event of an error response, the SDK will throw an error instead of returning the unadultered response, so it's best to try/catch:
```typescript
  try {
    let response = await api.accountsRetrieve({"uuid": req.params.accountId})
    res.render("account", response)
  } catch(e) {
    utils.handleError(e, res)
  }
```

These examples are taken from `public-api-sdk/index.ts`, which powers the introductory application. 

## API Rubric
| Operation ID                               | SDK Verified | Schemathesis Verified | Notes/Considerations |
|--------------------------------------------|--------------|-----------------------|----------------------|
| account_balances_list                      | 🟢           | 🟢                    |                      |
| account_balances_retrieve                  | 🌕           | 🌕                    |                      |
| accounts_list                              | 🟢           | 🟢                    |                      |
| accounts_create                            | 🌕           | 🌕                    |                      |
| user_transactions_list                     | 🌕           | 🌕                    |                      |
| accounts_documents_retrieve                | 🌕           | 🌕                    |                      |
| accounts_holds_retrieve                    | 🌕           | 🌕                    |                      |
| accounts_stops_retrieve                    | 🌕           | 🌕                    |                      |
| accounts_stops_create                      | 🌕           | 🌕                    |                      |
| accounts_transactions_download_retrieve    | 🌕           | 🌕                    |                      |
| accounts_retrieve                          | 🟢           | 🟢                    |                      |
| accounts_update                            | 🌕           | 🌕                    |                      |
| accounts_destroy                           | 🌕           | 🌕                    |                      |
| account_verify                             | 🌕           | 🌕                    |                      |
| accounts_withdrawals_create                | 🌕           | 🌕                    |                      |
| account_verify_instant                     | 🌕           | 🌕                    |                      |
| automatic_savings_enrollment_retrieve      | 🌕           | 🟢                    |                      |
| automatic_savings_enrollment_create        | 🌕           | 🌕                    |                      |
| automatic_savings_enrollment_destroy       | 🌕           | 🌕                    |                      |
| cards_list                                 | 🌕           | 🌕                    |                      |
| cards_retrieve                             | 🌕           | 🌕                    |                      |
| cards_update                               | 🌕           | 🌕                    |                      |
| cards_address_retrieve                     | 🌕           | 🌕                    |                      |
| cards_lock_create                          | 🌕           | 🌕                    |                      |
| cards_replace_card_create                  | 🌕           | 🌕                    |                      |
| cards_unlock_create                        | 🌕           | 🌕                    |                      |
| deposits_list                              | 🌕           | 🟢                    |                      |
| deposits_create                            | 🌕           | 🌕                    |                      |
| deposits_retrieve                          | 🌕           | 🌕                    |                      |
| documents_list                             | 🌕           | 🟢                    |                      |
| documents_retrieve                         | 🌕           | 🌕                    |                      |
| enroll_create                              | 🌕           | 🌕                    |                      |
| enroll_verify_create                       | 🌕           | 🌕                    |                      |
| enrollments_create                         | 🌕           | 🌕                    |                      |
| fedwire_templates_list                     | 🌕           | 🌕                    |                      |
| fedwire_templates_create                   | 🌕           | 🌕                    |                      |
| fedwire_templates_retrieve                 | 🌕           | 🌕                    |                      |
| fedwire_templates_update                   | 🌕           | 🌕                    |                      |
| fedwire_templates_destroy                  | 🌕           | 🌕                    |                      |
| GET Current Institution                    | 🌕           | 🌕                    |                      |
| retrieve_institution_Name                  | 🌕           | 🌕                    |                      |
| me_list                                    | 🌕           | 🟢                    |                      |
| mfa_list                                   | 🌕           | 🟢                    |                      |
| mfa_destroy                                | 🌕           | 🌕                    |                      |
| payees_list                                | 🌕           | 🟢                    |                      |
| payees_create                              | 🌕           | 🌕                    |                      |
| payees_retrieve                            | 🌕           | 🌕                    |                      |
| payees_update                              | 🌕           | 🌕                    |                      |
| payees_destroy                             | 🌕           | 🌕                    |                      |
| payments_list                              | 🌕           | 🟢                    |                      |
| payments_create                            | 🌕           | 🌕                    |                      |
| payments_destroy                           | 🌕           | 🌕                    |                      |
| ping_retrieve                              | 🌕           | 🌕                    |                      |
| subscriptions_list                         | 🌕           | 🟢                    |                      |
| subscriptions_create                       | 🌕           | 🌕                    |                      |
| subscriptions_retrieve                     | 🌕           | 🌕                    |                      |
| subscriptions_update                       | 🌕           | 🌕                    |                      |
| subscriptions_partial_update               | 🌕           | 🌕                    |                      |
| subscriptions_destroy                      | 🌕           | 🌕                    |                      |
| support_info_retrieve                      | 🌕           | 🟢                    |                      |
| teams_list                                 | 🌕           | 🟢                    |                      |
| thread_files_policies_create               | 🌕           | 🌕                    |                      |
| threads_retrieve                           | 🌕           | 🌕                    |                      |
| threads_create                             | 🌕           | 🌕                    |                      |
| user_messages_list                         | 🌕           | 🌕                    |                      |
| user_messages_create                       | 🌕           | 🌕                    |                      |
| user_messages_retrieve                     | 🌕           | 🌕                    |                      |
| user_threads_retrieve                      | 🌕           | 🌕                    |                      |
| user_threads_update                        | 🌕           | 🌕                    |                      |
| threads_mark_read_update                   | 🌕           | 🌕                    |                      |
| user_transactions_list_2                   | 🌕           | 🌕                    |                      |
| transactions_retrieve                      | 🌕           | 🌕                    |                      |
| transactions_update                        | 🌕           | 🌕                    |                      |
| transactions_images_retrieve               | 🌕           | 🌕                    |                      |
| transfers_list                             | 🌕           | 🌕                    |                      |
| transfers_create                           | 🌕           | 🌕                    |                      |
| scheduled_transfer_list                    | 🌕           | 🌕                    |                      |
| transfers_scheduled_create                 | 🌕           | 🌕                    |                      |
| transfers_scheduled_update                 | 🌕           | 🌕                    |                      |
| transfers_scheduled_destroy                | 🌕           | 🌕                    |                      |
| users_list                                 | 🌕           | 🌕                    |                      |
| users_retrieve                             | 🌕           | 🌕                    |                      |
| users_update                               | 🌕           | 🌕                    |                      |
| users_enrollment_code_create               | 🌕           | 🌕                    |                      |
| users_enrollment_complete_create           | 🌕           | 🌕                    |                      |
| users_estatements_create                   | 🌕           | 🌕                    |                      |
| users_estatements_destroy                  | 🌕           | 🌕                    |                      |
| wire_recipients_list                       | 🌕           | 🌕                    |                      |
| wire_recipients_create                     | 🌕           | 🌕                    |                      |
| wire_recipients_retrieve                   | 🌕           | 🌕                    |                      |
| wire_recipients_update                     | 🌕           | 🌕                    |                      |
| wire_recipients_partial_update             | 🌕           | 🌕                    |                      |
| wire_recipients_destroy                    | 🌕           | 🌕                    |                      |
| wires_fedwire_templates_create             | 🌕           |                       |                      |
