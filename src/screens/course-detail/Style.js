import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accentColor,
        padding: 16,
    },
    content: {
        alignItems: 'center',
        gap: 24,
        paddingVertical: 12
    },
    card: {
        width: '95%',
        padding: 12,
        borderRadius: 12,
        shadowColor: colors.textColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
        backgroundColor: colors.accentColor,
        gap: 16
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    commonHeader: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconBg: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28
    },
    icon: {
        fontSize: 36,
        color: colors.accentColor,
        transform: [{
            rotate: '-30deg',
        }]
    },
    headerContent: {
        gap: 4,
    },
    headerContentDesc: {
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor,
        fontWeight: '800'
    },
    headerContentCount: {
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.grey,
        fontWeight: '800'
    },
    cardContent: {
        gap: 12
    },
    startWrapper: {
        borderRadius: 4,
        padding: 4,
    },
    activeTitle: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.textColor
    },
    activeTimeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    timeCount: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.textColor
    },
    btn: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        height: 36,
        width: 100,
        borderWidth: 2,
        borderColor: colors.accentColor,
        borderRadius: 18
    },
    btnText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.textColor
    },
    commonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerCommonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    commonIcon: {
        backgroundColor: colors.chatIn,
        fontSize: 16,
        width: 30,
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 15,
        color: colors.textColor
    },
    forwardIcon: {
        fontSize: 16,
        color: colors.textColor
    },
    commonTitle: {
        fontSize: 12,
        letterSpacing: 0.5,
        color: colors.textColor
    },
    moduleWrapper: {
        width: '95%',
        padding: 12,
        borderRadius: 12,
        shadowColor: colors.textColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
        backgroundColor: colors.accentColor,
        gap: 16,
        height: 72
    },
    none:{
        display: 'none',
    },
    proWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 12
    },
    textPro:{
        fontSize: 18,
        fontFamily: fonts.PoppinsMedium,
        color: colors.textColor
    },
    divider:{
        width: '70%',
        height: 8,
        backgroundColor: colors.gradient1,
        borderRadius: 4
    },
    testBtn:{
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    testBtnText:{
        textAlign: 'center',
        fontSize: 20,
        maxWidth: '40%',
        fontFamily: fonts.PoppinsMedium,
        color: colors.textColor
    },
    img:{
        width: '60%',
        height: 200
    },

})