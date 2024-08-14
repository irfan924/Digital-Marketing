import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
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

const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();

    return (
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
                                    source={require('../../assets/images/award.png')}
                                    style={styles.img}
                                    resizeMode={FastImage.resizeMode.center}
                                />
                            </View>
                            <View style={styles.dataWrapper}>
                                <View>
                                    <Text style={globalStyles.mainTitle}>
                                        Irfan Abbas
                                    </Text>
                                    <Text style={globalStyles.para}>
                                        irfanmahar429@gmail.com
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
    }
})