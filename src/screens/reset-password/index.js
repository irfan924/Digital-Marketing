import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput
} from 'react-native'
import { styles } from './Style'
import PrimaryButton from '../../components/PrimaryButton'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { colors } from '../../style/Colors'
import Toast from 'react-native-toast-message'

const ResetPassword = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState();

    const handleResetPassword = async () => {

        if (email) {
            try {
                await auth().sendPasswordResetEmail(email)
                Toast.show({
                    text1: 'Email Sent!',
                    text2: `Email sent Successfully at ${email}`,
                });
                setEmail('');
                navigation.goBack();
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        Toast.show({
                            type: 'error',
                            text1: 'Error',
                            text2: 'There is no user corresponding to the given email.'
                        });
                        break;
                    case 'auth/invalid-email':
                        Toast.show({
                            type: 'error',
                            text1: 'Error',
                            text2: 'The email address is badly formatted.'
                        });
                        break;
                    case 'auth/network-request-failed':
                        Toast.show({
                            type: 'error',
                            text1: 'Error',
                            text2: 'A network error (such as timeout, interrupted connection, or unreachable host) has occurred.'
                        });
                        break;
                    default:
                        Toast.show({
                            type: 'error',
                            text1: 'Error',
                            text2: `${error.message}`
                        });
                        break;
                }
            }
        } else {
            Toast.show({
                type: 'info',
                text1: 'Empty Field!',
                text2: `Please Write Your Email`
            });
        }
    }

    return (
        <View style={styles.container}>
            <FastImage
                source={require('../../../assets/images/forgetPass.png')}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.img}
            />
            <Text style={styles.maintitle}>
                Forget Password!
            </Text>
            <Text style={styles.title}>
                Don't worry Please Enter Your Email Below and Press the 'Send Email' Button and check your inbox .
            </Text>
            <TextInput
                placeholder='example@gmail.com'
                placeholderTextColor={colors.grey}
                cursorColor={colors.primaryColor}
                style={styles.input}
                onChangeText={(val) => setEmail(val)}
            />
            <PrimaryButton
                title={'Send Email'}
                onPress={handleResetPassword}
            />
        </View>
    )
}

export default ResetPassword