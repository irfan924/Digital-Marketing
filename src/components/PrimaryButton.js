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

const PrimaryButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
        >
            <LinearGradient
                colors={[colors.gradient1, colors.gradient2]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linear}
            >

                <Text style={styles.btnText}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity >
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linear: {
        borderRadius: 23,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 20,
        letterSpacing: 0.5,
        fontFamily: fonts.PoppinsMedium,
        color: colors.primaryColor
    }
})