import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from '../../../components/atoms/Logo';
import DefaultText from '../../../components/atoms/DefaultText';
import DefaultSafeAreaView from '../../../components/atoms/DefaultSafeAreaView';
import TitleText from '../../../components/molecules/text/TitleText';
import SubtitleText from '../../../components/molecules/text/SubtitleText';
import DefaultTextInput from '../../../components/atoms/DefaultTextInput';
import { Regex } from '../../../components/regex';
import EmailInput from '../../../components/molecules/inputs/EmailInput';
import PasswordInput from '../../../components/molecules/inputs/PasswordInput';
import TextButton from '../../../components/molecules/inputs/TextButton';
import DefaultButton from '../../../components/molecules/inputs/DefaultButton';
import { AuthScreens, AuthStackParamList } from "../../../navigators/Authflow/types";

type LoginScreenNavigationProps = StackNavigationProp<AuthStackParamList, AuthScreens.Login>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
}

const styles = StyleSheet.create({
    marginBottom10: {
        // marginBottom: '10px'
    },
    marginBottom30: {
        // marginBottom: '30px'
    },

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

const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props) => {
    const { navigation } = props;
    const [signUp, setSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const changeLayout = () => {
        setConfirmPassword('');
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setSignUp(!signUp);
    }

    return (
        <DefaultSafeAreaView>
            {
                signUp &&
                <View style={{flex: 0.5}} />
            }
            <View style={{flexDirection: signUp ? 'row-reverse' : 'column', flex: signUp ? 1 : 4}}>
                <View style={[{alignSelf: 'stretch', flex: signUp ? 1 : 4}, styles.center]}>
                    <Logo />
                </View>
                <View style={[{alignSelf: 'stretch', flex: 4}, signUp ? styles.bottom : styles.verticalCenter ]} >
                        <TitleText>
                            Pronto para ser o maior vencedor?
                        </TitleText>
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
                {
                    signUp ? 
                    <View style={{flex: 1}}>
                        <PasswordInput 
                            value={confirmPassword}
                            placeholder={'Confirmar senha'}
                            onChangeText={(v: string) => setConfirmPassword(v)}
                        />
                    </View>
                        :
                    <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row-reverse'}}>
                        <TextButton onPress={() => console.warn('Recuperar senha!')} title='Recuperar senha?' />
                    </View>
                }
                {
                    signUp &&
                    <View style={{flex: 2}} />
                }
            </View>
            <View style={{alignSelf: 'stretch', flex: 2, flexDirection: 'column'}} >
                <View style={{flex: 1}}></View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <DefaultButton onPress={() => console.warn('Entrar!')} title={ signUp ? 'Cadastre-se' : 'Entrar' } />
                </View>
                <View style={[styles.cadastreBtn, styles.center, {flexDirection: 'row'}]}>
                    <TextButton 
                        onPress={() => { 
                           changeLayout(); 
                        }}
                        fontWeight={'bold'}
                        title={ signUp ? 'Já possui uma conta? Logar' : 'Cadastre-se' } 
                    />
                </View>
            </View>
        </DefaultSafeAreaView>
    );
};

export default LoginScreen;