import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './screens/Read';
import WriteScreen from './screens/Write';

export default class App extends React.Component {
  render(){
    return (
        <AppContainer/>
    );
  }
 }

const tabContainer = createBottomTabNavigator({
  Read:{screen:ReadScreen},
  Write:{screen:WriteScreen},
})

const AppContainer = createAppContainer(tabContainer)