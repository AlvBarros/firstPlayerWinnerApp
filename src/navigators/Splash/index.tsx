import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "../../screens/Splash";
import { SplashScreens, SplashParamList} from "./types";

const SplashStack = createStackNavigator<SplashParamList>();

const SplashNavigator: React.FunctionComponent = () => {
    return (
        <SplashStack.Navigator headerMode="none">
            <SplashStack.Screen name={SplashScreens.Splash} component={SplashScreen}/>
        </SplashStack.Navigator>
    )
}

export default SplashNavigator;