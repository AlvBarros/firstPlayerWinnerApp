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
        justifyContent:'space-between',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    leftHeaderButton: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    centerHeader: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightHeaderButton: {
        width: '20%',
        height: '100%'
    },
    textHeader: {
        fontWeight: '600'
    },
    containerSaldo: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    saldo: {
        width: '100%',
        height: '30%',
        paddingLeft: '5%',
        paddingTop: '5%'
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
    scrollActions: {
        width: '90%',
        height: '69%',
    },
    divisao: {
        width: '100%',
        height: 2,
        backgroundColor: '#000'
    },
    containerScroll: {
        width: '100%',
        height: '56%',
    },
    containerFooter: {
        width: '100%',
        height: '10%',
        backgroundColor: '#ff0000'
    },
    
})

export default styles
