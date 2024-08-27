import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import NotificationHeader from '../../components/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import { styles } from './Style'
import FastImage from 'react-native-fast-image'
import { globalStyles } from '../../style/globalStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../style/Colors'

const FollowUs = () => {

    const navigation = useNavigation();

    const socialData = [
        {
            id: 1,
            title: 'Instagram',
            icon: 'logo-instagram'
        },
        {
            id: 2,
            title: 'Facebook',
            icon: 'logo-facebook'
        },
        {
            id: 3,
            title: 'LinkedIn',
            icon: 'logo-linkedin'
        },
        {
            id: 4,
            title: 'Twitter',
            icon: 'logo-twitter'
        },
        {
            id: 5,
            title: 'Playstore',
            icon: 'logo-google-playstore'
        },
    ]

    return (
        <View style={styles.container}>
            <NotificationHeader
                title={'Follow Us'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.content}>
                <View style={[styles.upperContainer, globalStyles.boxShadow]}>
                    <FastImage
                        source={require('../../../assets/images/digital.png')}
                        resizeMode={FastImage.resizeMode.center}
                        style={styles.appLogo}
                    />
                    <Text style={styles.title}>
                        Digital Marketing
                    </Text>
                    <Text style={styles.subtitle}>
                        Version 4.2.41
                    </Text>
                </View>
                <View style={[styles.middleView, globalStyles.boxShadow]}>
                    <Text style={styles.subtitle}>
                        Agentech IT Solutions
                    </Text>
                    <Text style={styles.subtitle}>
                        &copy; 2024 All Rights Reserved
                    </Text>
                </View>
                <View style={[styles.bottomView, globalStyles.boxShadow]}>
                    {
                        socialData.map((item, index) => (
                            <TouchableOpacity
                                style={[styles.btn, globalStyles.boxShadow]}
                                key={item.id}
                            >
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Icon
                                    name={item.icon}
                                    color={colors.textColor}
                                    size={24}
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default FollowUs