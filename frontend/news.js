import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity 
} from 'react-native';
import {StackNavigator,DrawerNavigator,TabNavigator} from 'react-navigation';

import news1 from './listnews';
import news2 from './listnews1';
const news = TabNavigator({
  Home: {
    screen: news1,
  },
  Notifications: {
    screen: news2,
  },
  
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
export default news;