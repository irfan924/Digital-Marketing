import React from 'react'
import {
    View,
    Text,
    Alert,
    TouchableOpacity,
    Linking
} from 'react-native'
import { styles } from './Style';
import NotificationHeader from '../../components/NotificationHeader';
import { globalStyles } from '../../style/globalStyle';
import FastImage from 'react-native-fast-image';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const Help = () => {

    const navigation = useNavigation();

    const phoneNumber = '03038729993';
    const email = 'mailto:info@agentech.co?subject=Support&body=Hello, I need help with...';

    const handleMail = () => {

        Linking.openURL(email)
            .catch(err => {
                Alert.alert('Error Found!', `${err}`)
            })
    }
    const handleDialer = () => {
        Linking.openURL(`tel:${phoneNumber}`)
            .catch(err => {
                Alert.alert('Error Found!', `${err}`)
            })
    }
    const handleWeb = () => {
        Linking.openURL(`https://www.agentech.co`)
            .catch(err => {
                Alert.alert('Error Found!', `${err}`)
            })
    }


    return (
        <View style={styles.container}>
            <NotificationHeader
                title={'Help'}
                onPress={()=> navigation.goBack()}
            />
            <View style={styles.content}>
                <TouchableOpacity
                    style={[styles.card, globalStyles.boxShadow]}
                    onPress={handleMail}
                >
                   <FastImage
                        source={require('../../../assets/images/callGif.gif')}
                        style={{width: 70, height: 70, borderRadius: 35}}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={styles.cardView}>
                        <Text style={styles.subTitle}>
                            Simply Drop us EMail at
                        </Text>
                        <Text style={styles.title}>
                            info@agentech.co
                        </Text>
                        <Text style={styles.subTitle}>
                            You'll receive a reply within 24 hours
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.card, globalStyles.boxShadow]}
                    onPress={handleDialer}
                >
                    <FastImage
                        source={require('../../../assets/images/mailGif.gif')}
                        style={{width: 70, height: 70, borderRadius: 35}}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={styles.cardView}>
                        <Text style={styles.subTitle}>
                            Give us a ring at
                        </Text>
                        <Text style={styles.title}>
                            {phoneNumber}
                        </Text>
                        <Text style={styles.subTitle}>
                            Our experts are standing by 24 hours from 9 PM to 9 PM
                        </Text>
                    </View>
                </TouchableOpacity>
                <PrimaryButton
                    title={'Support Us'}
                    onPress={handleWeb}
                />
            </View>
        </View>

    )
}

export default Help