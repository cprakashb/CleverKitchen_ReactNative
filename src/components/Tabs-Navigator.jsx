import React from 'react';
import { Text } from 'react-native';
import Contact from './Contact';
import Profile from './User-Profile';
import Home from './Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator()

const TabsNavigator = () => {

  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FA7D50',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
      <Tabs.Screen name="home-tab" component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <AntDesign name="home" size={24} style={{ color: focused ? '#FA6E3B' : "#505050" }} />,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#FA6E3B' : "#505050" }}>Home</Text>
          )
        }} />
      <Tabs.Screen name="contact-tab" component={Contact}
        options={{
          title: "Contact",
          tabBarIcon: ({ focused }) => <MaterialIcons name="contact-support" size={24} style={{ color: focused ? '#FA6E3B' : "#505050" }} />,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#FA6E3B' : "#505050" }}>Contact</Text>
          )
        }} />
      <Tabs.Screen name="Profile" component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => <AntDesign name="user" size={24} style={{ color: focused ? '#FA6E3B' : "#505050" }} />,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#FA6E3B' : "#505050" }}>Profile</Text>
          )
        }} />
    </Tabs.Navigator>
  );
}

export default TabsNavigator;

