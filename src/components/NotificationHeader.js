import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { colors } from '../style/Colors'
import { globalStyles } from '../style/globalStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { fonts } from '../style/Fonts'

const NotificationHeader = ({title, onPress}) => {
    return (
        <View style={[styles.container, globalStyles.boxShadow]}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    name='arrow-back'
                    size={24}
                    color={colors.grey}
                />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

export default NotificationHeader

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: colors.accentColor,
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 0.5,
        color: colors.textColor,
        marginLeft:24
    }
})