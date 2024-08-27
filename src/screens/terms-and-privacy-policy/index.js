import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { styles } from './Style'
import NotificationHeader from '../../components/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import SettingButtons from '../../components/SettingButtons'

const TermsAndPrivacy = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <NotificationHeader
                title={"Terms And Privacy Policy"}
                onPress={()=> navigation.goBack()}
            />
            <View style={styles.content}>
                <SettingButtons
                    title={'Terms & Conditions'}
                    icon={'document-text-outline'}
                    onPress={() => navigation.navigate('Terms')}
                />
                <View style={styles.divider}></View>
                <SettingButtons
                    title={"Privacy Policy"}
                    icon={'receipt-outline'}
                    onPress={()=> navigation.navigate('PrivacyPolicy')}
                />
            </View>
        </View>
    )
}

export default TermsAndPrivacy