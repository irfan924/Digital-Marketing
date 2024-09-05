import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { styles } from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../style/Colors';
import FastImage from 'react-native-fast-image';
import { globalStyles } from '../../style/globalStyle';
import PrimaryButton from '../../components/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';
import { getUserData } from '../../utils/userData';
import Toast from 'react-native-toast-message';
import { getAllImageUrls } from '../../utils/getAllImagesURLS';
import { firebase } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Profile = () => {
    const navigation = useNavigation();

    const badgeData = [
        { id: 1, title: 'Digital Marketing', imgUrl: require('../../../assets/images/dm1.png') },
        { id: 2, title: 'Social Media Marketing', imgUrl: require('../../../assets/images/dm2.png') },
        { id: 3, title: 'SEO', imgUrl: require('../../../assets/images/dm3.png') },
        { id: 4, title: 'Google Video Ads', imgUrl: require('../../../assets/images/dm4.png') },
        { id: 5, title: 'Google Display Ads', imgUrl: require('../../../assets/images/dm1.png') },
        { id: 6, title: 'Google Shopping Ads', imgUrl: require('../../../assets/images/dm2.png') },
        { id: 7, title: 'Growth Hacking', imgUrl: require('../../../assets/images/dm3.png') },
        { id: 8, title: 'Google Ads Measurements', imgUrl: require('../../../assets/images/dm4.png') },
        { id: 9, title: 'Digital Marketing Advanced', imgUrl: require('../../../assets/images/dm1.png') },
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [logoPath, setLogoPath] = useState();
    const [logoCheck, setLogoCheck] = useState();
    const [userInfo, setUserInfo] = useState(null);
    const [avatar, setAvatar] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUserInfo = async () => {
        try {
            const userData = await getUserData();
            setUserInfo(userData);
            const avatars = await getAllImageUrls('logos');
            setAvatar(avatars);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error Found',
                text2: 'Error retrieving user information or avatars.',
            });
        } finally {
            setLoading(false);
        }
    };

    const setUserData = async () => {
        try {
            if (logoPath) {

                await firebase.firestore().collection('users').doc(`${auth().currentUser.uid}`).update({
                    logoUrl: logoPath,
                }).then(() => {

                    Toast.show({
                        type: 'success',
                        text1: 'Changes Done',
                        text2: 'Successfully updated user profile picture.',
                    });

                    setIsModalVisible(false);
                })
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Not Selected',
                    text2: 'Please select any one avatar'
                })
            }

        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error Found',
                text2: `Error updating avatar: ${error.message}`,
            });
        }
    };

    const handleSignOut = async () => {
        try {
            await auth().signOut();

            Toast.show({
                type: 'success',
                text1: 'Successfully Signed Out',
                text2: 'Your account has been successfully signed out.',
            });

            navigation.dispatch(StackActions.replace('Onboarding'));
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error Found',
                text2: 'Error occurred while logging out.',
            });
        }
    };

    useEffect(() => {
        getUserInfo();
    }, [setUserData]);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <FastImage
                    source={require('../../../assets/images/loader.gif')}
                    style={styles.loader}
                    tintColor={colors.primaryColor}
                    resizeMode={FastImage.resizeMode.center}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Drawer', { screen: 'BottomTab' })}
                    >
                        <Icon name="arrow-back" size={24} color={colors.grey} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Profile</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.profileWrapper}>
                        <TouchableOpacity
                            style={styles.logoBtn}
                            onPress={() => setIsModalVisible(true)}
                        >
                            {
                                userInfo.logoUrl != '' ?
                                    <FastImage
                                        source={{ uri: logoPath ? logoPath : userInfo?.logoUrl }}
                                        style={styles.logo}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />
                                    :
                                    <FastImage
                                        source={require('../../../assets/images/avatar.png')}
                                        style={styles.logo}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />
                            }

                            <Icon name="camera" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>0/9 Certifications Achieved</Text>
                    <View style={styles.badgeWrapper}>
                        {badgeData.map((item, index) => (
                            <View style={styles.itemContainer} key={index}>
                                <FastImage
                                    source={item.imgUrl}
                                    style={styles.image}
                                    resizeMode={FastImage.resizeMode.center}
                                />
                                <Text style={styles.subTitle}>{item.title}</Text>
                            </View>
                        ))}
                    </View>
                    <PrimaryButton
                        title="Edit Profile"
                        onPress={() => navigation.navigate('EditProfile')}
                    />
                    <TouchableOpacity style={styles.btn} onPress={handleSignOut}>
                        <Icon name="power" size={24} color={colors.accentColor} />
                        <Text style={styles.btnText}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    visible={isModalVisible}
                    animationType="fade"
                    transparent={true}
                >
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <View style={[styles.modalHeader, globalStyles.boxShadow]}>
                                <Text style={styles.title}>Change Avatar</Text>
                                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                    <Icon name="close-outline" size={24} color={colors.primaryColor} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.avatarWrapper}>
                                <FlatList
                                    numColumns={3}
                                    data={avatar}
                                    contentContainerStyle={styles.avatarWrapper}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setLogoPath(item);
                                                setLogoCheck(index + 1);
                                            }}
                                        >
                                            <FastImage
                                                source={{ uri: item, priority: 'high' }}
                                                style={{ ...styles.logo, marginHorizontal: 12 }}
                                                resizeMode={FastImage.resizeMode.center}
                                            />
                                            {index + 1 === logoCheck && (
                                                <Icon
                                                    name="checkmark-done-circle-outline"
                                                    style={styles.checkIcon}
                                                />
                                            )}
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                            <View style={styles.btnView}>
                                <PrimaryButton title="Save Changes" onPress={setUserData} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};

export default Profile;
