import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import Registros from '../RegistrosPrueba.json';

import Card from '../components/Card';

export default function Home(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerHome}>
                <Image style={styles.logoHome} source={{ uri: "https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/inline-images/RTVCPlay-2_4.png" }} resizeMode="cover" />
            </View> 
            <ScrollView style={{ backgroundColor: "#121f26" }}>
                <View style={styles.container}>
                    <View style={styles.coverContainer}>
                        <Image style={styles.cover} source={{ uri: "https://www.lachatarreria.com/blogword/wp-content/uploads/2015/01/islaminimaposterhorizontal.jpg" }} />
                    </View>
                    <Text style={ styles.TextSubTitles }>Recomendados</Text>
                    <View style={ styles.listRegister }>
                        { 
                            Registros.list.map((audiovisual, x ) => {
                                return(
                                    <Card audiovisual={ audiovisual } propierties={ props } key={ x } />
                                );
                            }) 
                        }
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5
    },
    cover: {
        width: 370,
        height: 200,
    },
    coverContainer: {
        borderColor: "black",
        borderRadius: 5, 
        borderWidth: 1,
        margin: 5,
        maxWidth: 375 
    },
    listRegister: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    headerHome: {
        backgroundColor: '#264454',
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    logoHome: {
        height: 40,
        width: 200
    },
    TextSubTitles: {
        color: 'azure',
        fontSize: 18,
    }
});

