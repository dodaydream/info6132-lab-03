import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import TransactionListScreen from './screens/TransactionListScreen';
import TransactionCreateScreen from './screens/TransactionCreateScreen';
import SummaryScreen from './screens/SummaryScreen';
import { useNavigation } from '@react-navigation/native';

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

const StackNavigator = () => {

  const navigation = useNavigation();

  const navigateToCreate = () => {
    navigation.navigate('TransactionCreate');
  };

  return (
        <Stack.Navigator>
          <Stack.Screen name="Transactions" component={TabNavigator} 
            options={{
              title: 'Transactions',
              headerRight: () => (
                <Button
                  onPress={navigateToCreate}
                  title="Info"
                  color="#00cc00"
                />
              ),  
            }}
          />

          <Stack.Screen name="TransactionCreate" component={TransactionCreateScreen} 
            options={{
              title: 'Create Transaction'
            }}
          />

          <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen}
            options={{
              title: 'Transaction Detail'
            }}
           />
        </Stack.Navigator>
  )
};

export default function App() {

  return (
      <NavigationContainer>
        <StackNavigator />
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
