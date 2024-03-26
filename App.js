import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import TransactionListScreen from './screens/TransactionListScreen';
import SummaryScreen from './screens/SummaryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="TransactionList" component={TransactionListScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

export default function App() {

  return (
      <NavigationContainer>
        {/* <StatusBar style="auto" /> */}
        <Stack.Navigator>
          <Stack.Screen name="Transactions" component={TabNavigator} />
          <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen}
            options={{
              title: 'Transaction Detail'
            }}
           />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
