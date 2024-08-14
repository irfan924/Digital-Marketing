import React from 'react'
import {
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { colors } from '../style/Colors'
import GetProBtn from './GetProBtn';

import Icon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image';

import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width;

const PrimaryHeader = ({ onPress }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <Icon
                        name='menu'
                        color={colors.primaryColor}
                        size={36}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Drawer')}
                >
                    <FastImage
                        source={require('../../assets/images/digital.png')}
                        style={{ width: 30, height: 30 }}
                        resizeMode={FastImage.resizeMode.center}
                    />
                </TouchableOpacity>
            </View>
            <GetProBtn onPress={() => navigation.navigate('Tab', { screen: 'Pro' })} />
        </View>
    )
}

export default PrimaryHeader

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width * 1,
        height: 46,
        backgroundColor: colors.bgColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    upperView: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    }
})