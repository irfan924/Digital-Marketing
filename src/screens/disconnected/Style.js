import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    animation:{
        width: '100%',
        height: 500,
    }
})