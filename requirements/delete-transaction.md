# Delete Transaction

> ## Success

- receive **DELETE** http request on route **/api/transactions/:id**
- fetch **transaction** by **id**
- delete **transaction**
- return **no-content** response (204)

> ## Exceptions

- return **not-found** (404) if **transaction** does not exists

> ## Requests

- **DELETE /api/transactions/:id**

- **:id** is uuid from existing **transaction**

- Response success 204:
```json
(no content)
```
