import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Switch
} from 'react-native'
import { colors } from '../style/Colors'

const CustomSwitch = ({onValueChange, value, isEnabled}) => {
    return (
        <Switch
            trackColor={{ false: colors.grey, true: colors.gradient1 }}
            thumbColor={isEnabled ? colors.primaryColor : colors.bgColor}
            ios_backgroundColor={colors.grey}
            onValueChange={onValueChange}
            value={value}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], }}
        />
    )
}

export default CustomSwitch

const styles = StyleSheet.create({})