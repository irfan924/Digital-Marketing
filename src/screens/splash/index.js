import React, { useEffect, useState } from 'react'
import {
    View,
} from 'react-native'
import { styles } from './Style'
import FastImage from 'react-native-fast-image'
import { StackActions, useNavigation } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo'
import auth from '@react-native-firebase/auth'

const Splash = () => {

    const navigation = useNavigation();

    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        NetInfo.addEventListener((status) => {
            setIsConnected(status.isConnected);
        })
        setTimeout(() => {
            const conn = NetInfo.addEventListener((state) => {
                return state.isConnected
            })
            auth().onAuthStateChanged(user => {
                if (conn) {
                    user != null ?
                        user.emailVerified === true ?
                            navigation.dispatch(StackActions.replace('Drawer'))
                            :
                            navigation.dispatch(StackActions.replace('LoginNavigation', { screen: 'Login' }))
                        :
                        navigation.dispatch(StackActions.replace('Onboarding'))
                } else {

                    navigation.dispatch(StackActions.replace('Disconnected'));
                }
            });
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <FastImage
                source={require('../../../assets/images/cartoon.gif')}
                style={styles.img}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>
    )
}

export default Splash