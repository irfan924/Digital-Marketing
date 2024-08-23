import React from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

import { globalStyles } from '../../style/globalStyle'
import { styles } from './style'

import PrimaryHeader from '../../components/PrimaryHeader'
import CustomSwiper from '../../components/CustomSwiper'
import { images } from '../../utils/customImages'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../style/Colors'
import RightLines from '../../components/RightLines'
import LeftLines from '../../components/LeftLines'
import { useNavigation } from '@react-navigation/native'

const Home = () => {


    const navigation = useNavigation();

    return (
        <View style={globalStyles.conatiner}>
            <PrimaryHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollWrapper}
            >
                <View style={styles.swipper}>
                    <CustomSwiper item={images} height={150} />
                </View>
                <View style={styles.courses}>
                    <Text style={globalStyles.mainTitle}>
                        Courses
                    </Text>
                    <View style={styles.commonWrapper}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('CourseDesc',{title: 'Digital Marketing'})}
                        >
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.linearBtn}
                            >
                                <Text style={styles.newTitle}>
                                    New
                                </Text>
                                <FastImage
                                    source={require('../../../assets/images/dm1.png')}
                                    resizeMode={FastImage.resizeMode.center}
                                    style={styles.img}
                                />
                            </LinearGradient>
                            <Text style={styles.courseName}>
                                Digital Marketing
                            </Text>
                        </TouchableOpacity>
                        <RightLines />
                    </View>
                    <View style={{ ...styles.commonWrapper, }}>
                        <LeftLines />
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('CourseDesc',{title: 'Digital Marketing'})}
                        >
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.linearBtn}
                            >
                                <Text style={styles.newTitle}>
                                    New
                                </Text>
                                <FastImage
                                    source={require('../../../assets/images/dm2.png')}
                                    resizeMode={FastImage.resizeMode.center}
                                    style={styles.img}
                                />
                            </LinearGradient>
                            <Text style={styles.courseName}>
                                Digital Marketing
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commonWrapper}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('CourseDesc',{title: 'Digital Marketing'})}
                        >
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.linearBtn}
                            >
                                <Text style={styles.newTitle}>
                                    New
                                </Text>
                                <FastImage
                                    source={require('../../../assets/images/dm3.png')}
                                    resizeMode={FastImage.resizeMode.center}
                                    style={styles.img}
                                />
                            </LinearGradient>
                            <Text style={styles.courseName}>
                                Digital Marketing
                            </Text>
                        </TouchableOpacity>
                        <RightLines />
                    </View>
                    <View style={{ ...styles.commonWrapper, }}>
                        <LeftLines />
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('CourseDesc',{title: 'Digital Marketing'})}
                        >
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.linearBtn}
                            >
                                <Text style={styles.newTitle}>
                                    New
                                </Text>
                                <FastImage
                                    source={require('../../../assets/images/dm4.png')}
                                    resizeMode={FastImage.resizeMode.center}
                                    style={styles.img}
                                />
                            </LinearGradient>
                            <Text style={styles.courseName}>
                                Digital Marketing
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ ...styles.commonWrapper, height: 250 }}>
                        <TouchableOpacity
                            style={styles.btn}
                            disabled
                        >
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.linearBtn}
                            >
                                <FastImage
                                    source={require('../../../assets/images/award.png')}
                                    resizeMode={FastImage.resizeMode.center}
                                    style={styles.img}
                                />
                                <View style={styles.badgeLock}>
                                    <Text style={styles.subtitle}>
                                        Complete all courses to unlock the Badge
                                    </Text>
                                </View>
                            </LinearGradient>
                            <Text style={styles.courseName}>
                                Badge
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bgImgWrapper}>
                    <ImageBackground
                        source={require('../../../assets/images/bgStyle.png')}
                        resizeMode='cover'
                        style={styles.bgImg}
                    >
                        <FastImage
                            source={require('../../../assets/images/pencil.png')}
                            style={styles.baloonImg}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <View style={styles.textWrapper}>
                            <Text style={styles.title}>
                                Unlimited Access
                            </Text>
                            <Text style={styles.para}>
                                Get Verified Certifications, Premium Content and Exclusive Updates.
                            </Text>
                            <TouchableOpacity
                                style={styles.buyBtn}
                            >
                                <Text style={styles.buyBtnText}>
                                    Buy Lifetime
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home