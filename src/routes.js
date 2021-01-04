import {
    createAppContainer
  } from 'react-navigation';
  
  import {createStackNavigator} from 'react-navigation-stack'
  
  import Login from './screens/login/index'
  import Register from './screens/register/index'
  import Home from './screens/home/index'
  import PreLogin from './screens/preLogin/index'
  import Extract from './screens/extract/index'
  
  const RootStack = createStackNavigator({
  
  PreLogin: {
    screen: PreLogin,
    navigationOptions: {
      headerShown: false
    }
  }, 
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    }
  },
  Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      }
  },
 Extract: {
    screen:Extract,
    navigationOptions: {
      headerShown: false,
    }
}
  
  });
  
  
  const App = createAppContainer(RootStack);
  
  export default App;
  