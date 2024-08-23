import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor,
        
    },
    contentWrapper:{
        gap: 12,
        padding: 16
    },
    content:{
        gap: 12
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 0.5,
        color: colors.primaryColor
    },
    points:{
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.2,
        color: colors.textColor,
        marginRight: 16,
        lineHeight: 24
    },
    listContainer:{
        flexDirection: 'row',
        gap: 12,
        width: '98%'
    },
    icon:{
        width: 24,
        height: 24,
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 12,
        backgroundColor: colors.chatIn,
        color: colors.textColor
    }
})