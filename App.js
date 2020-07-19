import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, FlatList, SafeAreaView, RefreshControl, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import NewsDetails from './src/news';
import Buzz from './screens/buzzfeed';
import CNN from './screens/cnn';
import FORTUNE from './screens/fortune';
import ESPN from './screens/espn';
import TECH from './screens/techcrunch';
import BLOOM from './screens/bloomberg';
import GOOGLE from './screens/google';
import NGC from './screens/ngc';
import HACKER from './screens/hacker';
import MASHBALE from './screens/mashable';









function BuzzFeed() {
  return (
    <View style={{ flex: 1}}>
      <Buzz/>
    </View>
  );
}


function Cnn() {
  return (
    <View style={{ flex: 1}}>
      <CNN/>
    </View>
  );
}

function Espn() {
  return (
    <View style={{ flex: 1}}>
      <ESPN/>
    </View>
  );
}
function Fortune() {
  return (
    <View style={{ flex: 1}}>
      <FORTUNE/>
    </View>
  );
}

function Bloomberg() {
  return (
    <View style={{ flex: 1}}>
      <BLOOM/>
    </View>
  );
}
function Google() {
  return (
    <View style={{ flex: 1}}>
      <GOOGLE/>
    </View>
  );
}
function Ngc() {
  return (
    <View style={{ flex: 1}}>
      <NGC/>
    </View>
  );
}
function Hacker() {
  return (
    <View style={{ flex: 1}}>
      <HACKER/>
    </View>
  );
}
function Mashable() {
  return (
    <View style={{ flex: 1}}>
      <MASHBALE/>
    </View>
  );
}


function TechCrunch() {
  return (
    <View style={{ flex: 1}}>
      <TECH/>
    </View>
  );
}

function NewsDet({route, navigation}) 
{
const { uri } = route.params;

  return (
    <View style={{ flex: 1}}>
      <NewsDetails uri={uri}/>
    </View>
  );
}



const Tab = createMaterialTopTabNavigator();

 function News() {


  return (
    <View style={{flex:1}}>
      

      <Tab.Navigator tabBarOptions={{ scrollEnabled: true,
    labelStyle: { fontWeight: 'bold', fontSize:12 } ,
    tabStyle: { width: 100 },
    
      }}>
        <Tab.Screen name="BuzzFeed" component={BuzzFeed} />
        <Tab.Screen name="CNN" component={Cnn} />
        <Tab.Screen name="ESPN" component={Espn} />
        <Tab.Screen name="Fortune" component={Fortune} />
        <Tab.Screen name="Google" component={Google} />
        <Tab.Screen name="Bloomberg" component={Bloomberg} />
        <Tab.Screen name="Hacker News" component={Hacker} />
        <Tab.Screen name="National Geographic" component={Ngc} />
        <Tab.Screen name="Mashable" component={Mashable} />
        <Tab.Screen name="Tech Crunch" component={TechCrunch} />
      
      </Tab.Navigator>

    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {



  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="TrueNorth News"  options={{
    headerTransparent: false ,   headerStyle: {
      backgroundColor: '#fff', borderWidth:0,
    }, headerTintColor: '#1B1B1B', headerTitleStyle: {
      fontWeight: 'bold', fontSize:23
    },
  }} component={News} />
   <Stack.Screen name="News Details"  options={{
    headerTransparent: false ,   headerStyle: {
      backgroundColor: '#fff', borderWidth:0,
    }, headerTintColor: '#1B1B1B', headerTitleStyle: {
      fontWeight: 'bold', fontSize:23
    },
  }} component={NewsDet} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


