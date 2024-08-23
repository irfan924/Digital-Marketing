import React, { useState } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../style/Colors'

const ModuleHeader = ({closePress, audioPress, sharePress, audioState }) => {


    // const [audioState, setAudioState] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={closePress}
            >
                <Icon
                    name='close'
                    size={36}
                    color={colors.accentColor}
                />
            </TouchableOpacity>
            <View style={styles.innerWrapper}>
                <TouchableOpacity
                    onPress={audioPress}
                >
                    <Icon
                        name={audioState ? 'volume-high' : 'volume-mute'}
                        size={24}
                        color={colors.accentColor}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={sharePress}
                >
                    <Icon
                        name='share-social'
                        size={24}
                        color={colors.accentColor}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModuleHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        paddingHorizontal: 12,
        backgroundColor: colors.primaryColor
    },
    innerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
        marginRight: 16
    },
})