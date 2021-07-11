/* import { StatusBar } from 'expo-status-bar'; */
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/* import { createStackNavigator } from '@react-navigation/stack'; */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* const Stack = createStackNavigator(); */
const Tab = createMaterialBottomTabNavigator();

import Search from './screens/Search';
import Home from './screens/Home';
import Profile from './screens/Profile';

function MyTabs () {
  return(
    <Tab.Navigator
      initialRouteName = "Home"
      activeColor = "#f0edf6"
      inactiveColor = "#3F5C6C"
      barStyle = { { backgroundColor : '#264454' } } 
    > 
    
      <Tab.Screen 
        name = "Search"
        component = { Search }
        options = { {
          tabBarLabel : 'Search' , 
          tabBarIcon : ({ color }) => (   
            <MaterialCommunityIcons name = "magnify" color = { color } size = { 26 } /> 
          ),
        }}
      />

      <Tab.Screen 
        name = "Home"
        component = { Home }
        options = { {
          tabBarLabel : 'Home' , 
          tabBarIcon : ({ color }) => (   
            <MaterialCommunityIcons name = "home" color = { color } size = { 26 } /> 
          ),
        }}
      />

      <Tab.Screen 
        name = "Profile"
        component = { Profile }
        options = { {
          tabBarLabel : 'Profile' , 
          tabBarIcon : ({ color }) => (   
            <MaterialCommunityIcons name = "account" color = { color } size = { 26 } /> 
          ),
        }}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 50, /* Margen superior -> Prueba */
  },
});


/* <Text>Open up App.js to start working on your app 2!</Text> */