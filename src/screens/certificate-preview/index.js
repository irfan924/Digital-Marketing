import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    SafeAreaView
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './Style'
import { colors } from '../../style/Colors'
import { useNavigation } from '@react-navigation/native'
import Video from 'react-native-video'
import SecondaryButton from '../../components/SecondaryButton'
import VideoPlayer from '../../components/VideoPlayer'

const CertificatePreview = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Icon name='close-outline' size={36} color={colors.grey} />
            </TouchableOpacity>
            <ScrollView
                contentContainerStyle={styles.contentWrapper}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>
                    Digital Marketing Developer Course Completion Certificate
                </Text>
                <ImageBackground
                    source={require('../../../assets/images/certificate.png')}
                    style={styles.certificate}
                    resizeMode='center'
                >
                    <Text style={styles.title}>
                        Irfan Abbas
                    </Text>
                </ImageBackground>

                <View style={styles.videoWrapper}>
                    <Video
                        source={require('../../../assets/videos/dm1.mp4')}
                        style={styles.video}
                        controls={true}
                        paused={true}
                        
                    />
                    {/* <VideoPlayer
                        path={require('../../../assets/videos/dm1.mp4')}
                    /> */}
                </View>
                <Text style={{ ...styles.title, textAlign: 'center' }}>
                    Watch the benifits of certificate video
                </Text>
                <View style={styles.wrapper}>
                    <View style={styles.commonWrapper}>
                        <Icon name='checkmark-done' style={styles.icon} color={colors.gradient1} />
                        <Text style={styles.subTitle}>
                            Verified
                        </Text>
                    </View>
                    <View style={styles.commonWrapper}>
                        <Icon name='happy-outline' style={styles.icon} color={colors.primaryColorRGBA} />
                        <Text style={styles.subTitle}>
                            Proven Motivator
                        </Text>
                    </View>
                    <View style={styles.commonWrapper}>
                        <Icon name='share-social-outline' style={styles.icon} color={colors.secondaryColor} />
                        <Text style={styles.subTitle}>
                            Shareable
                        </Text>
                    </View>
                    <View style={styles.commonWrapper}>
                        <Icon name='thumbs-up-outline' style={styles.icon} color={colors.tertiaryColor} />
                        <Text style={styles.subTitle}>
                            Verified
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.btnWrapper}>
                <SecondaryButton title={'Download'} icon={'download-outline'} />
                <SecondaryButton title={'Share'} icon={'share-social-outline'} />
            </View>
        </SafeAreaView>
    )
}

export default CertificatePreview