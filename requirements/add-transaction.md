# Add Transaction

> ## Success

- receive **POST** http request on route **/api/transactions**
- validate **title**, **value**, **type**, **category**
- fetch **category**, if exists use it, else add on DB
- fetch **total**
- if **type** is **outcome**, check if it is less or equal the **total**
- add **transaction** with **creation date** to DB
- return **success** response (200) with **transaction**

> ## Exceptions

- return **bad-request** (400), if:
    - any field are missing
    - **value** is <= 0
    - **type** is not **income** or **outcome**

- return **forbidden** (403) if **type** is **outcome** and **value** is greater than **total**

> ## Requests

- **POST /api/transactions**

- Request body:
```json
{
    "title": "Earnings",
    "value": 3000,
    "type": "income",
    "category": "Eating"
}
```

- Response success 200:
```json
{
    "id": "<uuid>",
    "title": "Earnings",
    "value": 3000,
    "type": "income",
    "created_at": "<date>",
    "category": {
        "id": "<uuid>",
        "title": "Eating",
        "created_at": "<date>"
    }
}
```