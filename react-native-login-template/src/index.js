import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {LoginScreen} from './screens';
import {HomeScreen,Dashboard} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    Dashboard
    
 
   
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
