import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { StackActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { firebase } from '@react-native-firebase/firestore'
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import FastImage from 'react-native-fast-image'
import { styles } from './Style'
import LoginInputs from '../../components/LoginInputs'
import PrimaryButton from '../../components/PrimaryButton'
import Bottomside from '../../components/Bottomside'
import { colors } from '../../style/Colors'

import Toast from 'react-native-toast-message'

const Login = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '778074298721-762vt30m12gqsjkj09drk4e62oihtjl0.apps.googleusercontent.com',
            offlineAccess: false
        });

    }, [])

    const navigation = useNavigation();

    const [isSecure, setIsSecure] = useState(true);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleUser = () => {
        setIsLoading(true)
        const user = auth().currentUser;
        if (userInfo.email, userInfo.password) {
            auth()
                .signInWithEmailAndPassword(userInfo.email, userInfo.password)
                .then(() => {

                    if (auth().currentUser.emailVerified == true) {
                        Toast.show({
                            type: 'success',
                            text1: 'Congrats!',
                            text2: 'Successfully Logged In'
                        });
                        setUserInfo({ name: '', email: '', });

                    } else {
                        Toast.show({
                            type: 'error',
                            text1: 'Email Verification',
                            text2: 'Please check your inbox and vrify your email',
                            position: 'bottom'
                        });
                        auth().currentUser.sendEmailVerification().then(() => {
                            Toast.show({
                                type: 'success',
                                text1: 'Email Sent',
                                text2: `Email sent Successfully at ${auth().currentUser.email} `,
                                position: 'bottom'
                            })
                        })
                    }
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        Toast.show({
                            type: 'error',
                            text1: 'Already in Use',
                            text2: 'This Email is already taken. Please try again with a different email.',
                            position: 'bottom'
                        });
                    } else if (error.code === 'auth/invalid-email') {
                        Toast.show({
                            type: 'error',
                            text1: 'Invalid Email',
                            text2: 'The email address is invalid. Please check and try again.',
                            position: 'bottom'
                        });
                    } else if (error.code === 'auth/user-not-found') {
                        Toast.show({
                            type: 'error',
                            text1: 'User Not Found',
                            text2: 'There is no user corresponding to this email. Please check and try again.',
                            position: 'bottom'
                        });
                    } else if (error.code === 'auth/wrong-password') {
                        Toast.show({
                            type: 'error',
                            text1: 'Wrong Password',
                            text2: 'The password is incorrect. Please check and try again.',
                            position: 'bottom'
                        });
                    } else {
                        Toast.show({
                            type: 'error',
                            text1: 'Wrong Password',
                            text2: 'The password is incorrect. Please check and try again.',
                            position: 'bottom'
                        });
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                    navigation.dispatch(StackActions.replace('Drawer'));
                })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Empty Fields',
                text2: 'Please Enter all required data.',
                position: 'bottom'
            })
        }
    }

    const handleGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            let res = await auth().signInWithCredential(googleCredential);

            const { uid, displayName, email, photoURL } = res.user;
            await firebase
                .firestore()
                .collection('users')
                .doc(`${auth().currentUser.uid}`)
                .set({
                    name: displayName,
                    email: email,
                    logoUrl: photoURL,
                });
            Toast.show({
                type: 'success',
                text1: 'Congrats!',
                text2: 'Successfully Logedin'
            });
            navigation.dispatch(StackActions.replace('Drawer'));
        } catch (error) {
            switch (error.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    Toast.show({
                        type: 'error',
                        text1: 'Cancel',
                        text2: 'You are cance the google Dialog Box'
                    })
                    break;
                case statusCodes.IN_PROGRESS:
                    Toast.show({
                        type: 'error',
                        text1: 'In Progress',
                        text2: '(eg. sign in) already in progress'
                    })
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    Toast.show('Not Available', 'play services not available or outdated')
                    Toast.show({
                        type: 'error',
                        text1: 'Not Available',
                        text2: 'Play services not available or outdated'
                    })
                    break;
                default:
                    Toast.show({
                        type: 'error',
                        text1: 'Error Found',
                        text2: `${error}`
                    })
            }
        }
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <FastImage
                    source={require('../../../assets/images/login.png')}
                    style={styles.upperView}
                    resizeMode={FastImage.resizeMode.center}
                />
                <View style={styles.absoluteContent}>
                    <Text style={styles.subTitle}>
                        Hey! Welcome Back
                    </Text>
                    <Text style={styles.summary}>
                        Please Enter Your Email and Password To Login
                    </Text>
                    <View style={styles.inputView}>
                        <LoginInputs
                            placeholder={'your@email.com'}
                            icon={'mail-outline'}
                            onChangeText={(val) => setUserInfo((prevState) => ({
                                ...prevState,
                                email: val
                            }))}
                            value={userInfo.email}
                        />
                        <LoginInputs
                            placeholder={'Password'}
                            icon={isSecure ? 'eye-off-outline' : 'eye-outline'}
                            onPress={() => setIsSecure(!isSecure)}
                            secureTextEntry={isSecure}
                            onChangeText={(val) => setUserInfo((prevState) => ({
                                ...prevState,
                                password: val
                            }))}
                            value={userInfo.password}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ResetPassword');
                            }}
                        >
                            <Text style={{ ...styles.btnText, alignSelf: 'flex-end', }}>
                                Reset Password!
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <PrimaryButton
                        title={'Login'}
                        onPress={handleUser}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.btnText}>
                            Don't Have an Account ? SignUp
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.dividerWrapper}>
                        <View style={styles.divider}></View>
                        <Text style={styles.dividerText}>
                            Or Continue With
                        </Text>
                        <View style={styles.divider}></View>
                    </View>

                    <TouchableOpacity
                        style={{ ...styles.loginBtn, backgroundColor: colors.ornage }}
                        onPress={handleGoogle}
                    >
                        <View style={styles.logoView}>
                            <Icon name='logo-google' size={24} color={colors.ornage} />
                        </View>
                        <Text style={styles.loginBtnText}>
                            Google
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <Bottomside />
            {
                isLoading &&
                <View style={styles.loadingContainer}>
                    <View style={styles.imgBG}>
                        <FastImage
                            source={require('../../../assets/images/loader.gif')}
                            resizeMode={FastImage.resizeMode.center}
                            tintColor={colors.primaryColor}
                            style={styles.img}
                        />
                    </View>
                </View>
            }

        </View>
    )
}

export default Login