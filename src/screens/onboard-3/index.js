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

const Onboard3 = () => {

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
                    source={require('../../../assets/images/onboard3.png')}
                    resizeMode={FastImage.resizeMode.center}
                    style={styles.img}
                />
                <View style={styles.iconWrapper}>
                    <View style={styles.icon}></View>
                    <View style={styles.icon}></View>
                    <View style={styles.currentIcon}></View>
                </View>
                <Text style={styles.title}>
                    Get Certified
                </Text>
                <Text style={styles.subTitle}>
                    Start learning and get certified after your training to get a lucrative job.
                </Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    style={{...styles.btnNext, backgroundColor: colors.accentColor}}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={{...styles.btnNextText, color: colors.primaryColor}}>
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnNext}
                    onPress={()=> navigation.dispatch(StackActions.replace('LoginNavigation'))}
                >
                    <Text style={styles.btnNextText}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboard3