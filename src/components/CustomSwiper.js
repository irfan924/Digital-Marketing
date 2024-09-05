import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import FastImage from 'react-native-fast-image'
import { colors } from '../style/Colors';
import Swiper from 'react-native-swiper';
import { width } from '../style/Dimensions';


const CustomSwiper = React.memo(({ item, height }) => {

    return (
        <View style={styles.content}>
            <Swiper
                autoplay={true}
                loop={true}
                dotStyle={styles.paginationStyle}
                activeDotColor={colors.ornage}
            >
                {
                    item.map((item, index) =>
                        <FastImage
                            source={item}
                            style={{ ...styles.img, height: height }}
                            resizeMode={FastImage.resizeMode.cover}
                            key={index}
                        />
                    )
                }
            </Swiper>
        </View>
    )
})

export default CustomSwiper

const styles = StyleSheet.create({
    swiper: {
        width: '100%',
        padding: 4,
    },
    content: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: width * 0.9,
        marginRight: width * 0.1,
        borderRadius: 8,
        height: 150,
    },
    paginationStyle: {
        backgroundColor: 'rgba(0,105,148,0.4)',
        height: 6,
        width: 6,
        borderRadius: 12,
    },
    paginationStyleItem: {
        width: 6,
        height: 6,
        marginHorizontal: 6
    },
    slide: {
        height: 150
    }
})