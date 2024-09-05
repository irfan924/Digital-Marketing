import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import { colors } from '../style/Colors'
import { fonts } from '../style/Fonts'

const ProfileInput = ({title, placeholder, onChange, onChangeText, value, editable, keyboardType}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                onChange={onChange}
                onChangeText={onChangeText}
                value={value}
                editable={editable}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default ProfileInput

const styles = StyleSheet.create({
    container:{
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: colors.grey,
        paddingVertical: 4
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        color: colors.grey,
    },
    input:{
        fontSize: 16,
        fontFamily: fonts.PoppinsRegular,
        color: colors.primaryColor,
    },
})