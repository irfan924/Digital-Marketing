import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor,
    },
    content:{
        padding: 16,
        gap: 16
    },
    commonWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor
    },
    divider:{
        width: '100%',
        height: 1,
        backgroundColor: colors.bgColor,
    }
})