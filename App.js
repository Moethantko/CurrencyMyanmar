import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenContainer } from 'react-native-screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './screens/Home';
import CalculateScreen from './screens/Calculate';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#fff',
  },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={
        {
          style: {paddingBottom: 15,}, 
          labelStyle: {fontSize: 15,}, 
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calculate" component={CalculateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

