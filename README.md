# Demo - Errors and exceptions handling

## Create a payment - CURL

```shell
curl --location --request POST 'http://localhost:3000/api/payments' \
--header 'Content-Type: application/json' \
--data-raw '{
    "invoiceNumber": "IN-987100",
    "paymentMethod": "MERCADO_PAGO",
    "amount": 1100
}'
```
