import React from 'react'
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../style/Colors';
import { fonts } from '../style/Fonts';

const LoginInputs = ({ onChange, onChangeText, placeholder, icon, secureTextEntry, onPress, value, borderColor, borderWidth }) => {
    return (
        <View style={styles.container}>
            <Icon
                name={icon}
                size={24}
                color={colors.primaryColor}
                onPress={onPress}
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.grey}
                style={{...styles.input, borderWidth:borderWidth, borderColor: borderColor}}
                cursorColor={colors.primaryColor}
                onChange={onChange}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    )
}

export default LoginInputs

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.accentColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 12,
        borderRadius: 100
    },
    input: {
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        color: colors.primaryColor,
        flex: 1,
        letterSpacing: 1
    }
})