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
import FastImage from 'react-native-fast-image';

import { useNavigation } from '@react-navigation/native';
import { fonts } from '../style/Fonts';

const width = Dimensions.get('screen').width;

const ChatHeader = ({ onPress }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='arrow-back'
                        color={colors.bgColor}
                        size={36}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> navigation.navigate('Profile')}
                >
                    <FastImage
                        source={require('../../assets/images/logo.jpg')}
                        style={styles.logo}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Ask Arya</Text>
            </View>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width * 1,
        height: 46,
        backgroundColor: colors.primaryColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    upperView: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.accentColor,
        overflow: 'hidden'
    },
    logo: {
        width: '100%',
        height: '100%'
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.accentColor,
        letterSpacing: 1
    }
})