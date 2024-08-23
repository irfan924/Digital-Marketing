import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { styles } from './Style'
import CourseHeader from '../../components/CourseHeader'

import { useNavigation } from '@react-navigation/native'
import SettingButtons from '../../components/SettingButtons'

const Settings = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <CourseHeader title={'Settings'} />
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.subtitle}>
                    PREMIUM
                </Text>
                <SettingButtons
                    title={'Digital Marketing Premium'}
                    icon={'sparkles-outline'}
                    onPress={() => navigation.navigate('Tab', { screen: 'Pro' })}
                />
                <View style={styles.divider}></View>
                <Text>
                    GENERAL
                </Text>
                <SettingButtons
                    title={'Notifications'}
                    icon={'notifications-outline'}
                    onPress={() => navigation.navigate('Notifications')}
                />
                <SettingButtons
                    title={'Sound'}
                    icon={'volume-high-outline'}
                    onPress={() => navigation.navigate('Sound')}
                />
                <View style={styles.divider}></View>
                <Text style={styles.subtitle}>
                    EXTRA
                </Text>
                <SettingButtons
                    title={'Help and FAQ'}
                    icon={'help-circle-outline'}
                    onPress={() => navigation.navigate('HelpAndFAQ')}
                />
                <SettingButtons
                    title={'Science Behind Learning'}
                    icon={'bulb-outline'}
                    onPress={() => navigation.navigate('Science')}
                />
                <SettingButtons
                    title={'Official Blogs'}
                    icon={'chatbox-ellipses-outline'}
                />
                <View style={styles.divider}></View>
                <SettingButtons
                    title={'Terms & Privacy Policy'}
                    icon={'notifications-circle-outline'}
                />
                <View style={styles.divider}></View>

                <SettingButtons
                    title={'Logout'}
                    icon={'power-outline'}
                />
            </ScrollView>
        </View>
    )
}

export default Settings