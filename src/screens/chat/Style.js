import { StyleSheet } from 'react-native';
import { fonts } from '../../style/Fonts';
import { colors } from '../../style/Colors';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.chatIn,
        padding: 16,
        paddingTop: 56,
    },
    container: {
        justifyContent: 'flex-end',
        gap: 12,
        height: '100%',
    },
    chatOut: {
        width: '85%',
        backgroundColor: colors.accentColor,
        padding: 12,
        borderRadius: 4,
        gap: 12
    },
    chat:{
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        textAlign: 'justify',
        letterSpacing: 0.1,
        color: colors.textColor
    },
    infoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        alignSelf: 'flex-end'
    },
    info:{
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
        color: colors.textColor
    },
    chatIn:{
        width: '85%',
        backgroundColor: colors.green,
        padding: 12,
        borderRadius: 4,
        gap: 12,
        alignSelf: 'flex-end'
    },
    message:{
        width: '100%',
        height: 56,
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 12,
    },
    input:{
        fontSize: 16,
        color: colors.textColor,
        fontFamily: fonts.PoppinsRegular,
        width: '85%',
        overflow: 'scroll',
        borderRadius: 26,
        paddingHorizontal: 12,
        backgroundColor: colors.accentColor,
    },
    iconBg:{
        width: '12%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    }
})