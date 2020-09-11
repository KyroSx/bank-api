# Fetch Transactions

> ## Success

- receive **GET** http request on route **/api/transactions**
- fetch **transactions** with its own **category**
- fetch the **balance**:
    - sum of incomes and outcomes
    - total of incomes
    - total of outcomes

- return **success** response (200) with **transactions** and **balance**

> ## Requests

- **GET /api/transactions**


- Response success 200:
```json
{
    "transactions": [
        {
            "id": "<uuid>",
            "title": "Earnings",
            "value": 1000,
            "type": "income",
            "created_at": "<date>",
            "category": {
                "id": "<uuid>",
                "title": "Side Projects",
                "created_at": "<date>"
            }
        },
        {
            "id": "<uuid>",
            "title": "aiqfome",
            "value": 1000,
            "type": "outcome",
            "created_at": "<date>",
            "category": {
                "id": "<uuid>",
                "title": "Eating",
                "created_at": "<date>"
            }
        }
    ],
    "balance": {
        "income": 1000,
        "outcomes": 1000,
        "total": 0
    }
}
```