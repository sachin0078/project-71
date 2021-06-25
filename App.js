
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigtion'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer />
  );
}
}
const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: WriteStoryScreen },
  WriteStory: {screen: ReadStoryScreen},
  
})
const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
