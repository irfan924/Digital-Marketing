import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTab from './BottomTab';
import { colors } from '../style/Colors';

import Icon from 'react-native-vector-icons/Ionicons'
import Profile from '../screens/profile';
import FastImage from 'react-native-fast-image';
import { globalStyles } from '../style/globalStyle';
import Settings from '../screens/settings';
import RateUs from '../screens/rate-us';
import FollowUs from '../screens/follow-us';
import { getUserData } from '../utils/userData';
import Toast from 'react-native-toast-message';

const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();

    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        await getUserData()
            .then((data) => {
                setUserData(data);
            })
            .catch(() => {
                Toast.show({
                    type: 'error',
                    text1: 'Error Found',
                    text2: 'Error Found while getting user information'
                })
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getData();
    }, [])

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <View style={styles.imgBG}>
                    <FastImage
                        source={require('../../assets/images/loader.gif')}
                        resizeMode={FastImage.resizeMode.center}
                        tintColor={colors.primaryColor}
                        style={styles.img}
                    />
                </View>
            </View>

        )
    }

    return (
        <>
            <Drawer.Navigator
                initialRouteName='BottomTab'
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: colors.bgColor,
                        width: 300,
                        paddingVertical: 16,
                    },
                    drawerActiveBackgroundColor: 'transparent',
                }}>
                <Drawer.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        drawerLabel: () => { },
                        drawerIcon: ((focused) =>
                            <View style={styles.container}>
                                <View style={styles.imgWrapper}>
                                    <FastImage
                                        source={{
                                            uri: userData ? userData.logoUrl : 'https://firebasestorage.googleapis.com/v0/b/digital-marketing-93c7a.appspot.com/o/logos%2Favatar2.png?alt=media&token=99403b72-3d14-4e54-94d5-0ae20bee4879'
                                        }}
                                        style={styles.img}
                                        resizeMode={FastImage.resizeMode.center}
                                    />
                                </View>
                                <View style={styles.dataWrapper}>
                                    <View>
                                        <Text style={globalStyles.mainTitle}>
                                            {userData ? userData.name : <ActivityIndicator size={16} color={colors.primaryColor} />}
                                        </Text>
                                        <Text style={globalStyles.para}>
                                            {userData ? userData.email : <ActivityIndicator size={16} color={colors.primaryColor} />}
                                        </Text>
                                    </View>
                                    <Icon name='chevron-forward' style={styles.icon} />
                                </View>
                            </View>
                        )
                    }}
                />
                <Drawer.Screen
                    name='BottomTab'
                    component={BottomTab}
                    options={{
                        drawerLabel: () => { },
                        drawerIcon: ((focused) =>
                            <View style={styles.content}>
                                <Icon
                                    name='home-outline'
                                    color={focused ? colors.primaryColor : colors.primaryColorRGBA}
                                    size={24}
                                />
                                <Text style={globalStyles.para}>Home</Text>
                            </View>
                        )
                    }}
                />
                <Drawer.Screen
                    name='Settings'
                    component={Settings}
                    options={{
                        drawerLabel: () => { },
                        drawerIcon: ((focused) =>
                            <View style={styles.content}>
                                <Icon
                                    name='settings-outline'
                                    color={focused ? colors.primaryColor : colors.primaryColorRGBA}
                                    size={24}
                                />
                                <Text style={globalStyles.para}>Settings</Text>
                            </View>
                        )
                    }}
                />
                <Drawer.Screen
                    name='RateUs'
                    component={RateUs}
                    options={{
                        drawerLabel: () => { },
                        drawerIcon: ((focused) =>
                            <View style={styles.content}>
                                <Icon
                                    name='star-outline'
                                    color={focused ? colors.primaryColor : colors.primaryColorRGBA}
                                    size={24}
                                />
                                <Text style={globalStyles.para}>Rate Us</Text>
                            </View>
                        )
                    }}
                />
                <Drawer.Screen
                    name='FollowUs'
                    component={FollowUs}
                    options={{
                        drawerLabel: () => { },
                        drawerIcon: ((focused) =>
                            <View style={styles.content}>
                                <Icon
                                    name='share-social-outline'
                                    color={focused ? colors.primaryColor : colors.primaryColorRGBA}
                                    size={24}
                                />
                                <Text style={globalStyles.para}>Follow Us</Text>
                            </View>
                        )
                    }}
                />
            </Drawer.Navigator>

        </>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({
    container: {
        gap: 12,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.primaryColorRGBA,
        width: '100%',
        marginBottom: 16,
    },
    content: {
        gap: 24,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.primaryColorRGBA,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    imgWrapper: {
        width: 150,
        height: 150,
        borderRadius: 75,
        padding: 4,
        backgroundColor: colors.accentColor,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '90%',
        height: '90%'
    },
    dataWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    icon: {
        fontSize: 20,
        color: colors.textColor
    },
    loadingContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBG: {
        width: '60%',
        height: '20%',
        backgroundColor: colors.accentColor,
        borderRadius: 4
    },
    imgbg: {
        width: '100%',
        height: '100%'
    }
})