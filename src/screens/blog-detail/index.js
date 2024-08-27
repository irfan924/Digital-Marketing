import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { styles } from './Style';
import NotificationHeader from '../../components/NotificationHeader';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import { colors } from '../../style/Colors';
import { globalStyles } from '../../style/globalStyle';

const BlogDetail = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params[0];


    return (
        <View style={styles.container}>
            <NotificationHeader title={'Blogs'} onPress={() => navigation.goBack()} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <LinearGradient
                    colors={[colors.gradient1, colors.gradient2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.linear}
                >
                    <FastImage
                        source={item.imgUrl}
                        style={styles.img}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </LinearGradient>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={globalStyles.para}>
                    {item.desc}
                </Text>
            </ScrollView>
        </View>
    )
}

export default BlogDetail