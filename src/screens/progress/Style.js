import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';
import { fonts } from '../../style/Fonts';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    img:{
        width: '100%',
        height: '50%'
    },
    para:{
        textAlign: 'center',
    },
    btn:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 24,
        backgroundColor: colors.bgColor
    },
    icon:{
        fontSize: 24,
        color: colors.primaryColor
    },
    btnText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        marginTop: 2,
        color: colors.primaryColor
    }
})