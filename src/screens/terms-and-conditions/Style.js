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
        gap: 16
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 0.5,
        color: colors.textColor
    },
    descWrapper:{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-start',
    },
    icon:{
        fontSize: 16,
        width: 30,
        height: 30,
        backgroundColor: colors.chatIn,
        borderRadius: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: colors.textColor
    },
    btnView:{
        padding: 16
    }
})