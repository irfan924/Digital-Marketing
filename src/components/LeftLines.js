import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { colors } from '../style/Colors'

const LeftLines = () => {
    return (
        <View style={{ ...styles.container, }}>
            <View style={{ ...styles.line, flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={styles.column}></View>
                <View style={{
                    ...styles.column,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    gap: 4
                }}
                >
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={{ ...styles.line, alignItems: 'flex-end', gap: 4 }}>
                        <View style={styles.column}></View>
                        <View style={styles.column}></View>
                        <View style={styles.column}></View>
                        <View style={styles.column}></View>
                        <View style={styles.column}></View>
                        <View style={styles.column}></View>
                        <View style={styles.column}></View>
                    </View>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}>
                <View style={styles.circle}></View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
        </View>
    )
}

export default LeftLines

const styles = StyleSheet.create({
    container: {
        gap: 4,
        flexDirection: 'row',
        marginTop: 100
    },
    line: {
        width: 12,
        height: 2,
        borderRadius: 2,
        backgroundColor: colors.primaryColor
    },
    column: {
        width: 2,
        height: 12,
        borderRadius: 2,
        backgroundColor: colors.primaryColor
    },
    circle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: colors.secondaryColor,
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -8,
        left: -2
    }
})