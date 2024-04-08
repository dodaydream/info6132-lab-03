import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';
import DataStore from '../data/data'

const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#fff',
        marginBottom: 4,
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

export default function TransactionCreateScreen({ navigation }) {

    const [merchant, setMerchant] = useState(0);
    const [amount, setAmount] = useState('');
    const [location, setLocation] = useState('');

    const saveTransaction = () => {
        console.log('Save transaction');
        console.log(`Merchant: ${merchant}`);
        console.log(`Amount: ${amount}`);
        console.log(`Location: ${location}`);

        const transaction = {
            merchant,
            amount: parseFloat(amount),
            location,
            date: new Date().toISOString(),
        };

        DataStore.addTransaction(transaction).then((id) => {
            navigation.goBack();
        })
    }

    return (
        <>
            <View style={styles.listItem}>
                <TextInput
                    placeholder="Merchant"
                    onChangeText={(text) => setMerchant(text)}
                />
            </View>

            <View style={styles.listItem}>
                <TextInput
                    placeholder="Amount"
                    onChangeText={(text) => setAmount(text)}
                />
            </View>

            <View style={styles.listItem}>
                <TextInput
                    placeholder="Location"
                    onChangeText={(text) => setLocation(text)}
                />
            </View>

            <Button
                title="Save"
                onPress={() => {
                    saveTransaction();
                }}
            />
        </>
    );
}