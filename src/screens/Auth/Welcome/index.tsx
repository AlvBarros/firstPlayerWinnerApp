import React from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, View, Button, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AuthScreens, AuthStackParamList } from "../../../navigators/Authflow/types";

type WelcomeScreenNavigationProps = StackNavigationProp<AuthStackParamList, AuthScreens.Welcome>;

interface WelcomeScreenProps {
    navigation: WelcomeScreenNavigationProps;
}

const image = require('./assets/welcome.png');
import DefaultButton from "../../../components/molecules/inputs/DefaultButton";
const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = (props) => {
    const { navigation } = props;

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={image} style={{flex: 1}}>
                <View style={{width: '100%', height: '100%', position: 'absolute', bottom: 0}}>
                    <LinearGradient 
                        style={{position: 'absolute', bottom: 0, width: '100%', height: '20%'}} 
                        colors={['transparent', 'black', 'black']}>
                    </LinearGradient>
                </View>
                <View style={{width: '100%', height: '100%', justifyContent: 'flex-end', padding: '10%', position: 'absolute', bottom: 0}}>
                        <View style={{width: '100%' }}>
                            <DefaultButton
                                title="Entrar"
                                onPress={()=>navigation.navigate(AuthScreens.Login)}
                            />
                        </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default WelcomeScreen;