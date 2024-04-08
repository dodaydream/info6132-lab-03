import { Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import DataStore from '../data/data';

const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#fff'
    },
    listItemName: {
        flex: 1,
    },
    listSection: {
        backgroundColor: '#f9f9f9',
        padding: 16,
        paddingTop: 2,
        paddingBottom: 2,
    },
});

export default function SummaryScreen() {

    const [transactionCount, setTransactionCount] = useState(0);
    const [transactionTotal, setTransactionTotal] = useState(0);

    const [highSpending, setHighSpending] = useState({ merchant: '', amount: 0 });
    const [lowSpending, setLowSpending] = useState({ merchant: '', amount: 0 });

    useEffect(() => {
        DataStore.getTransactionCount().then((count) => {
            setTransactionCount(count);
        });

        DataStore.getTransactionTotal().then((total) => {
            setTransactionTotal(total);
        });

        DataStore.getHighSpending().then((high) => {
            setHighSpending(high);
        });

        DataStore.getLowSpending().then((low) => {
            setLowSpending(low);
        });
    }, []);

    return (
        <View>
            <View style={styles.listItem}>
                <Text style={styles.listItemName}>Transactions</Text>
                <Text>{transactionCount}</Text>
            </View>

            <View style={styles.listItem}>
                <Text style={styles.listItemName}>Balance</Text>
                <Text>${transactionTotal}</Text>
            </View>

            <Text style={styles.listSection}>High Spending</Text>

            <View style={styles.listItem}>
                <Text style={styles.listItemName}>{highSpending.merchant}</Text>
                <Text>${highSpending.amount.toFixed(2)}</Text>
            </View>

            <Text style={styles.listSection}>Low Spending</Text>

            <View style={styles.listItem}>
                <Text style={styles.listItemName}>{lowSpending.merchant}</Text>
                <Text>${lowSpending.amount.toFixed(2)}</Text>
            </View>
        </View>
    );
}