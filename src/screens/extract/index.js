import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput } from 'react-native';

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
                    <Text style={styles.textHeader}>Extrato</Text>
                </View>
                <View style={styles.containerSaldo}></View>
                <View style={styles.containerScroll}></View>
                <View style={styles.containerFooter}></View>
                
               
            </SafeAreaView>
        )
    }
}

export default connect()(Extract);