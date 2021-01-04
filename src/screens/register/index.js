import React from 'react';
import { SafeAreaView, Image, View, TextInput,
TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import axios from '../../services/api';

import styles from './style'

class Register extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        nome: '',
        nascimento: '',
        email: '',
        senha: '',
        confirmarSenha: ''
      }
  }

  cadastrar = async () => {
    axios.post('/users/cadastro', this.state).then(res => {
      this.props.navigation.navigate('Login')
    })
  }

  logar = () => {
    this.props.navigation.navigate('Login')
  }

  render(){
    return(
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.containerGeral}>
          <View style={styles.containerSuperior}>
            <View style={styles.viewTexto}>
              <Text style={styles.texto}>Pronto para ser o</Text>
              <Text style={styles.texto}>maior vencedor?</Text>
              <Text>Crie sua conta e inicie sua jornada!</Text>
            </View>
          </View>
          <View style={styles.containerCentral}>
          <Text style={{color: '#020C28', fontWeight: '600', fontSize: 40}}>Cadastre-se</Text>
            <TextInput 
              maxLength={30}
              onChangeText={nome => this.setState({ nome })}
              placeholder='Nome'
              style={styles.estiloInput}
              value={this.state.nome}
              placeholderTextColor="#020C28">
            </TextInput>

            <TextInput 
              maxLength={30}
              onChangeText={nascimento => this.setState({ nascimento })}
              placeholder='Data de Nascimento'
              style={styles.estiloInput}
              value={this.state.nome}
              placeholderTextColor="#020C28">
            </TextInput>

            <TextInput 
              maxLength={30}
              onChangeText={email => this.setState({ email })}
              placeholder='Email'
              style={styles.estiloInput}
              value={this.state.email}
              placeholderTextColor="#020C28">
            </TextInput>

            <TextInput 
              maxLength={10}
              onChangeText={senha => this.setState({ senha })}
              placeholder='Senha'
              secureTextEntry={true}
              style={styles.estiloInput}
              value={this.state.senha}
              placeholderTextColor="#020C28">
            </TextInput>

            <TextInput 
              maxLength={10}
              onChangeText={confirmar => this.setState({ confirmar })}
              placeholder='Confirmar senha'
              secureTextEntry={true}
              style={styles.estiloInput}
              value={this.state.confirmar}
              placeholderTextColor="#020C28">
            </TextInput>

           
          </View>
          <View style={styles.containerInferior}>
         
            <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.cadastrar()}>
              <Text style={{color: '#FAF8F8', fontWeight: '600'}}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => this.logar()}>
              <Text style={{color: '#020C28', fontWeight: '600'}}> Já possui conta? Logar</Text>
            </TouchableOpacity>
          </View>

      </KeyboardAvoidingView>
    )
    }
}

export default Register