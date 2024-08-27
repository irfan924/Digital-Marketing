import React, { useState } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import { styles } from './Style'
import NotificationHeader from '../../components/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import { terms } from '../../utils/terms'
import Icon from 'react-native-vector-icons/Ionicons'
import { globalStyles } from '../../style/globalStyle'
import PrimaryButton from '../../components/PrimaryButton'
import { privacyPolicy } from '../../utils/privacyPolicy'
import { colors } from '../../style/Colors'

const PrivacyPolicy = () => {

    const navigation = useNavigation();

    const [isEndReached, setIsEndReached] = useState(false);

    return (
        <View style={styles.container}>
            <NotificationHeader title={'Privacy Policy'} onPress={() => navigation.goBack()} />
            <FlatList
                data={privacyPolicy}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                ListHeaderComponent={
                    <Text style={{ ...globalStyles.mainTitle, textAlign: 'center' }}>
                        Privacy Policy
                    </Text>
                }
                onEndReached={() => setIsEndReached(true)}
                renderItem={({ item, index }) =>
                    <View >

                        <Text style={{ ...styles.title, color: colors.primaryColor, fontSize: 18 }}>
                            {item.title}
                        </Text>
                        <Text style={globalStyles.para}>
                            {item.desc}
                        </Text>
                        {
                            item.subtitle.map((subtitle, index) => {
                                return (
                                    subtitle.name && subtitle.desc ?
                                        <View key={index} style={styles.descWrapper}>
                                            <Icon
                                                name='chevron-forward'
                                                style={styles.icon}
                                            />
                                            <View style={styles.innerView}>
                                                <Text style={styles.title}>
                                                    {subtitle.name}
                                                </Text>
                                                <Text style={globalStyles.para}>
                                                    {subtitle.desc}
                                                </Text>
                                            </View>
                                        </View>
                                        :
                                        null
                                )
                            }
                            )
                        }
                    </View>
                }
                ListFooterComponent={
                    isEndReached &&
                    <PrimaryButton title={'Contact Us'} onPress={() => navigation.navigate('Help')} />
                }
            />

        </View>
    )
}

export default PrivacyPolicy