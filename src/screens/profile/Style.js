import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accentColor,
    },
    header: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.accentColor,
        shadowColor: colors.textColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        paddingHorizontal: 16
    },
    headerTitle: {
        width: '80%',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 1,
        color: colors.textColor
    },
    content: {
        padding: 16,
        gap: 16
    },
    profileWrapper: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.accentColor,
        shadowColor: colors.textColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        borderRadius: 12
    },
    logoBtn: {

    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.gradient1,
    },
    icon: {
        fontSize: 24,
        color: colors.gradient1,
        position: 'absolute',
        right: -16,
        bottom: 8
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        color: colors.textColor,
        letterSpacing: 0.5
    },
    badgeWrapper: {
        width: '100%',
    },
    list: {
        width: '100%',
        alignItems: 'center',
        gap: 12,
        padding: 8
    },
    itemContainer: {
        width: '32%',
        backgroundColor: colors.accentColor,
        borderRadius: 8,
        margin: 3,
        alignItems: 'center',
        padding: 4,
        shadowColor: colors.textColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        gap: 12
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    subTitle: {
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
        textAlign: 'center',
        letterSpacing: 0.5,
        color: colors.textColor
    },
    modalView:{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalContent:{
        height: 400,
        width: '100%',
        backgroundColor: colors.accentColor,
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
    },
    modalHeader:{
        flexDirection: 'row',
        height: 46,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 36,
        backgroundColor: colors.accentColor,
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
    },
    avatarWrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        paddingVertical: 24,
    },
    btnView:{
        padding: 16
    },
    checkIcon:{
        position: 'absolute',
        bottom: 24,
        right: 16,
        fontSize: 24,
        color: colors.primaryColor
    }
})