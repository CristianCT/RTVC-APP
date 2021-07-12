import React, { useState } from "react";
import { View, StyleSheet, TouchableNativeFeedback, ImageBackground } from "react-native";
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

const VideoPlayerView = (props) => {
  return (
    <View style={{ flex: 1 }}>
        <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: {
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                },
            }}
        />
    </View>
  );
};


export default VideoPlayerView;