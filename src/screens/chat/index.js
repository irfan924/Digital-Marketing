import React from 'react'
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import ChatHeader from '../../components/ChatHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../style/Colors'
import LinearGradient from 'react-native-linear-gradient'

const Chat = () => {

    return (
        <View style={styles.wrapper}>
            <ChatHeader />
            <ScrollView
                contentContainerStyle={styles.container}
            >
                <View style={styles.chatOut}>
                    <Text style={styles.chat}>
                        Let me quickly review your account details to better understand the situation. I’ll get back to you in just a moment.
                    </Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>
                            12 AUG 2024 10:58 am
                        </Text>
                        <Icon
                            name='checkmark-done'
                            size={16}
                            color={colors.primaryColor}
                        />
                    </View>
                </View>
                <View style={styles.chatIn}>
                    <Text style={styles.chat}>
                        Let me
                    </Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>
                            12 AUG 2024 10:58 am
                        </Text>
                        <Icon
                            name='checkmark-done'
                            size={16}
                            color={colors.primaryColor}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.message}>
                <TextInput
                    placeholder='Type your message'
                    placeholderTextColor={colors.grey}
                    style={styles.input}
                    multiline={true}
                />
                <LinearGradient
                    colors={[colors.primaryColorRGBA, colors.primaryColor]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.iconBg}
                >
                    <TouchableOpacity>
                        <Icon
                            name='paper-plane'
                            color={colors.accentColor}
                            size={24}
                        />
                    </TouchableOpacity>
                </LinearGradient>

            </View>
        </View>
    )
}

export default Chat