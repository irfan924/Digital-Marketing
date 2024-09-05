import { StyleSheet } from 'react-native';

import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';
import { height } from '../../style/Dimensions';


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.accentColor,
        
    },
    mainContainer: {
        gap: 16,
        padding: 12,
        marginVertical: 24
    },
    profileContainer: {
        height: height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    logo:{
        fontSize: 90,
        color: colors.primaryColor,
        borderWidth: 3,
        borderColor: colors.primaryColor,
        borderRadius: 90,
        padding: 8

    },
    imgContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    loadingContainer:{
        flexDirection: 'row',
        marginTop: 16,
        gap: 36
    },
    loadingText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        color: colors.primaryColor,
    },
    userName: {
        fontSize: 36,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.primaryColor
    },
    btnText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1,
        color: colors.primaryColor,
        textAlign: 'right'
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        height: 60,
        marginVertical: 16
    },
    discardBtn: {
        backgroundColor: colors.ornage,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    discardBtnText: {
        fontSize: 16,
        color: colors.accentColor,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1
    },
    saveBtn: {
        backgroundColor: colors.primaryColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    saveBtnText: {
        fontSize: 16,
        color: colors.accentColor,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 1
    },
    lottieView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader:{
        width: '100%',
        height: 300
    }
})