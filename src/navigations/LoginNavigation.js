import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../screens/login';
import SignUp from '../screens/sign-up';

const LoginNavigation = () => {

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login'  component={Login} />
        <Stack.Screen name='Signup'  component={SignUp} />
    </Stack.Navigator>
  )
}

export default LoginNavigation