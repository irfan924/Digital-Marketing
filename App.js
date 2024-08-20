import { StatusBar, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from './src/style/Colors'

import DrawerNavigation from './src/navigations/DrawerNavigation'
import BottomTab from './src/navigations/BottomTab'
import Profile from './src/screens/profile'
import CourseDetail from './src/screens/course-detail'
import CourseOutline from './src/screens/course-outline'
import CourseDetailNavigation from './src/navigations/CourseDetailNavigation'
import CourseHeader from './src/components/CourseHeader'


const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primaryColor} />
      <Stack.Navigator screenOptions={{}} >
        <Stack.Screen name='Drawer'
          component={DrawerNavigation}
          options={{ header: () => '' }}
        />
        <Stack.Screen
          name='Tab'
          component={BottomTab}
          options={{ header: () => '' }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ header: () => '' }}
        />
        <Stack.Screen
          name='CourseDetail'
          component={CourseDetail}
          options={{ header: () => '' }}
        />
        <Stack.Screen
          name='CourseOutline'
          component={CourseOutline}
          options={{ header: () => '' }}
        />
        <Stack.Screen
          name='CourseDesc'
          component={CourseDetailNavigation}
          options={{
            header: () => <CourseHeader title={'Digital Marketing'}/>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App