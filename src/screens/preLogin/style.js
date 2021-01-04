import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerGeral: {
        width: '100%',
        height: '100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000'
    },
    containerSuperior: {
        width: '100%',
        height: '80%',
    },
    containerInferior: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '10%'
    },
    botao: {
        width: '80%',
        height: '40%',
        backgroundColor: '#20B15A',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontBotao: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    fontCadastrar: {
        fontSize: 18,
        fontWeight: '300',
        color: '#fff'
    }
    
})

export default styles
