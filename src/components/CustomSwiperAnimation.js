import React from 'react'
import {
    Dimensions,
    StyleSheet,
} from 'react-native'

import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { colors } from '../style/Colors';
import LottieView from 'lottie-react-native';

const width = Dimensions.get('screen').width;
const CustomSwiperAnimation = React.memo(({ item, }) => {

    return (
        <SwiperFlatList
            data={item}
            autoplay
            autoplayDelay={5}
            autoplayLoop
            showPagination
            paginationActiveColor={colors.secondaryColor}
            paginationDefaultColor={colors.accentColor}
            paginationStyle={styles.paginationStyle}
            paginationStyleItem={styles.paginationStyleItem}
            style={styles.swiper}
            renderItem={({ item, index }) =>
              
                <LottieView
                    source={item}
                    key={index}
                    autoPlay
                    loop
                    style={styles.img}
                />
            }
        />
    )
})

export default CustomSwiperAnimation

const styles = StyleSheet.create({
    swiper: {
        width: '100%',
        padding: 4,
    },
    content: {
        width: '100%',
    },
    img: {
        width: width * 0.9,
        marginRight: width * 0.1,
        borderRadius: 8
    },
    paginationStyle: {
        backgroundColor: 'rgba(0,105,148,0.4)',
        height: 16,
        alignItems: 'center',
        borderRadius: 12
    },
    paginationStyleItem: {
        width: 6,
        height: 6,
        marginHorizontal: 6
    }
})