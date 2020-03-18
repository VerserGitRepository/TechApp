import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {LoginScreen} from './screens';
import {HomeScreen,Dashboard,BurgerMenu,scanbarcodeApp} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    Dashboard,
    BurgerMenu,
    scanbarcodeApp
 
   
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
