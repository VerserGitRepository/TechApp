
import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {Screen1} from './Dashboard';
import {Screen2} from './JobDetails';
import { Screen4} from './LoginScreen';
import {Screen3} from './SSNLookUp';

var userId;
var theNavigation;

class BurgerMenu extends Component {
   
  toggleDrawer = ({theNavigation}) => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
    //alert(theNavigation);
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Dashboard_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: <BurgerMenu navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const JObDetails_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Job Details',
      headerLeft: <BurgerMenu navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SSNLookup_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'SSNLookup',
      headerLeft: <BurgerMenu navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Login_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
      headerLeft: <BurgerMenu navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: Dashboard_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Dashboard',
    },
  },
  Screen2: {
    //Title
    screen: JObDetails_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Job Details',
    },
  },
  Screen3: {
    //Title
    screen: SSNLookup_StackNavigator,
    navigationOptions: {
      drawerLabel: 'SSNLookUp',
    },
  },
  Screen4: {
    //Title
    screen: Login_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Login',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);