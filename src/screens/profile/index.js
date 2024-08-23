import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native'
import { styles } from './Style'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../style/Colors'
import FastImage from 'react-native-fast-image'
import { globalStyles } from '../../style/globalStyle'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation();

    const badgeData = [
        {
            id: 1,
            title: 'Digital Marketing',
            imgUrl: require('../../../assets/images/dm1.png'),
        },
        {
            id: 2,
            title: 'Socail Media Marketing',
            imgUrl: require('../../../assets/images/dm2.png'),
        },
        {
            id: 3,
            title: 'Seo',
            imgUrl: require('../../../assets/images/dm3.png'),
        },
        {
            id: 4,
            title: 'Google Video Ads',
            imgUrl: require('../../../assets/images/dm4.png'),
        },
        {
            id: 5,
            title: 'Google Display Ads',
            imgUrl: require('../../../assets/images/dm1.png'),
        },
        {
            id: 6,
            title: 'Google Shopping Ads',
            imgUrl: require('../../../assets/images/dm2.png'),
        },
        {
            id: 7,
            title: 'Growth Hacking',
            imgUrl: require('../../../assets/images/dm3.png'),
        },
        {
            id: 8,
            title: 'Google Ads Measurements',
            imgUrl: require('../../../assets/images/dm4.png'),
        },
        {
            id: 9,
            title: 'Digital Marketing Advanced',
            imgUrl: require('../../../assets/images/dm1.png'),
        },
    ]

    const avatars = [
        require('../../../assets/images/avatar1.png'),
        require('../../../assets/images/avatar2.png'),
        require('../../../assets/images/avatar3.png'),
        require('../../../assets/images/avatar4.png'),
        require('../../../assets/images/avatar5.png'),
        require('../../../assets/images/avatar6.png'),
    ]

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [logoPath, setLogoPath] = useState(require('../../../assets/images/avatar1.png'));
    const [logoCheck, setLogoCheck] = useState(1)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Drawer',{screen:'BottomTab'})}
                >
                    <Icon name='arrow-back' size={24} color={colors.grey} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    Profile
                </Text>
            </View>
            <View style={styles.content}>
                <View style={styles.profileWrapper}>
                    <TouchableOpacity
                        style={styles.logoBtn}
                        onPress={() => setIsModalVisible(true)}
                    >
                        <FastImage
                            source={logoPath}
                            style={styles.logo}
                            resizeMode={FastImage.resizeMode.center}
                        />
                        <Icon
                            name='camera'
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    0/9 Certifications Achieved
                </Text>
                <View style={styles.badgeWrapper}>
                    <FlatList
                        data={badgeData}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.list}
                        numColumns={3}
                        key={2}
                        renderItem={({ item, index }) => (
                            <View style={styles.itemContainer}>
                                <FastImage
                                    source={item.imgUrl}
                                    style={styles.image}
                                    resizeMode={FastImage.resizeMode.center}
                                />
                                <Text style={styles.subTitle}>
                                    {item.title}
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </View>
            <Modal
                visible={isModalVisible}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <View style={[styles.modalHeader, globalStyles.boxShadow]}>
                            <Text style={styles.title}>
                                Change Avatar
                            </Text>
                            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                <Icon name='close-outline' size={24} color={colors.primaryColor} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.avatarWrapper}>
                            <FlatList
                                numColumns={3}
                                data={avatars}
                                contentContainerStyle={styles.avatarWrapper}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity
                                        onPress={() => {
                                            switch (index + 1) {
                                                case 1:
                                                    setLogoPath(item)
                                                    setLogoCheck(1);
                                                    break;
                                                case 2:
                                                    setLogoPath(item)
                                                    setLogoCheck(2);
                                                    break;
                                                case 3:
                                                    setLogoPath(item)
                                                    setLogoCheck(3);
                                                    break;
                                                case 4:
                                                    setLogoPath(item)
                                                    setLogoCheck(4);
                                                    break;
                                                case 5:
                                                    setLogoPath(item)
                                                    setLogoCheck(5);
                                                    break;
                                                case 6:
                                                    setLogoPath(item)
                                                    setLogoCheck(6);
                                                    break;
                                            }
                                        }}
                                    >
                                        <FastImage
                                            source={item}
                                            style={{ ...styles.logo, marginHorizontal: 12 }}
                                            resizeMode={FastImage.resizeMode.center}
                                        />
                                        {
                                            index + 1 === logoCheck ?
                                                <Icon
                                                    name='checkmark-done-circle-outline'
                                                    style={styles.checkIcon}
                                                />
                                                :
                                                null
                                        }
                                    </TouchableOpacity>
                                }
                            />

                        </View>
                        <View style={styles.btnView}>
                            <PrimaryButton title={'Save Changes'} onPress={()=> setIsModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Profile