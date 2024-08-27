import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor,
    },
    content:{
        flex: 1,
        padding: 16,
        gap: 12,
        alignItems: 'center'
    },
    list:{
        gap: 26,
        paddingVertical: 16,
        justifyContent: 'space-around',
        width: '100%'
    },
    card:{
        width: '45%',
        height: 200,
        backgroundColor: colors.accentColor,
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: 8
    },
    linear:{
        width: '100%',
        height: 80,
        borderRadius: 4,
    },
    img:{
        width: '100%',
        height: '100%',
    },
    title:{
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor,
        marginHorizontal: 4,
    }
})