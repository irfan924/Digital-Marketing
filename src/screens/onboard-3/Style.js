import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accentColor,
        padding: 16,
        gap: 24
    },
    skipBtn:{
        alignSelf: 'flex-end',
        backgroundColor: colors.chatIn,
        width: '30%',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28
    },
    skipBtnText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 0.5,
        color: colors.primaryColor
    },
    content:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        backgroundColor: colors.accentColor,
        padding: 12,
        borderRadius: 4
    },
    img:{
        width: '100%',
        height: 200
    },
    iconWrapper:{
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        width: 15,
        height: 15,
        borderRadius: 5,
        backgroundColor: colors.gradient1
    },
    currentIcon:{
        width: 15,
        height: 15,
        borderRadius: 5,
        backgroundColor: colors.primaryColor
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        marginTop: 24,
        color: colors.primaryColor
    },
    subTitle:{
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        color: colors.primaryColor,
        textAlign: 'center',
        lineHeight: 26
    },
    btnView:{
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnNext:{
        width: '35%',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryColor,
        borderRadius: 4
    },
    btnNextText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 1,
        color: colors.accentColor
    }
})