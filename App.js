/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  TextInput,
  Image,
  StyleSheet,
  Text,
  
  View,
} from 'react-native';
import SplashScreen from './Src/SplashScreen';
import Start from './Src/Start';
import Login from './Src/Login';
import Home from './Src/Home';
import Details from './Src/Details';
import Navbar from './Src/AddtoBasket/Navbar';
import Basket from './Src/Basket';


function App() {

const Stack=createNativeStackNavigator();

return(
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='SplashScreen' component={SplashScreen} />
    <Stack.Screen name='Start' component={Start} />
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Details' component={Details} />
    <Stack.Screen name='Basket' component={Basket} />

    </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
