import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { useNavigation, StackActions } from '@react-navigation/native'

import { styles } from './Style'
import ProfileInput from '../../components/ProfileInput'
// import LottieView from 'lottie-react-native'
import { firebase } from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import FastImage from 'react-native-fast-image'
import { colors } from '../../style/Colors'
import NotificationHeader from '../../components/NotificationHeader'
import { getUserData } from '../../utils/userData'
import Toast from 'react-native-toast-message'

const EditProfile = () => {

    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState();
    const [currentUser, setCurrentUser] = useState();

    const [userData, setUserData] = useState({
        name: '',
        number: '',
        emergencyNumber: '',
        address: '',
    })


    const getUserInfo = async () => {
        try {
            const data = await getUserData();
            setUserInfo(data);
            let user = auth().currentUser;
            setCurrentUser(user)
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error Found While Getting Data!',
                text2: `${error}`
            })
        }
    }

    const handleUploadingData = async () => {
        try {
            firebase
                .firestore()
                .collection('users')
                .doc(`${currentUser.uid}`)
                .update({
                    name: userData.name,
                    number: userData.number,
                    emergencyNumber: userData.emergencyNumber,
                    address: userData.address,
                }).then(() => {
                    Toast.show({
                        type: 'success',
                        text1: 'Successfully Updated!',
                        text2: 'Your Data is successfully Updated.'
                    });
                })
        } catch (error) {
            Toast.show({
                type: 'success',
                text1: 'Error While Uploading.',
                text2: `Error Message : ${error.message}`
            })
        }
    }

    useEffect(() => {
        getUserInfo();
    }, [userData])

    return (
        userInfo ?
            <View style={styles.container}>
                <NotificationHeader
                    title={'Edit Profile'}
                    onPress={() => navigation.goBack()}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.mainContainer}
                >

                    <ProfileInput
                        title={'Full Name'}
                        placeholder={userInfo.name}
                        onChangeText={(val) => {
                            setUserData((prevState) => ({
                                ...prevState,
                                name: val.length > 0 ? val : userInfo.name
                            }))
                        }}
                    />
                    <ProfileInput
                        title={'EMail address'}
                        placeholder={userInfo.email}
                        editable={false}
                    />
                    <ProfileInput
                        title={'Phone Number'}
                        placeholder={userInfo.number}
                        keyboardType={'numeric'}
                        onChangeText={(val) => {
                            setUserData((prevState) => ({
                                ...prevState,
                                number: val.length > 0 ? val : userInfo.number
                            }))
                        }}
                    />
                    <ProfileInput
                        title={'Emergency Phone Number'}
                        placeholder={userInfo.emergencyNumber}
                        keyboardType={'numeric'}
                        onChangeText={(val) => {
                            setUserData((prevState) => ({
                                ...prevState,
                                emergencyNumber: val.length > 0 ? val : userInfo.emergencyNumber
                            }))
                        }}
                    />
                    <ProfileInput
                        title={'Address'}
                        placeholder={userInfo.address}
                        onChangeText={(val) => {
                            setUserData((prevState) => ({
                                ...prevState,
                                address: val.length > 0 ? val : userInfo.address
                            }))
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ChangePassword')
                        }}
                    >
                        <Text style={styles.btnText}>
                            Change Password
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.discardBtn}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.discardBtnText}>
                                Discard
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.saveBtn}
                            onPress={handleUploadingData}
                        >
                            <Text style={styles.saveBtnText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
            :
            <View style={styles.lottieView}>

                <FastImage
                    source={require('../../../assets/images/loader.gif')}
                    style={styles.loader}
                    resizeMode={FastImage.resizeMode.center}
                    tintColor={colors.primaryColor}
                />

            </View>
    )
}

export default EditProfile