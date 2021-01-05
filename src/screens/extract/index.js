import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { store } from '../../store'
import axios from '../../services/api';

import styles from './style'

class Extract extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: 'usuario',
            saldo: 'P$ 0.00',
            entries: ['nome', 'fé', 'nome', 'fé', 'nome', 'fé'],
            activeSlide: ['sada', 'asdas']
        }
    }



    render(){
        return(
            <SafeAreaView style={styles.containerGeral}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity style={styles.leftHeaderButton} onPress={() => this.props.navigation.navigate('Home')}>
                        <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.centerHeader}>
                        <Text style={styles.textHeader}>Extrato</Text>
                    </View>
                    <View style={styles.rightHeaderButton}></View>
                </View>
                <View style={styles.containerSaldo}>
                    <View style={styles.saldo}>
                        <Text style={styles.textoSaldoDisponivel}>Saldo disponível</Text>
                        <Text style={styles.textoSaldo}>R$ 100,00</Text>
                    </View>
                    <View style={styles.scrollActions}>

                    </View>
                    <View style={styles.divisao}></View>
                </View>
                <View style={styles.containerScroll}></View>
                <View style={styles.containerFooter}></View>
                
               
            </SafeAreaView>
        )
    }
}

export default connect()(Extract);