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
    textHeader: {
        fontWeight: '600'
    },
    containerSaldo: {
        width: '100%',
        height: '30%',
        backgroundColor: '#898989'
    },
    containerScroll: {
        width: '100%',
        height: '56%',
        backgroundColor: '#494949'
    },
    containerFooter: {
        width: '100%',
        height: '10%',
        backgroundColor: '#ff0000'
    },
    
})

export default styles
