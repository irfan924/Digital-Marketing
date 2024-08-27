import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Onboard1 from '../screens/onboard-1';
import Onboard2 from '../screens/onboard-2';
import Onboard3 from '../screens/onboard-3';

const OnboardingNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Onboard1' component={Onboard1} />
            <Stack.Screen name='Onboard2' component={Onboard2} />
            <Stack.Screen name='Onboard3' component={Onboard3} />
        </Stack.Navigator>
    )
}

export default OnboardingNavigation