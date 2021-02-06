import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthflowNavigator from './src/navigators/Authflow';
import { Provider, useDispatch } from 'react-redux';
import SplashNavigator from './src/navigators/Splash';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStore } from './src/redux/Root/store';

const App: React.FunctionComponent<any> = (props:any) => {
  const StackNavigator = createStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={RootStore}>
        <StackNavigator.Navigator headerMode="none">
          <StackNavigator.Screen name="Splash" component={SplashNavigator} />
          <StackNavigator.Screen name="Authflow" component={AuthflowNavigator} />
        </StackNavigator.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;