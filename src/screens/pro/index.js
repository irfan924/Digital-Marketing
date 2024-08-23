import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './Style'
import { colors } from '../../style/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { digitalImages } from '../../utils/digital'
import CustomSwiper from '../../components/CustomSwiper'

const Pro = () => {

    const navigation = useNavigation();

    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.primaryColor, colors.primaryColorRGBA]}
        >
            <ImageBackground
                source={require('../../../assets/images/bgStyle.png')}
                resizeMode='cover'
                style={styles.container}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Upgrade to Pro
                        </Text>
                        <TouchableOpacity
                            style={styles.closeBtn}
                            onPress={() => navigation.navigate('Drawer',{screen:'BottomTab'})}
                        >
                            <Icon name='close' size={34} color={colors.accentColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.animationView}>
                        <CustomSwiper item={digitalImages} height={170} />
                    </View>
                    <TouchableOpacity style={styles.priceWrapper}>
                        <View style={styles.upperPriceWrapper}>
                            <Icon name='star' size={24} color={colors.accentColor} />
                            <Text style={styles.title}>Best Value</Text>
                            <Icon name='star' size={24} color={colors.accentColor} />
                        </View>
                        <Text style={styles.subTitle}>
                            Lifetime
                        </Text>
                        <Text style={styles.oldPrice}>
                            RS 20000.00
                        </Text>
                        <Text style={styles.newPrice}>
                            RS 2150.00
                        </Text>
                        <Text style={styles.discount}>
                            95% Off
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.timeWrapper}>
                        <Text style={{...styles.title, fontSize: 12}}>
                            Hurryup! Offer expires in 
                        </Text>
                        <View style={styles.countWrapper}>
                            <Text style={styles.time}>23</Text>
                            <Text style={styles.time}>Hours</Text>
                        </View>
                        <Text style={styles.title}> : </Text>
                        <View style={styles.countWrapper}>
                            <Text style={styles.time}>23</Text>
                            <Text style={styles.time}>Minutes</Text>
                        </View>
                        <Text style={styles.title}> : </Text>
                        <View style={styles.countWrapper}>
                            <Text style={styles.time}>23</Text>
                            <Text style={styles.time}>Sec</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.unlockBtn}
                    >
                        <Text style={styles.unlockBtnText}>
                            UNLOCK ENTIRE COURSE + CERTIFICATE
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.faqsBtn}
                    >
                        <Text style={styles.faqsBtnText}>
                            FAQ's Help & Terms
                        </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </LinearGradient>
    )
}

export default Pro