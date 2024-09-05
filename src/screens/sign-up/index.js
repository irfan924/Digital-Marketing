import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native'
import { styles } from './Style'

import Icon from 'react-native-vector-icons/Ionicons'
import { StackActions, useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'
import { firebase } from '@react-native-firebase/firestore'
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import FastImage from 'react-native-fast-image'
import LoginInputs from '../../components/LoginInputs'
import PrimaryButton from '../../components/PrimaryButton'
import { colors } from '../../style/Colors'
import Topside from '../../components/Topside'
import Toast from 'react-native-toast-message'
import { encryptData } from '../../utils/encryption'




const SignUp = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '778074298721-762vt30m12gqsjkj09drk4e62oihtjl0.apps.googleusercontent.com',
            offlineAccess: false
        });

    }, [])

    const [isSecure, setIsSecure] = useState(true);

    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)

    // const handleUser = () => {
    //     if (userInfo.name && userInfo.email && userInfo.password) {
    //         const userCredential = auth()
    //             .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    //             .then(async () => {
    //                 setLoading(true);
    //                 await firebase
    //                     .firestore()
    //                     .collection('users')
    //                     .doc(`${auth().currentUser.uid}`)
    //                     .set({
    //                         name: userInfo.name,
    //                         email: userInfo.email,
    //                         password: encryptData(userInfo.password),
    //                         logoUrl: '',
    //                     });
    //                 Toast.show({ text1: 'Congrats', text2: 'Successfully Created Your Account.' });
    //                 setUserInfo((prev) => ({
    //                     name: '',
    //                     email: '',
    //                     password: '',
    //                 }))
    //                 auth().currentUser.sendEmailVerification();


    //             })
    //             .catch(error => {
    //                 if (error.code === 'auth/email-already-in-use') {
    //                     Toast.show({
    //                         type: 'error',
    //                         text1: 'Already in Use',
    //                         text2: 'This Email has Already Taken Please try agin with different email.'
    //                     })
    //                 }

    //                 if (error.code === 'auth/invalid-email') {
    //                     showAlert('Invalid Email', 'That email address is invalid!');
    //                     Toast.show({
    //                         type: 'error',
    //                         text1: 'Invalid Email',
    //                         text2: 'That email address is invalid!'
    //                     })
    //                 }

    //                 console.error(error);
    //             })
    //             .finally(() => {
    //                 setLoading(false)
    //                 navigation.navigate('Login');
    //                 Toast.show({
    //                     type: 'success',
    //                     text1: 'Email Send',
    //                     text2: 'Please Check your email inbox and verify your email.'
    //                 })
    //             })

    //     } else {
    //         Toast.show({
    //             type: 'info',
    //             text1: 'Empty Fields!',
    //             text2: 'Please Enter all required data to Regiester Yourself.'
    //         })
    //     }

    // }

    const handleUser = () => {
        setLoading(true);
        if (userInfo.name && userInfo.email && userInfo.password) {
            auth()
                .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
                .then(async (userCredential) => {
                    const uid = userCredential.user.uid;
                    await firebase
                        .firestore()
                        .collection('users')
                        .doc(uid)
                        .set({
                            name: userInfo.name,
                            email: userInfo.email,
                            password: encryptData(userInfo.password), // Ensure password is encrypted
                            logoUrl: '', // Default empty logo URL
                        });
                    Toast.show({ text1: 'Congrats', text2: 'Successfully Created Your Account.' });
                    setUserInfo({
                        name: '',
                        email: '',
                        password: '',
                    });

                    userCredential.user.sendEmailVerification();

                    navigation.navigate('Login');
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        Toast.show({
                            type: 'error',
                            text1: 'Already in Use',
                            text2: 'This email has already been taken. Please try again with a different email.',
                        });
                    } else if (error.code === 'auth/invalid-email') {
                        Toast.show({
                            type: 'error',
                            text1: 'Invalid Email',
                            text2: 'That email address is invalid!',
                        });
                    } else {
                        Toast.show({
                            type: 'error',
                            text1: 'Registration Error',
                            text2: 'An error occurred during registration. Please try again.',
                        });
                        console.error(error);
                    }
                })
                .finally(() => {
                    setLoading(false)
                    Toast.show({
                        type: 'success',
                        text1: 'Email Sent',
                        text2: 'Please check your email inbox and verify your email.',
                    });
                });
        } else {
            Toast.show({
                type: 'info',
                text1: 'Empty Fields!',
                text2: 'Please enter all required data to register yourself.',
            });
        }
    };


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
            <Topside />
            <ScrollView>
                <FastImage
                    source={require('../../../assets/images/login.png')}
                    style={styles.upperView}
                    resizeMode={FastImage.resizeMode.center}
                />
                <View style={styles.absoluteContent}>
                    <Text style={styles.subTitle}>
                        Please Register Yourself
                    </Text>
                    <Text style={styles.summary}>
                        We are happy that you are Here
                    </Text>
                    <View style={styles.inputView}>
                        <LoginInputs
                            placeholder={'John Doe'}
                            icon={'person-outline'}
                            onChangeText={(val) => setUserInfo((prevState) => ({
                                ...prevState,
                                name: val
                            }))}
                            value={userInfo.name}
                        />
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
                    </View>
                    <PrimaryButton
                        title={'Signup'}
                        onPress={handleUser}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    >
                        <Text style={styles.btnText}>
                            Already Have an Account ? Login
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

            {
                loading &&
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

export default SignUp