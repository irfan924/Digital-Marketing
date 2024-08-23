import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accentColor,
        padding: 16
    },
    contentWrapper: {
        paddingVertical: 16,
        gap: 16
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 0.5,
        lineHeight: 30,
        color: colors.primaryColor
    },
    certificate: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoWrapper:{
        position: 'relative',
        width: '98%',
        height: 200,
        borderRadius: 4,
        overflow: 'hidden',
        alignSelf: 'center',
        shadowColor: colors.textColor,
        shadowOffset:{
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 6,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: 4,
    },
    wrapper:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 36
    },
    commonWrapper:{
        width: '43%',
        height: 170,
        backgroundColor: colors.accentColor,
        borderRadius: 8,
        shadowColor: colors.textColor,
        shadowOffset:{
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12
    },
    icon:{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.chatIn,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 50
    },
    subTitle:{
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.primaryColor
    },
    btnWrapper:{
        marginBottom: 40,
        flex: 1,
        height: 50,
        flexDirection: 'row',
        gap: 24
    }
})