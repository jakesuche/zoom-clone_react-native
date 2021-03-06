import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer } from "@react-navigation/native"
import Navigation  from './Navigation';

export default function App() {
 
  return <Navigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
