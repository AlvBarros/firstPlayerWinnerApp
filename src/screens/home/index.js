import React from 'react'
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { store } from '../../store'
import axios from '../../services/api';

import styles from './style'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: 'usuario',
            saldo: 'P$ 0.00',
            entries: ['nome', 'fé', 'nome', 'fé', 'nome', 'fé'],
            activeSlide: ['sada', 'asdas']
        }
    }

    componentDidMount() {
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.itemVitrine}>
                <Text style={styles.title}>teste</Text>
            </View>
        );
    }
    _renderCampeonato = ({item, index}) => {
        return (
            <View style={styles.itemCampeonato}>
                <Text style={styles.title}>teste</Text>
            </View>
        );
    }

    render(){
        return(
            <SafeAreaView style={styles.containerGeral}>
                <View style={styles.containerHeader}>
                    <View style={styles.containerHeaderInterno}>
                        <View style={styles.containerBuscar}>
                            <View style={styles.iconeLupa}></View>
                            <TextInput 
                                maxLength={30}
                                onChangeText={senha => this.setState({ senha })}
                                placeholder='Buscar Campeonato'
                                style={styles.inputBuscar}
                                value={this.state.senha}
                                placeholderTextColor="#020C28">
                            </TextInput>
                        </View>
                        <TouchableOpacity style={styles.botaoFiltro}>

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerVitrine}>
                    <View style={styles.fundoAmarelo}>
                    </View>
                    <View style={styles.slideVitrine}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.entries}
                            renderItem={this._renderItem}
                            sliderWidth={600}
                            itemWidth={350}
                            />
                    </View>
                </View>
                <View style={styles.containerSaldo}>
                    <View style={styles.retanguloSaldo}>
                        <View style={styles.saldo}>
                            <Text style={styles.textoSaldoDisponivel}>Saldo disponível</Text>
                            <Text style={styles.textoSaldo}>R$ 100,00</Text>
                        </View>
                        <View style={styles.divisao}></View>
                    
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Extract')}>
                            <Text style={styles.textoExtrato}>Ver extrato</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.retanguloTransferencias}>
                        <Text style={styles.textoTransferencia}>Nova Transferência</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerJogos}>
                    <Text style={styles.textJogos}>Jogos</Text>
                </View>
                <View style={styles.containerCampeonatos}>
                    <Text style={styles.textCampeonatos}>Seus campeonatos</Text>
                    <View style={styles.viewSlideCampeonatos}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.entries}
                            renderItem={this._renderItem}
                            sliderWidth={430}
                            itemWidth={150}
                        />
                    </View>
                </View>
                <View style={styles.containerFooter}></View>
               
            </SafeAreaView>
        )
    }
}

export default connect()(Home);