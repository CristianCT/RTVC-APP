import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const Footer = () => {
    return(
        <View style={styles.footer} >
            <Text style={styles.text}  >Creación de CristianCT-2021 V1.0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#282D37',
    },
    text: {
        color: 'white'
    }
});

export default Footer;
