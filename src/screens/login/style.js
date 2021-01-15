import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerGeral: {
        width: '100%',
        height: '100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#F7F7F7"
    },
    containerSuperior: {
        width: '100%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '15%'
    },
    containerLogo: {
        width: '80%',
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: '70%',
        height: '70%'
    },
    containerInferior: {
        flexDirection: 'column',
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: '5%',
    },
    estiloInput: {
        width: '80%',
        height: '15%',
        color: '#020C28',
        borderBottomWidth: 1,
        borderBottomColor: '#020C28',
        paddingLeft: 10,
        textDecorationColor: '#020C28',
    },
    buttonEntrar: {
        flexDirection: 'column',
        width: '80%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20B15A',
        borderRadius: 5,
    },
    viewTexto: {
        width: '80%',
        height: '25%',
        justifyContent: "space-around",
        marginBottom: '5%'
    },
    texto: {
        color: '#020C28',
        fontSize: 30,
        fontWeight: '600'
    },
    textoBotao: {
        color: '#f7f7f7',
        fontSize: 16,
        fontWeight: '600',
    },
    fontCadastrar: {
        fontSize: 18,
        fontWeight: '600',
        color: '#020C28',
    },
    containerRecuperarSenha: {
        width: '80%',
        height: '5%',
        marginTop: '3%',
        alignItems: 'flex-end'
    },
    textRecuperarSenha: {
        fontSize: 14,
        fontWeight: '300',
        color: '#020C28'
    }
})

export default styles
