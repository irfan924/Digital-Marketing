import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { styles } from './Style'
import { courseOutline } from '../../utils/courseOutline'
import Icon from 'react-native-vector-icons/Ionicons'

const CourseOutline = () => {

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.contentWrapper}
                showsVerticalScrollIndicator={false}
            >
                {
                    courseOutline.map((item,index)=>(
                        <View key={index} style={styles.content}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            {
                                item.listItems.map((points,index)=>(
                                    <View key={index} style={styles.listContainer}>
                                        <Icon
                                            name='pencil'
                                            style={styles.icon}
                                        />
                                        <Text style={styles.points}>
                                            {points}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default CourseOutline