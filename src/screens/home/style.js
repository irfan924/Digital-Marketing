import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';

export const styles = StyleSheet.create({
    courses: {
        marginVertical: 16,
    },
    scrollWrapper: {
        paddingBottom: 16
    },
    linearBtn: {
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    commonWrapper: {
        flexDirection: 'row',
        height: 450
    },
    btn: {
        width: '70%',
        height: 200,
    },
    img: {
        width: '80%',
        height: '80%',
        alignSelf: 'center'
    },
    newTitle: {
        backgroundColor: colors.bgColor,
        width: 50,
        marginTop: 16,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        textAlign: 'center',
        fontFamily: fonts.PoppinsRegular,
        color: colors.primaryColor,
        alignSelf: 'flex-start'
    },
    courseName: {
        maxWidth: '70%',
        alignItems: 'center',
        marginVertical: 16,
        color: colors.textColor,
        fontFamily: fonts.PoppinsRegular,
        alignSelf: 'center'
    },
    badgeLock: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '100%',
        height: '100%',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 16,
        maxWidth: '80%',
        textAlign: 'center',
        fontFamily: fonts.PoppinsRegular,
        color: colors.accentColor
    },
    bgImgWrapper: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        overflow: 'hidden'
    },
    bgImg: {
        width: '100%',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primaryColorRGBA
    },
    baloonImg: {
        width: '40%',
        height: 200,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    textWrapper: {
        width: '60%',
        height: 200,
        gap: 12,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingLeft: 24
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.PoppinsBold,
        color: colors.accentColor,
        letterSpacing: 0.5
    },
    para: {
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
        color: colors.accentColor,
        letterSpacing: 0.5
    },
    buyBtn:{
        height: 36,
        width: '80%',
        backgroundColor: colors.accentColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18
    },
    buyBtnText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.textColor
    }
})