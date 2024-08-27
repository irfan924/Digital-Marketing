import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.chatIn
    },
    upperView: {
        height: 200,
        aspectRatio: 1 / 1,
        alignSelf: 'center'
    },
    title: {
        fontSize: 30,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.primaryColor,
    },
    absoluteContent: {
        padding: 12,
        alignItems: 'center',
        gap: 12,
    },
    subTitle: {
        fontSize: 24,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.primaryColor
    },
    summary: {
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.grey,
        textAlign: 'center',
        maxWidth: '80%'
    },
    inputView: {
        height: 200,
        gap: 24,
        justifyContent: 'center',
    },
    dividerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        marginVertical: 8
    },
    divider: {
        flex: 1,
        height: 4,
        backgroundColor: colors.primaryColor,
        borderRadius: 40,
    },
    dividerText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.textColor
    },
    btnText: {
        fontSize: 16,
        letterSpacing: 1,
        fontFamily: fonts.PoppinsRegular,
        color: colors.ornage
    },
    iconWrapper: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        justifyContent: 'space-between',
        gap: 12,
        alignItems: 'center'
    },
    loginBtn: {
        height: 46,
        width: '100%',
        flexDirection: 'row',
        gap: 8,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 23,
        gap: 16
    },
    loginBtnText: {
        width: '60%',
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        color: colors.accentColor,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    logo: {
        width: 30,
        height: 30,
    },
    logoView: {
        width: 60,
        height: 46,
        backgroundColor: colors.accentColor,
        borderTopLeftRadius: 23,
        borderBottomLeftRadius: 23,
        justifyContent: 'center',
        alignItems: 'center'
    },
})