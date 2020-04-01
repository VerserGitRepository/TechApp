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
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './Dashboard';
import Screen2 from './JobDetails';
import Screen3 from './LoginScreen';
import LoginScreen from './LoginScreen';
import { HomeScreen } from '.';
var userId;
var theNavigation;



const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
    },
  },
  Screen2: {
    //Title
    screen: JobDetails,
    navigationOptions: {
      drawerLabel: 'Job Details',
    },
  },
  Screen3: {
    //Title
    screen: LoginScreen,
    navigationOptions: {
      drawerLabel: 'Login',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);