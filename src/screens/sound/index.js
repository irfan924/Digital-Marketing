import React, { useState } from 'react'
import {
    View,
    Text
} from 'react-native'
import { styles } from './Style'
import NotificationHeader from '../../components/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import CustomSwitch from '../../components/CustomSwitch'

const Sound = () => {

    const navigation = useNavigation();

    const [sound, setSound] = useState(false);

    return (
        <View style={styles.container}>
            <NotificationHeader title={'Sound'} onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.commonWrapper}>
                    <Text style={styles.title}>
                        Turn Music on
                    </Text>
                    <CustomSwitch
                        value={sound}
                        isEnabled={sound}
                        onValueChange={() => setSound(!sound)}
                    />
                </View>
                <View style={styles.divider}></View>
            </View>
        </View>
    )
}

export default Sound