import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, Image, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'


import styles from './style';

class Login extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        email: '',
        senha: ''
      }
  }

  login = async () => {
    this.props.navigation.navigate('Home')
    // const { dispatch } = this.props;
    //   await axios.post('/login', this.state).then(response => {
    //     dispatch(Auth(response.data.token));
    //       this.props.navigation.navigate('Home')
    //   }).catch(
    //   )
  }

    cadastrar = () => {
        this.props.navigation.navigate('Register')
    }
    
    render(){
        return(
            <SafeAreaView>
                <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
                    <View style={styles.containerSuperior}>

                        <View style={styles.logo}></View>
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
                            >
                        </TextInput>
                        <TextInput 
                          maxLength={30}
                          onChangeText={senha => this.setState({ senha })}
                          placeholder='*******'
                          secureTextEntry={true}
                          style={styles.estiloInput}
                          value={this.state.senha}
                          placeholderTextColor="#020C28">
                        </TextInput>

                        <View style={styles.containerRecuperarSenha}>
                            <TouchableOpacity onPress={() => this.cadastrar()}>
                                <Text style={styles.textRecuperarSenha}>Recuperar senha?</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={styles.containerInferior}>
                        <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.login()}>
                            <Text style={styles.textoBotao}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.cadastrar()}>
                            <Text style={styles.fontCadastrar}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default connect()(Login);