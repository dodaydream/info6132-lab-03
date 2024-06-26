import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import DataStore from "../data/data";

const styles = StyleSheet.create({
  cover: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  amount: {
    fontSize: 24,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  listItemName: {
    flex: 1,
  },
});

export default function TransactionDetailScreen({ route }) {
  const [data, setData] = useState({
    amount: 0,
    merchant: "",
    location: "",
    date: new Date().toISOString(),
  });

  useEffect(() => {
    const id = route.params.id;

    console.log("TransactionDetailScreen id: ", route);

    DataStore.getTransactionById(id).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <View style={styles.cover}>
        <Text style={styles.amount}>${data.amount.toFixed(2)}</Text>
        <Text>{data.merchant}</Text>
        <Text>{data.location}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listItemName}>Transaction Date</Text>
        <Text>{new Date(data.date).toDateString()}</Text>
      </View>
    </>
  );
}
