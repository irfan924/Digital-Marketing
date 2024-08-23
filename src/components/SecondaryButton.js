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
import Icon from 'react-native-vector-icons/Ionicons'

const SecondaryButton = ({ title, onPress, icon }) => {
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

                <Icon
                    name={icon}
                    size={24}
                    color={colors.primaryColor}
                />
                <Text style={styles.btnText}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity >
    )
}

export default SecondaryButton

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linear: {
        borderRadius: 23,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16
    },
    btnText: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontFamily: fonts.PoppinsMedium,
        color: colors.primaryColor
    }
})