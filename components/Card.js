/* Faltan los efectos de selección, diseño y los props */

import React, { useState } from "react";
import { View, StyleSheet, TouchableNativeFeedback, ImageBackground } from "react-native";

const image = { uri: "https://s1.1zoom.me/big0/328/Terminator_2_Judgment_Day_Arnold_Schwarzenegger_529956_689x1024.jpg" }

const Card = (props) => {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <TouchableNativeFeedback onPress={() => {
      setRippleColor(randomHexColor());
      setRippleOverflow(!rippleOverflow);
    }}>
      
      <View style={styles.touchable}>
        <ImageBackground source={{ uri: props.audiovisual.img }} resizeMode="cover" style={styles.image}/>
      </View>
      
    </TouchableNativeFeedback>
  );
};

const randomHexColor = () => {
  return "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
  touchable: { 
    borderColor: "black",
    borderRadius: 5, 
    borderWidth: 1,
    width: 115,
    maxWidth: 150,
    height: 170,    
    maxHeight: 200,
    margin: 5,
    
  },
  text: { 

    alignSelf: "center" 
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
  },
});

export default Card;

/* background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)} */