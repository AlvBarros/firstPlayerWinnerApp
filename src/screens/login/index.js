import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, Image, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import CryptoLib from '../../assets/CryptoLib/cryptoLib'

import styles from './style';

class Login extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        email: '',
        senha: '',
        logoVisibility: true
      }
  }

  logar = async () => {
    this.props.navigation.navigate('Home');
  
  }

    cadastrar = () => {
        this.props.navigation.navigate('Register')
    }
    ocultar = () => {
        this.setState({logoVisibility: false })
    }
    
    render(){
        return(
                <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"} >
                    <SafeAreaView style={styles.containerGeral}>
                        <View style={styles.containerSuperior}>
                            {this.state.logoVisibility ?
                                <View style={styles.containerLogo}>
                                <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
                                </View> :
                                <View></View>}
                            
                            <View style={styles.viewTexto}>
                                <Text style={styles.texto}>Pronto para ser o</Text>
                                <Text style={styles.texto}>maior vencedor?</Text>
                                <Text>Acesse sua conta e inicie sua jornada!</Text>
                            </View>
                            <TextInput 
                                maxLength={30}
                                onChangeText={email => this.setState({ email })}
                                placeholder='Email'
                                style={styles.estiloInput}
                                value={this.state.email}
                                placeholderTextColor="#020C28"
                                onFocus={() => this.setState({logoVisibility: false })}
                                onBlur={() => this.setState({logoVisibility: true })}
                                >
                            </TextInput>
                            <TextInput 
                                maxLength={30}
                                onChangeText={senha => this.setState({ senha })}
                                placeholder='*******'
                                secureTextEntry={true}
                                style={styles.estiloInput}
                                value={this.state.senha}
                                placeholderTextColor="#020C28"
                                onFocus={() => this.setState({logoVisibility: false })}
                                onBlur={() => this.setState({logoVisibility: true })}
                                >
                            </TextInput>

                            <View style={styles.containerRecuperarSenha}>
                                <TouchableOpacity onPress={() => this.cadastrar()}>
                                    <Text style={styles.textRecuperarSenha}>Recuperar senha?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerInferior}>
                            <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.logar()}>
                                <Text style={styles.textoBotao}>Entrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.cadastrar()}>
                                <Text style={styles.fontCadastrar}>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </KeyboardAvoidingView>
        )
    }
}

export default connect()(Login);