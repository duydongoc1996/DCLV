import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import Menu from './MenuSamping';
import Register from './app/components/Register';

import Login from './app/components/Login';
import { Container,Button, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
const Application=new StackNavigator({
 Home: {
    screen:Menu,
    navigationOptions: {
      title:'Batdongsan.vn'
    }
  },
   LoginHome: {
    screen: Login,
    navigationOptions: {
      title: 'Batdongsan.vn'
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: '#ChuyenCuaDev'
    }
  }

});
export default Application;
 