import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { colors } from '../style/Colors'

const Topside = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.mostInner}></View>
            </View>
        </View>
    )
}

export default Topside

const styles = StyleSheet.create({
    container:{
        width: '40%',
        height: 150,
        backgroundColor: colors.primaryColor,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -99,
        borderBottomRightRadius: 150
    },
    inner:{
        width: '75%',
        height: '75%',
        backgroundColor: colors.gradient2,
        position: 'absolute',
        top: 0,
        left: 0,
        // zIndex: -99,
        borderBottomRightRadius: 150
    },
    mostInner:{
        width: '75%',
        height: '75%',
        backgroundColor: colors.primaryColorRGBA,
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottomRightRadius: 150
    },
})