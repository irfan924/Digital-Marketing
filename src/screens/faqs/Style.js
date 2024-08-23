import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accentColor,
    },
    content: {
        flex: 1,
        padding: 12,
        gap: 12,
    },
    dataContainer: {
        marginVertical: 8,
    },
    questionContainer: {
        width: '98%',
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        backgroundColor: colors.accentColor,
        borderRadius: 2,
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    question: {
        flex: 3.5,
        color: colors.grey,
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,

    },
    answer: {
        display: 'none'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    flex: {
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        textAlign: 'justify',
        lineHeight: 20,
        color: colors.accentColor,
        letterSpacing: 0.5,
        backgroundColor: colors.primaryColorRGBA,
        padding: 16,
        borderRadius: 4,
        marginTop: 8
    },


})