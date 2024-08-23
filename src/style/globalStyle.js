import { StyleSheet } from 'react-native';
import { colors } from './Colors';
import { fonts } from './Fonts';

export const globalStyles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: colors.accentColor,
        padding: 16,
        paddingTop: 56,
    },
    mainTitle: {
        fontSize: 24,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.primaryColor
    },
    para: {
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        color: colors.grey
    },
    modulePara: {
        fontSize: 16,
        fontFamily: fonts.PoppinsLight,
        color: colors.textColor,
        letterSpacing: 0.5,
        lineHeight: 24,
    },
    boxShadow: {
        shadowColor: colors.textColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        gap: 12
    }
})