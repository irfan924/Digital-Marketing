import React, { useState } from 'react'
import {
    View,
    Text,
    Switch
} from 'react-native';
import { styles } from './Style';
import NotificationHeader from '../../components/NotificationHeader';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../style/globalStyle';
import CustomSwitch from '../../components/CustomSwitch';

const Notifications = () => {

    const navigation = useNavigation();

    // const [isEnabled, setIsEnabled] = useState(false);
    const [update, setUpdate] = useState(false);
    const [discount, setDiscount] = useState(false);
    const [course, setCourse] = useState(false);
    const [reminder, setReminder] = useState(false);

    return (
        <View style={styles.container}>
            <NotificationHeader
                title={'Notifications'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.content}>
                <View style={styles.commonWrapper}>
                    <Text style={styles.title}>
                        App Update Notification
                    </Text>
                    <CustomSwitch
                        onValueChange={()=> setUpdate(!update)}
                        value={update}
                        isEnabled={update}
                    />
                </View>
                <View style={[styles.divider,]}></View>
                
                <View style={styles.commonWrapper}>
                    <Text style={styles.title}>
                        Discount Notification
                    </Text>
                    <CustomSwitch
                        onValueChange={()=> setDiscount(!discount)}
                        value={discount}
                        isEnabled={discount}
                    />
                </View>
                <View style={[styles.divider,]}></View>

                <View style={styles.commonWrapper}>
                    <Text style={styles.title}>
                        New Course Notification
                    </Text>
                    <CustomSwitch
                        onValueChange={()=> setCourse(!course)}
                        value={course}
                        isEnabled={course}
                    />
                </View>
                <View style={[styles.divider, ]}></View>

                <View style={styles.commonWrapper}>
                    <Text style={styles.title}>
                        Reminder Notification
                    </Text>
                    <CustomSwitch
                        onValueChange={()=> setReminder(!reminder)}
                        value={reminder}
                        isEnabled={reminder}
                    />
                </View>
            </View>
        </View>
    )
}

export default Notifications