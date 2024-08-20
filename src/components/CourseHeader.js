import React from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import { colors } from '../style/Colors'

import Icon from 'react-native-vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native';
import { fonts } from '../style/Fonts';

const width = Dimensions.get('screen').width;

const CourseHeader = ({ title }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Icon
                    name='arrow-back'
                    color={colors.bgColor}
                    size={24}
                />
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default CourseHeader

const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: 46,
        backgroundColor: colors.primaryColor,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.accentColor,
        letterSpacing: 1,
        textAlign: 'center'
    },
    titleWrapper:{
        width: '80%',
    }
})