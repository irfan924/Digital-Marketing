import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import NotificationHeader from '../../components/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import { FAQs } from '../../utils/faqs'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../style/Colors'
import { globalStyles } from '../../style/globalStyle'

const FAQS = () => {

    const navigation = useNavigation();

    const [isAnswerVisible, setIsAnswerVisible] = useState(null)

    const toggleAnswerVisibility = (index) => {
        setIsAnswerVisible((prevIndex) => (prevIndex === index ? null : index));
    };


    return (
        <View style={styles.container}>
            <NotificationHeader
                title={'Frequently Asked Questions'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.content}>
                <FlatList
                    data={FAQs}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 16}}
                    renderItem={({ item, index }) => (
                        <View style={styles.dataContainer}>
                            <View style={[styles.questionContainer, globalStyles.boxShadow]}>
                                <TouchableOpacity 
                                onPress={() => toggleAnswerVisibility(index)}
                                style={styles.btn}
                                >
                                    <Text style={styles.question}>{item.question}</Text>
                                    <Icon
                                        name={isAnswerVisible === index ? 'chevron-down' : 'chevron-up'}
                                        size={24}
                                        color={colors.primaryColor}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={isAnswerVisible === index ? styles.flex : styles.answer}>
                                {item.answer}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default FAQS