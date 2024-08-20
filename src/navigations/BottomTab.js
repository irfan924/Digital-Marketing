import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

// Custom Colors and Fonts
import { colors } from '../style/Colors';

// Pages or Screens
import Icon from 'react-native-vector-icons/Ionicons';

// BottomTab Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home';
import Progress from '../screens/progress';
import Pro from '../screens/pro';
import Chat from '../screens/chat';
import FastImage from 'react-native-fast-image';
import { fonts } from '../style/Fonts';



const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.bgColor,
                height: 66,
            },

        }}>

            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name={focused ? 'home' : 'home-outline'}
                                size={24}
                                color={focused ? colors.primaryColor : colors.primaryColorRGBA}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? colors.primaryColor : colors.primaryColorRGBA
                            }}>
                                Home
                            </Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name='MyCourses' component={Progress}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name={focused ? 'book' : 'book-outline'}
                                size={24}
                                color={focused ? colors.primaryColor : colors.primaryColorRGBA}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? colors.primaryColor : colors.primaryColorRGBA
                            }}>
                                Progress
                            </Text>

                        </View>
                    )
                }}
            />

            <Tab.Screen name='Chat' component={Chat}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                                size={24}
                                color={focused ? colors.primaryColor : colors.primaryColorRGBA}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? colors.primaryColor : colors.primaryColorRGBA
                            }}>
                                Ask Arya
                            </Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name='Pro' component={Pro}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>
                            <FastImage
                                source={
                                    focused ?
                                    require('../../assets/images/crown.png')
                                    :
                                    require('../../assets/images/crown-outline.png')
                                }
                                style={{ width: 25, height: 25 }}
                                resizeMode={FastImage.resizeMode.cover}
                                tintColor={focused ? colors.primaryColor : colors.primaryColorRGBA}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? colors.primaryColor : colors.primaryColorRGBA
                            }}>
                                Pro
                            </Text>
                        </View>
                    ),
                    tabBarStyle: {display: 'none'}
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        gap: 4,
        paddingVertical: 4,
    },
    text: {
        fontSize: 14,
        letterSpacing: 0.5,
        fontFamily: fonts.PoppinsRegular
    },
})