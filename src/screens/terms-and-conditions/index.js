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

const Terms = () => {

    const navigation = useNavigation();

    const [isEndReached, setIsEndReached] = useState(false);

    return (
        <View style={styles.container}>
            <NotificationHeader title={'Terms and Conditions'} onPress={() => navigation.goBack()} />
            <FlatList
                data={terms}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                ListHeaderComponent={
                    <Text style={{ ...globalStyles.mainTitle, textAlign: 'center' }}>
                        Terms & Conditions
                    </Text>
                }
                onEndReached={() => setIsEndReached(true)}
                renderItem={({ item, index }) =>
                    <View >

                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <View style={styles.descWrapper}>
                            <Icon
                                name='book-outline'
                                style={styles.icon}
                            />
                            <Text style={[globalStyles.para, { maxWidth: '90%' }]}>
                                {item.desc}
                            </Text>
                        </View>
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

export default Terms