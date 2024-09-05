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
import Toast from 'react-native-toast-message';
import Splash from './src/screens/splash'
import SystemNavigationBar from 'react-native-system-navigation-bar'
import Disconnected from './src/screens/disconnected'
import EditProfile from './src/screens/edit-profile'
import ChangePassword from './src/screens/change-password'


const App = () => {

  const Stack = createStackNavigator();

  SystemNavigationBar.setNavigationColor(colors.primaryColor);
  SystemNavigationBar.navigationHide()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primaryColor} />
      <Stack.Navigator screenOptions={{}} >
        <Stack.Screen name='Splash' component={Splash} options={{ header: () => '' }} />
        <Stack.Screen name='Onboarding' component={OnboardingNavigation} options={{ header: () => '' }} />
        <Stack.Screen name='LoginNavigation' component={LoginNavigation} options={{ header: () => '' }} />
        <Stack.Screen name='Drawer' component={DrawerNavigation} options={{ header: () => '' }} />
        <Stack.Screen name='Tab' component={BottomTab} options={{ header: () => '' }} />
        <Stack.Screen name='Profile' component={Profile} options={{ header: () => '' }} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{ header: () => '' }} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} options={{ header: () => '' }} />
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
        <Stack.Screen name='Disconnected' component={Disconnected} options={{ header: () => '' }} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  )
}

export default App