import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../style/Colors'
import { fonts } from '../style/Fonts'
import FastImage from 'react-native-fast-image'

const GetProBtn = ({onPress}) => {
    return (
        <LinearGradient
            colors={[colors.primaryColor, colors.primaryColorRGBA]}
            style={styles.bg}
        >
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Text style={styles.btnText}>
                    Get Pro
                </Text>
                <FastImage
                    source={require('../../assets/images/crown.png')}
                    style={{ width: 24, height: 24 }}
                    tintColor={colors.accentColor}
                />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default GetProBtn

const styles = StyleSheet.create({
    bg: {
        width: 120,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    btnText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.accentColor
    },
    btn: {
        flexDirection: 'row',
        gap: 12
    }
})