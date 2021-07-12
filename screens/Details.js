import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableNativeFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Chapter from '../components/Chapter';

export default function Details (props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#121f26"}}>
            <View style={styles.headerDetails}>
                <Image style={styles.logoDetails} source={{ uri: "https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/inline-images/RTVCPlay-2_4.png" }} resizeMode="cover" />
            </View> 
            <View style={styles.container}>
                <View style={styles.coverContainer}>
                    <Image style={styles.cover} source={{ uri: "https://www.lachatarreria.com/blogword/wp-content/uploads/2015/01/islaminimaposterhorizontal.jpg" }} />
                </View>
                <View style={ styles.coverFoot }>
                    <View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={ styles.TextSubTitles }>Nombre de la pelicula</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={ styles.TextInformation }>Pelicula | Acción | 2019 | 01:58:37 min</Text>
                        </View>
                    </View>
                    <TouchableNativeFeedback onPress={() => { props.navigation.navigate('VideoPlayerView') }}>
                        <MaterialCommunityIcons style={{ marginLeft: 25 }} name = "play-circle-outline" color = { 'azure' } size = { 45 } /> 
                    </TouchableNativeFeedback>
                </View>
            </View>
                <ScrollView>
                    <View>
                        <View style={{ margin: 10, marginTop: 10 }}>
                            <Text style={ styles.TextParagraph }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Why do we use it?
                            </Text>
                        </View>
                        <View style={ styles.chaptersContainer }>
                            <View>
                                <Text style={ styles.TextSubTitles }>
                                    Capítulos
                                </Text>
                            </View >
                            <View>
                                <Chapter propierties={ props }/>
                                <Chapter propierties={ props }/>
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
                <View style={ styles.footerDetails }>
                    <Text style={{ fontSize: 13, color: 'azure' }}>
                        Create by CristianCT - 2021 V1.0
                    </Text>
                </View >
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
   
    cover: {
        width: 390,
        height: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10
    },
    coverContainer: {
        borderColor: "black",
        maxWidth: 400 
    },
    headerDetails: {
        backgroundColor: '#264454',
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    logoDetails: {
        height: 40,
        width: 200
    },
    TextSubTitles: {
        color: 'azure',
        fontSize: 27,
    },
    TextParagraph: {
        color: 'azure',
        textAlign: 'justify'
    },
    TextInformation: {
        color: 'azure',
        fontSize: 13,
        textAlign: 'justify'
    },
    coverFoot: {
        flexDirection: 'row', 
        alignItems:'center',
        marginBottom: 10
    },
    chaptersContainer: {
        margin: 10,
    },
    footerDetails: { 
        backgroundColor: '#2B3D47',  
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 30 
    }
});
