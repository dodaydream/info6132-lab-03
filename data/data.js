const data = [
    {
        "id": 1,
        "amount": 5.00,
        "location": "Toronto, ON",
        "merchant": "Starbucks",
        "date": "2021-05-01T12:00:00Z"
    },
    {
        "id": 2,
        "amount": 10.00,
        "location": "Toronto, ON",
        "merchant": "Tim Hortons",
        "date": "2021-05-02T12:00:00Z"
    },
    {
        "id": 3,
        "amount": 15.19,
        "location": "Toronto, ON",
        "merchant": "McDonalds",
        "date": "2021-05-03T12:00:00Z"
    },
    {
        "id": 4,
        "amount": 20.08,
        "location": "Toronto, ON",
        "merchant": "Burger King",
        "date": "2021-05-04T12:00:00Z"
    },
    {
        "id": 5,
        "amount": 1399.00,
        "location": "Toronto, ON",
        "merchant": "Apple Store",
        "date": "2021-05-05T12:00:00Z"
    },
    {
        "id": 6,
        "amount": 25.99,
        "location": "Toronto, ON",
        "merchant": "Subway",
        "date": "2021-05-06T12:00:00Z"
    }
]

export default {
    getTransactionById: (id) => {
        return data.find(transaction => transaction.id === id);
    },
    getTransactions: () => {
        return data;
    },
    getTransactionCount: () => {
        return data.length;
    },
    getTransactionTotal: () => {
        return data.reduce((total, transaction) => total + transaction.amount, 0)
    },
    getHighSpending: () => {
        return data.reduce((max, transaction) => max.amount > transaction.amount ? max : transaction, data[0]);
    },
    getLowSpending: () => {
        return data.reduce((min, transaction) => min.amount < transaction.amount ? min : transaction, data[0]);
    }
}