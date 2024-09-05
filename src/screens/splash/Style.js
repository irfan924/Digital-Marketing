import { StyleSheet } from 'react-native';
import { colors } from '../../style/Colors';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        padding: 24,
        backgroundColor: colors.accentColor,
        
    },
    img:{
        width: '100%',
        height: 300
    }
})