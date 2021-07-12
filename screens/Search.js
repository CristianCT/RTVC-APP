import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, Image } from 'react-native';
import Registros from '../RegistrosPrueba.json';

import Card from '../components/Card';

export default function Search(props) {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerSearch}>
        <View>
          <Image style={styles.logoHome} source={{ uri: "https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/inline-images/RTVCPlay-2_4.png" }} resizeMode="cover" />
        </View>
        <TextInput style={styles.inputSearch} placeholder="Search..." />
      </View> 
      <ScrollView style={{ backgroundColor: "#121f26" }}>
        <View style={styles.container}>
          { 
            Registros.list.map((audiovisual, x ) => {
              return(
                <Card audiovisual={ audiovisual } propierties={ props } key={ x } />
              );
            }) 
          }
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 5
  },
  headerSearch: {
    backgroundColor: '#264454',
    height: 87,
    justifyContent: 'center',
    paddingTop: 30,
    flexDirection: 'row'
  },
  
  inputSearch: {
    height: 35,
    width: 250,
    margin: 12,
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#608193',
    color: 'azure',
    fontSize: 18
  },
  logoHome: {
    height: 20,
    width: 100,
    marginTop: 20,
  }
});


/* <Text>Open up App.js to start working on your app 2!</Text> */