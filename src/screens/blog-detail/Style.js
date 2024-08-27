import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor
    },
    content:{
        flex: 1,
        padding: 16,
        gap: 16
    },
    linear:{
        width: '100%',
        height: 200,
        borderRadius: 4,
    },
    img:{
        width: '100%',
        height: '100%',
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor,
        marginHorizontal: 4,
    }
})