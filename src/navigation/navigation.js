import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../../screens/LoginScreen';
import MenuScreen from '../../screens/MenuScreen';
import AsdScreen from '../../screens/AsdScreen';
import About from '../../screens/About';

const Stack = createStackNavigator();

export default function Navigation() {5
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Asd" component={AsdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
 