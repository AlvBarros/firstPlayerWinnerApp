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
    containerSuperior: {
        width: '80%',
        height: '20%',
        justifyContent: "space-around",
    },
    texto: {
        color: '#020C28',
        fontSize: 30,
        fontWeight: '600'
    },
    containerCentral: {
        width: '80%',
        height: '55%',
        flexDirection:'column',
        justifyContent:'center',
    },
    containerInferior: {
        flexDirection: 'column',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    estiloInput: {
        width: '100%',
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
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20B15A',
        borderRadius: 5,
    },
})

export default styles
