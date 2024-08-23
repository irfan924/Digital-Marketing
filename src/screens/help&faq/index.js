import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { styles } from './Style'
import NotificationHeader from '../../components/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import SettingButtons from '../../components/SettingButtons'

const HelpAndFAQ = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <NotificationHeader
                title={"Help and FAQ's"}
                onPress={()=> navigation.goBack()}
            />
            <View style={styles.content}>
                <SettingButtons
                    title={'Help'}
                    icon={'help-outline'}
                    onPress={() => navigation.navigate('Help')}
                />
                <View style={styles.divider}></View>
                <SettingButtons
                    title={"FAQ's"}
                    icon={'list-circle-outline'}
                    onPress={()=> navigation.navigate('FAQS')}
                />
            </View>
        </View>
    )
}

export default HelpAndFAQ