import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from "../../screens/Auth/Welcome";
import LoginScreen from "../../screens/Auth/Login";
import { AuthScreens, AuthStackParamList } from "./types";

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthflowNavigator: React.FunctionComponent = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name={AuthScreens.Welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={AuthScreens.Login} component={LoginScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthflowNavigator;