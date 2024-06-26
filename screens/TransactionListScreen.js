import { 
    Text,
    StyleSheet,
    FlatList,
    Pressable
 } from 'react-native';

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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff'
    },
    listItemName: {
        flex: 1,
    },
});

export default function TransactionListScreen({ navigation }) {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        DataStore.getTransactions().then((data) => {
            setTransactions(data);
        });
    }, []);

    return (
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <Pressable
                style={styles.listItem}
                onPress={() => {
                    navigation.navigate('TransactionDetail', { id: item.id });
                }}
            >
                <Text style={styles.listItemName}>{item.merchant}</Text>
                <Text>${item.amount.toFixed(2)}</Text>
            </Pressable>
          )}
        />
    );
}