import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor,
    },
    content:{
        flex: 1,
        padding: 16,
        gap: 12
    },
    list:{
        gap: 26,
        paddingVertical: 16
    },
    card:{
        width: '90%',
        alignSelf: 'center',
        backgroundColor: colors.accentColor,
        alignItems: 'center',
        padding: 8,
        borderRadius: 16
    },
    linear:{
        width: 200,
        height: 200,
        borderRadius: 100
    },
    img:{
        width: 200,
        height: 200,
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor
    }
})