import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import FastImage from 'react-native-fast-image'
import { globalStyles } from '../../style/globalStyle'
import { colors } from '../../style/Colors'
import { StackActions, useNavigation } from '@react-navigation/native'

const Onboard2 = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.skipBtn}
                onPress={()=> navigation.dispatch(StackActions.replace('LoginNavigation'))}
            >
                <Text style={styles.skipBtnText}>
                    Skip
                </Text>
            </TouchableOpacity>
            <View style={[styles.content, globalStyles.boxShadow]}>
                <FastImage
                    source={require('../../../assets/images/onboard2.png')}
                    resizeMode={FastImage.resizeMode.center}
                    style={styles.img}
                />
                <View style={styles.iconWrapper}>
                    <View style={styles.icon}></View>
                    <View style={styles.currentIcon}></View>
                    <View style={styles.icon}></View>
                </View>
                <Text style={styles.title}>
                    Choose Your Course
                </Text>
                <Text style={styles.subTitle}>
                    Choose the course of your choice and gain industry knowledge and experience in it.
                </Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    style={{...styles.btnNext, backgroundColor: colors.accentColor}}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={{ ...styles.btnNextText, color: colors.primaryColor }}>
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnNext}
                    onPress={()=> navigation.navigate('Onboard3')}
                >
                    <Text style={styles.btnNextText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboard2