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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { addDoc, collection, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqS09pPHbs60_8U4x8SmsvLtCAX-NA97M",
  authDomain: "info6132-lab04-1ae79.firebaseapp.com",
  projectId: "info6132-lab04-1ae79",
  storageBucket: "info6132-lab04-1ae79.appspot.com",
  messagingSenderId: "201426857098",
  appId: "1:201426857098:web:d5e6eb449d7d7024655173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
    addTransaction: (transaction) => {
        return addDoc(collection(db, 'transactions'), transaction).then((docRef) => {
            return docRef.id;
        })
    },
    getTransactionById: (id) => {
        return getDoc(doc(db, 'transactions', id)).then((doc) => {
            return doc.data();
        })
    },
    getTransactions: () => {
        return getDocs(collection(db, 'transactions')).then((querySnapshot) => {
            let transactions = [];
            querySnapshot.forEach((doc) => {
                transactions.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            return transactions;
        })
    },
    getTransactionCount: () => {
        return getDocs(collection(db, 'transactions')).then((querySnapshot) => {
            return querySnapshot.size;
        });
    },
    getTransactionTotal: () => {
        // previous code without firebase: data.reduce((total, transaction) => total + transaction.amount, 0)
        return getDocs(collection(db, 'transactions')).then((querySnapshot) => {
            let total = 0;
            querySnapshot.forEach((doc) => {
                total += doc.data().amount;
            });
            return total;
        });
    },
    getHighSpending: async () => {
        // old code
        // return data.reduce((max, transaction) => max.amount > transaction.amount ? max : transaction, data[0]);

        const data = await getDocs(collection(db, 'transactions')).then((querySnapshot) => {
            let maxObj = null;
            let maxAmount = Number.MIN_VALUE;
            querySnapshot.forEach((doc) => {
                if (doc.data().amount > maxAmount) {
                    maxAmount = doc.data().amount;
                    maxObj = doc.data();
                }
            });
            return maxObj;
        })

        console.log("high spending", data);
        
        return data ?? {
            "id": 0,
            "amount": 0,
            "location": "",
            "merchant": "",
            "date": ""
        }
    },
    getLowSpending: async () => {
        // old code
        // return data.reduce((min, transaction) => min.amount < transaction.amount ? min : transaction, data[0]);

        const data = await getDocs(collection(db, 'transactions')).then((querySnapshot) => {
            let minObj = null;
            let minAmount = Number.MAX_VALUE;
            querySnapshot.forEach((doc) => {
                if (doc.data().amount < minAmount) {
                    minAmount = doc.data().amount;
                    minObj = doc.data();
                }
            });
            return minObj;
        }) 

        console.log("low spending", data);
        
        return data ?? {
            "id": 0,
            "amount": 0,
            "location": "",
            "merchant": "",
            "date": ""
        }
    }
}