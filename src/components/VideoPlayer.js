import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({path}) => {
    const [paused, setPaused] = useState(true);

    return (
        <View>
            <Video
                source={path}
                style={styles.video}
                paused={paused}
                resizeMode="cover"
                controls={false}
            />

            {/* Custom Play/Pause Button */}
            <TouchableOpacity onPress={() => setPaused(!paused)} style={styles.playPauseButton}>
                <Text style={styles.buttonText}>{paused ? 'Play' : 'Pause'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: 200,
    },
    playPauseButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default VideoPlayer;
