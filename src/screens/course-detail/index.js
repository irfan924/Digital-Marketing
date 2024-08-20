import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../style/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image'

const CourseDetail = () => {

    const [visible, setVisible] = useState({
        moduleTwo: false,
        moduleThree: false,
        moduleFour: false,
        moduleFive: false,
        moduleSix: false,
        moduleSeven: false,
    })

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <LinearGradient
                            colors={[colors.primaryColor, colors.primaryColorRGBA]}
                            style={styles.iconBg}
                        >
                            <Icon name='megaphone-outline' style={styles.icon} />
                        </LinearGradient>
                        <View style={styles.headerContent}>
                            <Text style={styles.headerContentDesc}>
                                Introduction
                            </Text>
                            <Text style={styles.headerContentCount}>
                                0/7
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardContent}>
                        <LinearGradient
                            colors={[colors.gradient2, colors.green]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.startWrapper}
                        >
                            <Text style={styles.activeTitle}>
                                Welcome
                            </Text>
                            <View style={styles.activeTimeWrapper}>
                                <Icon name='time-outline' color={colors.textColor} size={16} />
                                <Text style={styles.timeCount}>5 min</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                            >
                                <Text style={styles.btnText}>
                                    Start
                                </Text>
                                <Icon name='caret-forward-outline' color={colors.textColor} size={24} />
                            </TouchableOpacity>
                        </LinearGradient>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                    </View>
                </View>

                {/* Module Two */}
                <View style={[visible.moduleTwo ? styles.card : styles.moduleWrapper]}>
                    <TouchableOpacity
                        style={[styles.commonHeader]}
                        onPress={() => {
                            setVisible((prevState) => ({
                                ...prevState,
                                moduleTwo: !visible.moduleTwo
                            }))
                        }}
                    >
                        <View style={styles.cardHeader}>
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.iconBg}
                            >
                                <Icon name='planet-outline' style={styles.icon} />
                            </LinearGradient>
                            <View style={styles.headerContent}>
                                <Text style={styles.headerContentDesc}>
                                    Offline Digital Marketing
                                </Text>
                                <Text style={styles.headerContentCount}>
                                    0/7
                                </Text>
                            </View>
                        </View>
                        <Icon
                            name={visible.moduleTwo ? 'chevron-up' : 'chevron-down'}
                            size={24}
                            color={colors.textColor}
                        />
                    </TouchableOpacity>
                    <View style={[visible.moduleTwo ? styles.cardContent : styles.none]}>

                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                    </View>
                </View>

                {/* Module Three */}
                <View style={styles.card}>
                    <TouchableOpacity
                        style={[styles.commonHeader]}
                        onPress={() => {
                            setVisible((prevState) => ({
                                ...prevState,
                                moduleThree: !visible.moduleThree
                            }))
                        }}
                    >
                        <View style={styles.cardHeader}>
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.iconBg}
                            >
                                <Icon name='globe-outline' style={styles.icon} />
                            </LinearGradient>
                            <View style={styles.headerContent}>
                                <Text style={styles.headerContentDesc}>
                                    Online Digital Marketing
                                </Text>
                                <Text style={styles.headerContentCount}>
                                    0/5
                                </Text>
                            </View>
                        </View>
                        <Icon
                            name={visible.moduleThree ? 'chevron-up' : 'chevron-down'}
                            size={24}
                            color={colors.textColor}
                        />
                    </TouchableOpacity>
                    <View style={[visible.moduleThree ? styles.cardContent : styles.none]}>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                    </View>
                </View>

                {/* Pro Version Start */}
                <View style={styles.proWrapper}>
                    <Icon
                        name='medal'
                        size={36}
                        color={colors.gradient1}
                    />
                    <Text style={styles.textPro}>
                        Pro
                    </Text>
                    <View style={styles.divider}></View>
                </View>

                {/* Module Four */}
                <View style={styles.card}>
                    <TouchableOpacity
                        style={[styles.commonHeader]}
                        onPress={() => {
                            setVisible((prevState) => ({
                                ...prevState,
                                moduleFour: !visible.moduleFour
                            }))
                        }}
                    >
                        <View style={styles.cardHeader}>
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.iconBg}
                            >
                                <Icon name='globe-outline' style={styles.icon} />
                            </LinearGradient>
                            <View style={styles.headerContent}>
                                <Text style={styles.headerContentDesc}>
                                    Search Engine Marketing SEM
                                </Text>
                                <Text style={styles.headerContentCount}>
                                    0/5
                                </Text>
                            </View>
                        </View>
                        <Icon
                            name={visible.moduleFour ? 'chevron-up' : 'chevron-down'}
                            size={24}
                            color={colors.textColor}
                        />
                    </TouchableOpacity>
                    <View style={[visible.moduleFour ? styles.cardContent : styles.none]}>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                    </View>
                </View>

                {/* Module Five */}
                <View style={styles.card}>
                    <TouchableOpacity
                        style={[styles.commonHeader]}
                        onPress={() => {
                            setVisible((prevState) => ({
                                ...prevState,
                                moduleFive: !visible.moduleFive
                            }))
                        }}
                    >
                        <View style={styles.cardHeader}>
                            <LinearGradient
                                colors={[colors.primaryColor, colors.primaryColorRGBA]}
                                style={styles.iconBg}
                            >
                                <Icon name='globe-outline' style={styles.icon} />
                            </LinearGradient>
                            <View style={styles.headerContent}>
                                <Text style={styles.headerContentDesc}>
                                    Search Engine Marketing SEM
                                </Text>
                                <Text style={styles.headerContentCount}>
                                    0/5
                                </Text>
                            </View>
                        </View>
                        <Icon
                            name={visible.moduleFive ? 'chevron-up' : 'chevron-down'}
                            size={24}
                            color={colors.textColor}
                        />
                    </TouchableOpacity>
                    <View style={[visible.moduleFive ? styles.cardContent : styles.none]}>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='code-slash' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='cafe-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                        <View style={styles.commonWrapper}>
                            <View style={styles.innerCommonWrapper}>
                                <Icon name='document-text-outline' style={styles.commonIcon} />
                                <Text style={styles.commonTitle}>
                                    Introduction to Digital Marketing
                                </Text>
                            </View>
                            <Icon name='chevron-forward' style={styles.forwardIcon} />
                        </View>
                    </View>
                </View>

                {/* Completion Button Test */}

                <LinearGradient
                    colors={[colors.gradient1, colors.gradient2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ width: '100%', borderRadius: 8 }}
                >
                    <TouchableOpacity
                        style={styles.testBtn}
                    >
                        <Text style={styles.testBtnText}>
                            Completion Test
                        </Text>
                        <FastImage
                            source={require('../../../assets/images/person.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={styles.img}
                        />
                    </TouchableOpacity>
                </LinearGradient>

            </ScrollView>
        </View>
    )
}

export default CourseDetail