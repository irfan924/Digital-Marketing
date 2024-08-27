import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor
    },
    content:{
        padding: 16,
        gap: 24,
        alignItems: 'center',
    },
    dividerWrapper:{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        flex: 1
    },
    divider:{
        flex: 1,
        height: 2,
        borderRadius: 1,
        backgroundColor: colors.grey
    },
    commonContainer:{
        flex: 1,
        backgroundColor: colors.accentColor,
        alignItems: 'center',
        width: '100%',
        padding: 8,
        borderRadius: 12
    },
    modal:{
        flex: 1,
        backgroundColor: colors.primaryColorRGBA,
        justifyContent: 'flex-end'
    },
    innerModal:{
        width: '100%',
        height: 400,
        backgroundColor: colors.accentColor,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 16,
        justifyContent: 'space-between'
    },
    input:{
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 4,
        overflow: 'scroll',
        textAlignVertical: 'top',
        fontFamily: fonts.PoppinsRegular,
        color: colors.textColor,
        letterSpacing: 0.5
    }
})