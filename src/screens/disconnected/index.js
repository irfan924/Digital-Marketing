import React, { useEffect, useState } from 'react'
import {
    View,
} from 'react-native'
import { styles } from './Style'

import Netinfo from '@react-native-community/netinfo'
import { StackActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import PrimaryButton from '../../components/PrimaryButton'
import FastImage from 'react-native-fast-image'

const Disconnected = () => {

    const navigation = useNavigation();

    const [isConnected, setIsConnected] = useState();

    useEffect(() => {
        Netinfo.addEventListener((state) =>
            setIsConnected(state.isConnected)
        )
        setTimeout(() => {
            auth().onAuthStateChanged(user => {
                if (isConnected) {
                    const roteScreen = user !== null ? 'Drawer' : 'LoginNavigation';

                    navigation.dispatch(StackActions.replace(roteScreen));
                } else {

                }
            })
        }, 1000)
    }, [])

    const handleConnection = () => {
        Netinfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        })
        auth().onAuthStateChanged(user => {
            if (isConnected) {
                const roteScreen = user !== null ? 'Drawer' : 'LoginNavigation';

                navigation.dispatch(StackActions.replace(roteScreen));
            } else {

            }
        })
    }

    return (
        <View style={styles.container}>
            <FastImage
                source={require('../../../assets/images/wifi.gif')}
                style={styles.animation}
                resizeMode={FastImage.resizeMode.cover}
            />
            <PrimaryButton
                title={'Try Again'}
                onPress={handleConnection}
            />
        </View>
    )
}

export default Disconnected