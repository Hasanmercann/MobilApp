import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../../screens/LoginScreen';
import MenuScreen from '../../screens/MenuScreen';
import AboutScreen from '../../screens/AboutScreen';
import MasaSecScreen from '../../screens/MasaSecScreen';
import KitapSecScreen from '../../screens/KitapSecScreen';
import AdminScreen from '../../screens/AdminScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="MasaSec" component={MasaSecScreen} />
        <Stack.Screen name="KitapSec" component={KitapSecScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
