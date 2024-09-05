import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.accentColor,
        
    },
    content:{
        padding: 12,
        alignItems: 'center',
        gap: 24
    },
    img:{
        width: 300,
        height: 300
    }
})