import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import FastImage from 'react-native-fast-image'
import { globalStyles } from '../../style/globalStyle'
import { StackActions, useNavigation } from '@react-navigation/native'

const Onboard1 = () => {

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
                    source={require('../../../assets/images/onboarding1.png')}
                    resizeMode={FastImage.resizeMode.center}
                    style={styles.img}
                />
                <View style={styles.iconWrapper}>
                    <View style={styles.currentIcon}></View>
                    <View style={styles.icon}></View>
                    <View style={styles.icon}></View>
                </View>
                <Text style={styles.title}>
                    Welcome To Digital Marketing
                </Text>
                <Text style={styles.subTitle}>
                    Welcome as you learn a world changing skill to get a better job.
                </Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    style={styles.btnNext}
                    onPress={()=> navigation.navigate('Onboard2')}
                >
                    <Text style={styles.btnNextText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboard1