import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { globalStyles } from '../../style/globalStyle'
import PrimaryHeader from '../../components/PrimaryHeader'
import { styles } from './Style'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'

const Progress = () => {
    return (
        <View style={globalStyles.conatiner}>
            <PrimaryHeader />
            <View style={styles.container}>
                <FastImage
                    source={require('../../../assets/images/mobile.png')}
                    style={styles.img}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={[globalStyles.para, styles.para]}>
                    Looks Like You have not enrolled and started any course yet.
                </Text>
                <TouchableOpacity 
                    style={styles.btn}
                >
                    <Icon
                        name='add-circle-outline'
                        style={styles.icon}
                    />
                    <Text style={styles.btnText}>
                        ADD NEW COURSES
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Progress