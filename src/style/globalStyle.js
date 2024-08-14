import { StyleSheet } from 'react-native';
import { colors } from './Colors';
import { fonts } from './Fonts';

export const globalStyles = StyleSheet.create({
    conatiner:{
        flex: 1,
        backgroundColor: colors.accentColor,
        padding: 16,
        paddingTop: 56,
    },
    mainTitle:{
        fontSize: 24,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.primaryColor
    },
    para:{
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        color: colors.textColor
    }
})