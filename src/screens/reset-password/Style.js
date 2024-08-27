import { StyleSheet } from 'react-native';
import { height } from '../../style/Dimensions';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor,
        alignItems: 'center',
        justifyContent: 'center',
        gap: height*0.05,
        padding: 12
    },
    img:{
        width: '100%',
        height: 300
    },
    maintitle:{
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        fontSize: 16,
        color: colors.ornage
    },
    title:{
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        fontSize: 16,
        color: colors.primaryColor,
        textAlign: 'center'
    },
    input:{
        backgroundColor: colors.chatIn,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 36,
        width: '100%',
        fontSize: 20,
        color: colors.primaryColor,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1
    },
})