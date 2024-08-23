import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { globalStyles } from '../style/globalStyle'
import { colors } from '../style/Colors'
import { fonts } from '../style/Fonts'

const SettingButtons = ({onPress, title, icon}) => {
    return (
        <TouchableOpacity
            style={[styles.btn, globalStyles.boxShadow]}
            onPress={onPress}
        >
            <Text style={styles.btnText}>
                {title}
            </Text>
            <Icon name={icon} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default SettingButtons

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: colors.accentColor,
        borderRadius: 2,
        paddingHorizontal: 8,

    },
    btnText:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor, 
    },
    icon:{
        fontSize: 24,
        color: colors.primaryColor
    },
})