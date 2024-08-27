import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { colors } from '../style/Colors'

const Bottomside = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.mostInner}></View>
            </View>
        </View>
    )
}

export default Bottomside

const styles = StyleSheet.create({
    container:{
        width: '40%',
        height: 150,
        backgroundColor: colors.primaryColorRGBA,
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: -99,
        borderTopLeftRadius: 150
    },
    inner:{
        width: '75%',
        height: '75%',
        backgroundColor: colors.gradient2,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 150
    },
    mostInner:{
        width: '75%',
        height: '75%',
        backgroundColor: colors.bgColor,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 150
    },
})