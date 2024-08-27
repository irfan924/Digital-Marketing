import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';
import { height, width } from '../../style/Dimensions';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content: {
        flex:1,
        gap: height*0.1,
        padding: 16,
        alignItems: 'center'
    },
    header:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    title:{
        maxWidth: '80%',
        fontSize: 20,
        fontFamily: fonts.PoppinsRegular,
        color: colors.accentColor,
        textAlign: 'center'
    },
    img:{
        width: width*0.9,
        height: 250,
    },
    bottomWrapper:{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    btnView:{
        flexDirection: 'row',
        gap: 12
    },
    emoji: {
        fontSize: height*0.1,
        color: colors.accentColor,
    },
    negContent:{
        width: '100%',
        alignItems: 'center',
        gap: 12
    },
    checkBoxContainer:{
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'flex-start',
        alignItems: 'center',
        gap: 12
    }
})