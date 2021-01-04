import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerGeral: {
        width: '100%',
        height: '100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#f7f7f7"
    },
    containerHeader: {
        width: '100%',
        height: '10%',
        backgroundColor: '#FBAF00',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    containerHeaderInterno: {
        width: '85%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerBuscar: {
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 5
    },
    iconeLupa: {
        width: '10%',
        height: '100%',
    },
    inputBuscar: {
        width: '60%',
        height: '100%',
    },
    botaoFiltro: {
        width: '12%',
        height: '50%',
        backgroundColor: '#00AF54',
        borderRadius: 5
    },
    containerVitrine: {
        width: '100%',
        height: '20%'
    },
    fundoAmarelo: {
        display: 'flex',
        width: '100%',
        height: '60%',
        backgroundColor: '#FBAF00',
        zIndex: 0,
    },
    slideVitrine: {
        position: 'absolute',
        width: '100%',
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
        zIndex: 10,
    },
    itemVitrine: {
        width: '100%',
        height: '90%',
        backgroundColor: '#000',
        borderRadius: 5,
    },
    containerSaldo: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%'
    },
    retanguloSaldo: {
        position: 'relative',
        width: '85%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 5,
        zIndex:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    saldo: {
        width: '100%',
        height: '45%',
        paddingLeft: '5%',
    },
    retanguloTransferencias: {
        width: '85%',
        height: '40%',
        backgroundColor: '#00AF54',
        borderRadius: 5,
        marginTop: -10,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: '2%'
    },
    textoSaldoDisponivel: {
        color: '#000',
        fontSize: 12
    },
    textoSaldo: {
        fontWeight: '900',
        color: '#000',
        fontSize: 18
    },
    divisao: {
        width: '90%',
        height: 1,
        backgroundColor: '#000',
    },
    textoTransferencia: {
        fontWeight: '600',
        color: '#f7f7f7'
    },
    textoExtrato: {
        color: '#E80234'
    },
    containerJogos: {
        width: '85%',
        height: '20%',
    },
    textJogos: {
        fontSize: 26,
        fontWeight: '600',
        color: '#020C28'
    },
    textCampeonatos: {
        fontSize: 26,
        fontWeight: '600',
        color: '#020C28',
        marginLeft: '7%'
    },
    containerCampeonatos: {
        width: '100%',
        height: '20%',
        justifyContent: 'space-around',
        marginBottom: '5%'
    },
    viewSlideCampeonatos: {
        width: '100%',
        height: '80%',
        marginTop: '5%'
    },
    itemCampeonato: {
        width: '100%',
        height: '100%',
        backgroundColor: '#999',
        borderRadius: 5,
    },
    containerFooter: {
        width: '100%',
        height: '10%',
        backgroundColor: '#ff0000'
    },
    
})

export default styles
