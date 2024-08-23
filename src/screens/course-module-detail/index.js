import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native'

import { styles } from './Style'
import ModuleHeader from '../../components/ModuleHeader'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

import Icon from 'react-native-vector-icons/Ionicons'
import { globalStyles } from '../../style/globalStyle'
import PrimaryButton from '../../components/PrimaryButton'

import { moduleDetails } from '../../utils/moduleDetail'

import Tts from 'react-native-tts'

const ModuleDetail = () => {

    const navigation = useNavigation();

    const [audioState, setAudioState] = useState(true);
    const [detail, setDetail] = useState();

    const handleSpeach = () => {
        setAudioState(!audioState)
        Tts.stop();
    }

    useEffect(() => {
        moduleDetails.map((item) =>
            setDetail(item.desc)
        )
        if (audioState === true) {
            Tts.speak(`${detail}`);
        }
    }, [handleSpeach])

    const handleBack = () => {
        setAudioState(false);
        Tts.stop();
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ModuleHeader
                closePress={handleBack}
                audioPress={handleSpeach}
                sharePress={() => Alert.alert('Share Button Pressed', 'Hey This Feature is under maintenence')}
                audioState={audioState}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentWrapper}
            >
                {
                    moduleDetails.map((item, index) => (
                        <View key={index} style={{ gap: 12 }}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <TouchableOpacity
                                style={styles.imgBtn}
                            >
                                <FastImage
                                    source={item.imgUrl}
                                    style={styles.img}
                                    resizeMode={FastImage.resizeMode.center}
                                />
                                <Icon
                                    name='scan-outline'
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            {
                                item.desc.split('.').map((list, index) =>
                                    <Text style={globalStyles.modulePara} key={index}>
                                        {list}
                                    </Text>
                                )
                            }
                        </View>
                    ))
                }

                <PrimaryButton title={'Next'} />
            </ScrollView>
        </View>
    )
}

export default ModuleDetail