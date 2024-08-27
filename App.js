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
import ModuleDetail from './src/screens/course-module-detail'
import CertificatePreview from './src/screens/certificate-preview'
import Notifications from './src/screens/notifications'
import Sound from './src/screens/sound'
import HelpAndFAQ from './src/screens/help&faq'
import Help from './src/screens/help'
import FAQS from './src/screens/faqs'
import Science from './src/screens/science-behind-learning'
import Blogs from './src/screens/blogs'
import BlogDetail from './src/screens/blog-detail'
import TermsAndPrivacy from './src/screens/terms-and-privacy-policy'
import Terms from './src/screens/terms-and-conditions'
import PrivacyPolicy from './src/screens/privacy-policy'
import RateNow from './src/screens/rate-now'
import OnboardingNavigation from './src/navigations/OnboardingNavigation'
import ResetPassword from './src/screens/reset-password'
import LoginNavigation from './src/navigations/LoginNavigation'


const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primaryColor} />
      <Stack.Navigator screenOptions={{}} >

        <Stack.Screen name='Onboarding' component={OnboardingNavigation} options={{ header: () => '' }} />
        <Stack.Screen name='LoginNavigation' component={LoginNavigation} options={{ header: () => '' }} />
        <Stack.Screen name='Drawer' component={DrawerNavigation} options={{ header: () => '' }} />
        <Stack.Screen name='Tab' component={BottomTab} options={{ header: () => '' }} />
        <Stack.Screen name='Profile' component={Profile} options={{ header: () => '' }} />
        <Stack.Screen name='CourseDetail' component={CourseDetail} options={{ header: () => '' }} />
        <Stack.Screen name='CourseOutline' component={CourseOutline} options={{ header: () => '' }} />
        <Stack.Screen
          name='CourseDesc'
          component={CourseDetailNavigation}
          options={{
            header: () => <CourseHeader title={'Digital Marketing'} />
          }}
        />
        <Stack.Screen name='ModuleDetail' component={ModuleDetail} options={{ header: () => '' }} />
        <Stack.Screen name='CertificatePreview' component={CertificatePreview} options={{ header: () => '' }} />
        <Stack.Screen name='Notifications' component={Notifications} options={{ header: () => '' }} />
        <Stack.Screen name='Sound' component={Sound} options={{ header: () => '' }} />
        <Stack.Screen name='HelpAndFAQ' component={HelpAndFAQ} options={{ header: () => '' }} />
        <Stack.Screen name='Help' component={Help} options={{ header: () => '' }} />
        <Stack.Screen name='FAQS' component={FAQS} options={{ header: () => '' }} />
        <Stack.Screen name='Science' component={Science} options={{ header: () => '' }} />
        <Stack.Screen name='Blogs' component={Blogs} options={{ header: () => '' }} />
        <Stack.Screen name='BlogDetail' component={BlogDetail} options={{ header: () => '' }} />
        <Stack.Screen name='TermsAndPrivacy' component={TermsAndPrivacy} options={{ header: () => '' }} />
        <Stack.Screen name='Terms' component={Terms} options={{ header: () => '' }} />
        <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ header: () => '' }} />
        <Stack.Screen name='RateNow' component={RateNow} options={{ header: () => '' }} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ header: () => '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App