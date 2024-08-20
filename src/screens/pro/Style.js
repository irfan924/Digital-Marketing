import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 26,
    },
    closeBtn: {
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryColor,
        alignSelf: 'flex-end',
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 1,
        color: colors.accentColor,

    },
    content: {
        flex: 1,
        backgroundColor: colors.primaryColorRGBA,
        gap: height*0.035,
        alignItems: 'center',
        padding: 12,
    },
    animationView: {
        width: '100%',
    },
    priceWrapper: {
        backgroundColor: colors.accentColor,
        width: '80%',
        gap: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    upperPriceWrapper: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.tertiaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        padding: 12,
        borderRadius: 8,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        color: colors.textColor,
        letterSpacing: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 4,
        shadowColor: colors.textColor,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 19,
    },
    oldPrice:{
        fontSize: 14,
        fontFamily: fonts.PoppinsRegular,
        color: colors.grey,
        textDecorationLine: 'line-through',
    },
    newPrice:{
        fontSize: 20,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 1,
        color: colors.textColor
    },
    discount:{
        fontSize: 16,
        width: '50%',
        backgroundColor: colors.secondaryColor,
        height: 36,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 18,
        marginBottom: -16
    },
    timeWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    countWrapper:{
        alignItems: 'center',
    },
    time:{
        fontSize: 12,
        fontFamily: fonts.PoppinsMedium,
        letterSpacing: 1,
        color: colors.accentColor
    },
    unlockBtn:{
        backgroundColor: colors.accentColor,
        width: '100%',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23
    },
    unlockBtnText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor
    },
    faqsBtn:{
        width: width*1,
        height: height*0.07,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        paddingTop: 4
    },
    faqsBtnText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.accentColor
    }
})