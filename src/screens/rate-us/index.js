import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Modal,
    TextInput
} from 'react-native'
import { styles } from './Style'
import { useNavigation } from '@react-navigation/native'
import NotificationHeader from '../../components/NotificationHeader'
import FastImage from 'react-native-fast-image'
import { globalStyles } from '../../style/globalStyle'
import PrimaryButton from '../../components/PrimaryButton'
import { colors } from '../../style/Colors'
import Icon from 'react-native-vector-icons/Ionicons'

const RateUs = () => {

    const navigation = useNavigation();

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.container}>
            <NotificationHeader title={'Rate Us'} onPress={() => navigation.goBack()} />
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={[styles.commonContainer, globalStyles.boxShadow]}>
                    <Text style={{ ...globalStyles.para, textAlign: 'center' }}>
                        Your rating and feedback will help us make the app better and deliver the best experience to you.
                    </Text>
                    <FastImage
                        source={require('../../../assets/images/feedback.gif')}
                        style={{ width: 200, height: 150 }}
                        resizeMode={FastImage.resizeMode.center}
                    />
                    <Text style={{ ...globalStyles.mainTitle, fontSize: 16 }}>
                        Love the app? rate us on Playstore
                    </Text>
                    <PrimaryButton
                        title={'Rate Now'}
                        onPress={() => navigation.navigate('RateNow')}
                    />
                </View>
                <View style={styles.dividerWrapper}>
                    <View style={styles.divider}></View>
                    <Text style={globalStyles.para}>OR</Text>
                    <View style={styles.divider}></View>
                </View>
                <View style={[styles.commonContainer, globalStyles.boxShadow]}>
                    <FastImage
                        source={require('../../../assets/images/feedback.gif')}
                        style={{ width: 200, height: 150 }}
                        resizeMode={FastImage.resizeMode.center}
                    />
                    <Text style={{ ...globalStyles.mainTitle, fontSize: 16 }}>
                        Have some feedback or suggestion
                    </Text>
                    <PrimaryButton
                        title={'Suggestion'}
                        onPress={() => setIsVisible(!isVisible)}
                    />
                </View>
            </ScrollView>
            <Modal
                visible={isVisible}
                transparent={true}
                animationType='slide'
            >
                <View style={styles.modal}>
                    <View style={styles.innerModal}>
                        <Icon
                            name='close'
                            size={24}
                            color={colors.grey}
                            onPress={() => setIsVisible(!isVisible)}
                        />
                        <Text style={{ ...globalStyles.mainTitle, textAlign: 'center' }}>
                            Give Feedback
                        </Text>
                        <TextInput
                            placeholder='Enter Your feedback / suggestion'
                            numberOfLines={10}
                            style={styles.input}
                        />
                        <PrimaryButton
                            title={'Submit'}
                            onPress={()=> setIsVisible(!isVisible)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default RateUs