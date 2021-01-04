import React from 'react';
import { SafeAreaView, Image, View, TextInput,
TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import axios from '../../services/api';

import styles from './style'

class PreLogin extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        nome: '',
      }
    }

    cadastrar = async () => {
      this.props.navigation.navigate('Register')
    }

    logar = () => {
      this.props.navigation.navigate('Login')
    }

    render(){
      return(
        <SafeAreaView style={styles.containerGeral}>
          <View style={styles.containerSuperior}></View>
            <View style={styles.containerInferior}>
              <TouchableOpacity style={styles.botao} onPress={this.logar}>
                <Text style={styles.fontBotao}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.cadastrar}>
                <Text style={styles.fontCadastrar}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
      )
    }
}

export default PreLogin