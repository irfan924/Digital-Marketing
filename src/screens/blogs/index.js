import React from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import NotificationHeader from '../../components/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../../style/globalStyle'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../style/Colors'
import { blogs } from '../../utils/blogs'

const Blogs = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <NotificationHeader title={'Science Behind Learning'} onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <FlatList
                    data={blogs}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                    numColumns={2}
                    key={2}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            style={[styles.card, globalStyles.boxShadow]}
                            onPress={() => navigation.navigate('BlogDetail', [item])}
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
                        </TouchableOpacity>
                    }
                />
            </View>

        </View>
    )
}

export default Blogs