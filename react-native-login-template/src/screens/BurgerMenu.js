//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
// import all basic components

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './Dashboard';
import Screen2 from './JobDetails';



const screens = {
    Home: {
      screen: Screen1,
      navigationOptions: {
        title: 'GameZone',
      }
    },
    ReviewDetails: {
      screen: Screen2,
      navigationOptions: {
        title: 'Review Details',
      }
    },
  };
  
  // home stack navigator screens
  const BurgerMenu = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 }
    }
  });
  
  export default BurgerMenu;
  