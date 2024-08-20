import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import CourseDetail from '../screens/course-detail';
import CourseOutline from '../screens/course-outline';
import ChatHeader from '../components/ChatHeader';
import { colors } from '../style/Colors';
import { fonts } from '../style/Fonts';

const CourseDetailNavigation = () => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.primaryColor,
                    height: 56,
                    borderBottomLeftRadius: 26,
                    borderBottomRightRadius: 26,
                },
                tabBarActiveTintColor: colors.accentColor,
                // tabBarInactiveTintColor: colors.green,
                tabBarLabelStyle: {
                    fontWeight: '800',
                    textTransform: 'capitalize',
                    letterSpacing: 1,
                    fontSize: 16,
                    fontFamily: fonts.PoppinsRegular
                },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.accentColor,
                    height: 8,
                    width: '35%',
                    marginHorizontal: 34,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                }
            }}
        >
            <Tab.Screen name='Details' component={CourseDetail} />
            <Tab.Screen name='Outline' component={CourseOutline} />
        </Tab.Navigator>
    )
}

export default CourseDetailNavigation

const styles = StyleSheet.create({})