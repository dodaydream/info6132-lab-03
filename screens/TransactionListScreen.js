import { 
    Text,
    StyleSheet,
    FlatList,
    Pressable
 } from 'react-native';

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
    const data = DataStore.getTransactions();

    return (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
                style={styles.listItem}
                onPress={() => {
                    navigation.navigate('TransactionDetail', { id: item.id });
                }}
            >
                <Text style={styles.listItemName}>{item.merchant}</Text>
                <Text>${item.amount}</Text>
            </Pressable>
          )}
        />
    );
}