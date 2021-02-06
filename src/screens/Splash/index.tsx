import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SplashParamList, SplashScreens } from '../../navigators/Splash/types';
import DefaultSafeAreaView from '../../components/atoms/DefaultSafeAreaView';
import Logo from '../../components/atoms/Logo';
import { Provider, useDispatch } from 'react-redux';
import { ConfigActions, ConfigPayload } from '../../redux/Config/types';
import { Environments } from '../../environments/types';
import { ConfigStore } from '../../redux/Config/store';
import { useFonts, 
    Poppins_600SemiBold, 
    Poppins_300Light, 
    Poppins_400Regular,
    Poppins_200ExtraLight,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins';
import LoadingIcon from '../../components/atoms/LoadingIcon';

type SplashScreenNavigationProps = StackNavigationProp<SplashParamList, SplashScreens.Splash>;

interface SplashScreenProps {
    navigation: SplashScreenNavigationProps;
}

const styles = StyleSheet.create({
    logoContainer: {
        height: Dimensions.get('window').height*0.2
    },
    center: {
        justifyContent: 'center',
        height: '100%'
    },
    container: {
        flex: 4,
        justifyContent: 'space-evenly'
    }
});

const SplashScreen: React.FunctionComponent<SplashScreenProps> = (props: any) => {
    const {navigation} = props;
    
    const navigate = async () => {
        Promise.all([
            new Promise((resolve) => {
                resolve(useFonts({
                    Poppins_600SemiBold,
                    Poppins_300Light,
                    Poppins_400Regular,
                    Poppins_200ExtraLight,
                    Poppins_700Bold
                }));
            }),
            new Promise((resolve) => {
                resolve(useDispatch()({
                    type: ConfigActions.SetEnvironment,
                    payload: new ConfigPayload(Environments.HEROKU)
                }));
            }),
            new Promise((resolve) => { //! Apenas para validar SplashScreen
                setTimeout(()=>{
                    resolve(true);
                }, 1000)
            }),
        ]).then((value) => {
            navigation.navigate('Authflow');
        });
    }
    navigate();

    return (
        <Provider store={ConfigStore}>
            <DefaultSafeAreaView>
                <View style={styles.center}>
                    <View style={{flex: 3}}/>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Logo />
                        </View>
                        <LoadingIcon />
                    </View>
                    <View style={{flex: 3}}/>
                </View>
            </DefaultSafeAreaView>
        </Provider>
    );
}

export default SplashScreen;