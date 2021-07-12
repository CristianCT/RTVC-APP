import React from "react";
import { View, StyleSheet, TouchableNativeFeedback, Text, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Chapter (props) {
    return (
        <TouchableNativeFeedback
            onPress={() => { props.propierties.navigation.navigate('VideoPlayerView') }}
        >
            <View style={styles.chapterContainer}>
                <View style={ styles.miniatureContainer }>
                    <Image style={styles.miniature} source={{ uri: "https://www.lachatarreria.com/blogword/wp-content/uploads/2015/01/islaminimaposterhorizontal.jpg" }} resizeMode="cover" />
                </View>
                <View>
                    <Text style={ styles.nameChapter }>Name Chapter</Text>
                </View>
                <View>
                    <MaterialCommunityIcons style={{ marginLeft: 25 }} name = "play" color = { 'azure' } size = { 30 } /> 
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    chapterContainer:{
        height: 50,
        backgroundColor: '#2B3D47',
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between' ,
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    miniatureContainer: {
        maxWidth: 100
    },
    miniature: {
        width: 80,
        height: 40,
        borderRadius: 5
    },
    nameChapter: {
        fontSize: 18,
        color: 'azure',
    }
});