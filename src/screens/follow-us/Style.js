import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accentColor
    },
    content:{
        flex: 1,
        gap: 16,
        padding: 16
    },
    upperContainer:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        backgroundColor: colors.accentColor,
        borderRadius: 8
    },
    appLogo:{
        width: 100,
        height: 100
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        color: colors.textColor,
        letterSpacing: 0.5
    },
    subtitle:{
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        color: colors.grey,
        letterSpacing: 0.5
    },
    middleView:{
        flex: 1,
        backgroundColor: colors.accentColor,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        borderRadius: 8
    },
    bottomView:{
        flex: 3,
        backgroundColor: colors.accentColor,
        borderRadius: 8,
        padding: 8,
        gap: 12
    },
    btn:{
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.accentColor,
        paddingHorizontal: 8,
        borderRadius: 8
    }
})