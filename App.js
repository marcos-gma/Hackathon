import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RoutesScreen from './screens/RoutesScreen';
import LocationScreen from './screens/LocationScreen';
import CapacityScreen from './screens/CapacityScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Routes">
        <Stack.Screen name="Routes" component={RoutesScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Capacity" component={CapacityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
