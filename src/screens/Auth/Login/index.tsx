import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, LayoutAnimation, UIManager, Platform, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from '../../../components/atoms/Logo';
import DefaultSafeAreaView from '../../../components/atoms/DefaultSafeAreaView';
import TitleText from '../../../components/molecules/text/TitleText';
import SubtitleText from '../../../components/molecules/text/SubtitleText';
import EmailInput from '../../../components/molecules/inputs/EmailInput';
import PasswordInput from '../../../components/molecules/inputs/PasswordInput';
import TextButton from '../../../components/molecules/inputs/TextButton';
import DefaultButton from '../../../components/molecules/inputs/DefaultButton';
import { AuthScreens, AuthStackParamList } from "../../../navigators/Authflow/types";
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions, LoginPayload } from '../../../redux/Auth/types';
import User from '../../../redux/Auth/user';
import { Environment } from '../../../environments/types';
import { RootState } from '../../../redux/Root/states';
import * as AuthService from '../../../services/Auth';
import { SignUpRequest } from '../../../services/Auth/types/signup';
import LoadingOverlay from '../../../components/molecules/LoadingOverlay';
import { LogInRequest } from '../../../services/Auth/types/login';
import VisibilityComponent from '../../../components/atoms/VisibilityComponent';


type LoginScreenNavigationProps = StackNavigationProp<AuthStackParamList, AuthScreens.Login>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    verticalCenter: { justifyContent: 'center'},

    bottom: {
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    },

    cadastreBtn: {
        flex: 1,
        alignSelf: 'stretch',
    }
});

const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props: any) => {
    const {navigation} = props;
    const dispatch = useDispatch();

    const [signUp, setSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const changeLayout = () => {
        setConfirmPassword('');
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        LayoutAnimation.configureNext({
            duration: 300,
            create: {
              type: LayoutAnimation.Types.easeInEaseOut,
              property: LayoutAnimation.Properties.opacity,
            },
            update: { type: LayoutAnimation.Types.easeInEaseOut },
          });
        setSignUp(!signUp);
    }

    const register = () => {
        setIsLoading(true);
        console.warn("signing up " + email + " , " + password);
        AuthService.signUp(new SignUpRequest({
            email: email,
            password: password
        })).then((result) => {
            setIsLoading(false);
            console.warn(result);
        })
        .catch((error) => {
            setIsLoading(false);
            console.warn(error);
        });
    }
    const logIn = () => {
        setIsLoading(true);
        console.warn("logging in " + email + " , " + password);
        AuthService.logIn(new LogInRequest({
            email: email,
            password: password
        })).then((result) => {
            setIsLoading(false);
            console.warn(result);
        })
        .catch((error) => {
            setIsLoading(false);
            Alert.alert(error);
            console.warn(error);
        });
        dispatch({
            type: AuthActions.Login,
            payload: {
                email: email,
                password: password
            }
        });
    }

    const isAuthenticated = useSelector<RootState>((state) => state.auth.isAuthenticated);
    const user:User = useSelector<RootState>((state) => state.auth.user) as User;

    const environment = useSelector<RootState>((state) => state.config.environment) as Environment;

    return (
        <DefaultSafeAreaView>
            <LoadingOverlay visible={isLoading} />
            {
                signUp &&
                <View style={{flex: 0.5}} />
            }
            <View style={{flexDirection: signUp ? 'row-reverse' : 'column', flex: signUp ? 1 : 4}}>
                <View style={[{alignSelf: 'stretch', flex: signUp ? 1 : 4}, styles.center]}>
                    <Logo />
                </View>
                <View style={[{alignSelf: 'stretch', flex: 4}, signUp ? styles.bottom : styles.verticalCenter ]} >
                            {
                                isAuthenticated === true ? 
                                <TitleText>
                                    Bem-vindo {user.name}!
                                </TitleText>
                                :
                                <TitleText>
                                    Pronto para ser o maior { signUp ? "SIGNUP" : "LOGIN"} ?
                                </TitleText>
                            }
                        <SubtitleText>
                            {
                                signUp ? 'Crie sua conta e inicie sua jornada!' : 'Acesse sua conta e inicie sua jornada!' 
                            }
                        </SubtitleText>
                </View>
            </View>
            <View style={{alignSelf: 'stretch', flex: signUp ? 5 : 2}} >
                {
                    signUp &&
                    <View style={[{flex: 3}, styles.bottom, {justifyContent: 'center'}]}>
                        <TitleText
                            fontSize={36}
                        >
                            Cadastre-se
                        </TitleText>
                    </View>
                }
                <View style={{flex: 1}}>
                    <EmailInput 
                        value={email}
                        onChangeText={(v: string) => setEmail(v)}
                    />
                </View>
                <View style={{flex: 1}}>
                    <PasswordInput 
                        value={password}
                        onChangeText={(v: string) => setPassword(v)}
                    />
                </View>
                
                <View style={{flex: signUp ? 1 : 0}}>
                    <VisibilityComponent visible={signUp}>
                            <PasswordInput 
                                value={confirmPassword}
                                placeholder={'Confirmar senha'}
                                onChangeText={(v: string) => setConfirmPassword(v)}
                            />
                    </VisibilityComponent>
                </View>
                <VisibilityComponent visible={signUp}>
                    <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row-reverse'}}>
                        <TextButton onPress={() => console.warn('Recuperar senha!')} title='Recuperar senha?' />
                    </View>
                </VisibilityComponent>
                {
                    signUp &&
                    <View style={{flex: 2}} />
                }
            </View>
            <View style={{alignSelf: 'stretch', flex: 2, flexDirection: 'column'}} >
                <View style={{flex: 1}}></View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                <VisibilityComponent visible={signUp}>
                    <DefaultButton onPress={register} title={'Cadastre-se'} />
                </VisibilityComponent>
                <VisibilityComponent visible={!signUp}>
                    <DefaultButton onPress={logIn} title={'Entrar'} />
                </VisibilityComponent>
                </View>
                <View style={[styles.cadastreBtn, styles.center, {flexDirection: 'row'}]}>
                    <TextButton 
                        onPress={() => { 
                           changeLayout(); 
                        }}
                        fontWeight={'light'}
                        title={ signUp ? 'Já possui uma conta? Logar' : 'Cadastre-se' } 
                    />
                </View>
            </View>
        </DefaultSafeAreaView>
    );
};

export default LoginScreen;