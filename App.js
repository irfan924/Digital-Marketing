import { StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from './src/style/Colors'

import DrawerNavigation from './src/navigations/DrawerNavigation'
import BottomTab from './src/navigations/BottomTab'


const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primaryColor}  />
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Drawer' component={DrawerNavigation} />
        <Stack.Screen name='Tab' component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App