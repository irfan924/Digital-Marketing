import { StyleSheet } from "react-native"
import { colors } from "../../style/Colors"
import { fonts } from "../../style/Fonts"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor
    },
    content:{
        gap: 16,
        padding: 16,
        paddingBottom: 26,
    },
    subtitle:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.4,
        color: colors.grey
    },
    btn:{
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: colors.accentColor,
        borderRadius: 2,
        paddingHorizontal: 8,

    },
    btnText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor, 
    },
    icon:{
        fontSize: 24,
        color: colors.primaryColor
    },
    divider:{
        width: '100%',
        height: 0.5,
        borderRadius: 3,
        backgroundColor: colors.grey
    }
})