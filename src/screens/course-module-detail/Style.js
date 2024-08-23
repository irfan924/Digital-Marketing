import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accentColor,
    },
    contentWrapper: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 12,
        // marginVertical: 16,
    },
    imgBtn: {
        width: '100%',
        height: 200,
        marginVertical: 16,
    },
    img: {
        width: '100%',
        height: 200
    },
    icon:{
        position: 'absolute',
        right: 12,
        top: 12,
        fontSize: 24,
        color: colors.grey,
    },
    title:{
        fontSize: 16,
        textAlign: 'center',
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 0.5,
        color: colors.primaryColor,
    }
})