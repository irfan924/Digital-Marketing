import React, { useState } from 'react'
import {
    View,
    Text,
    StatusBar,
    Alert
} from 'react-native';
import { styles } from './Style';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../style/Colors';
import Icon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image';
import { globalStyles } from '../../style/globalStyle';
import CheckBox from '@react-native-community/checkbox';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';


const RateNow = () => {


    const navigation = useNavigation();

    const [rateValue, setRateValue] = useState(0)

    const [designComplaint, setDesignComplaint] = useState(false);
    const [uxComplaint, setUXComplaint] = useState(false);
    const [contentComplaint, setContentComplaint] = useState(false);

    return (
        <LinearGradient
            colors={[colors.gradient1, colors.gradient2]}
            style={styles.container}
        >
            <StatusBar backgroundColor={colors.gradient1} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Hey Irfan Abbas, Enjoying Digital Marketing so far.
                    </Text>
                    <Icon
                        name='close'
                        size={36}
                        onPress={() => {
                            setRateValue(0);
                            navigation.goBack();
                        }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    {
                        rateValue > 0 && rateValue < 5 ?
                            <View style={styles.negContent}>
                                <Text style={styles.emoji}>
                                    😞
                                </Text>
                                <Text style={{ ...styles.title, fontSize: 12 }}>
                                    We are sorry to know we haven't been able to deliver you 5⭐ experience.
                                </Text>
                                <View style={styles.checkBoxContainer}>
                                    <CheckBox
                                        disabled={false}
                                        value={designComplaint}
                                        onValueChange={() => setDesignComplaint(!designComplaint)}
                                        tintColors={{ true: colors.primaryColor, false: colors.accentColor }} // Custom colors for checked and unchecked states
                                        onFillColor={colors.primaryColor}
                                        onTintColor={colors.accentColor}
                                        onCheckColor={colors.accentColor}
                                    />
                                    <Text style={{ ...styles.title, fontSize: 14 }}>
                                        Design Needs Improvement
                                    </Text>
                                </View>
                                <View style={styles.checkBoxContainer}>
                                    <CheckBox
                                        disabled={false}
                                        value={uxComplaint}
                                        onValueChange={() => setUXComplaint(!uxComplaint)}
                                        tintColors={{ true: colors.primaryColor, false: colors.accentColor }} // Custom colors for checked and unchecked states
                                        onFillColor={colors.primaryColor}
                                        onTintColor={colors.accentColor}
                                        onCheckColor={colors.accentColor}
                                    />
                                    <Text style={{ ...styles.title, fontSize: 14 }}>
                                        User Experience Should be Simplified
                                    </Text>
                                </View>
                                <View style={styles.checkBoxContainer}>
                                    <CheckBox
                                        disabled={false}
                                        value={contentComplaint}
                                        onValueChange={() => setContentComplaint(!contentComplaint)}
                                        tintColors={{ true: colors.primaryColor, false: colors.accentColor }} // Custom colors for checked and unchecked states
                                        onFillColor={colors.primaryColor}
                                        onTintColor={colors.accentColor}
                                        onCheckColor={colors.accentColor}
                                    />
                                    <Text style={{ ...styles.title, fontSize: 14 }}>
                                        Content Should be more refined
                                    </Text>
                                </View>
                            </View>
                            :
                            <FastImage
                                source={require('../../../assets/images/CustomerFeedback.png')}
                                style={styles.img}
                                resizeMode={FastImage.resizeMode.center}
                            />
                    }
                </View>
                <View style={styles.bottomWrapper}>
                    <Text style={{ ...styles.title, fontSize: 14 }}>
                        Please rate your experience with us 😍
                    </Text>
                    <View style={styles.btnView}>
                        <Icon
                            name='star'
                            color={rateValue >= 1 ? colors.ornage : colors.accentColor}
                            size={36}
                            onPress={() => {
                                setRateValue(1)
                            }}
                        />
                        <Icon
                            name='star'
                            color={rateValue >= 2 ? colors.ornage : colors.accentColor}
                            size={36}
                            onPress={() => {
                                setRateValue(2)
                            }}
                        />
                        <Icon
                            name='star'
                            color={rateValue >= 3 ? colors.ornage : colors.accentColor}
                            size={36}
                            onPress={() => {
                                setRateValue(3)
                            }}
                        />
                        <Icon
                            name='star'
                            color={rateValue >= 4 ? colors.ornage : colors.accentColor}
                            size={36}
                            onPress={() => {
                                setRateValue(4)
                            }}
                        />
                        <Icon
                            name='star'
                            color={rateValue >= 5 ? colors.ornage : colors.accentColor}
                            size={36}
                            onPress={() => {
                                setRateValue(5)
                            }}
                        />
                    </View>
                    <Text style={{ ...globalStyles.modulePara, fontSize: 12, textAlign: 'right' }}>
                        The Best we can get :)
                    </Text>
                    {
                        rateValue > 0 &&
                        <PrimaryButton
                            title={'Submit'}
                        />
                    }
                </View>
            </View>
        </LinearGradient>
    )
}

export default RateNow