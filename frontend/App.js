import React, { Component } from 'react';
import {StackNavigator,DrawerNavigator,TabNavigator} from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import HomeScreen from './HomeScreen';
import HomeScreen1 from './HomeScreen1';

import MenuSamping from './MenuSamping';
import Login from './src/pages/Login';
import  Signup from './src/pages/Signup';
import news from './news';
import listnews from './listnews';
import listnews1 from './listnews1';

import newsdetail from './newsdetail';
import newsdetail1 from './newsdetail1';
import newsdetail2 from './newsdetail2';
import newsdetail3 from './newsdetail3';

  const Application=new StackNavigator({
  page1: {
    screen:HomeScreen
  },
  page2: {
    screen: Login
  },
  page3: {
    screen: Signup
  },
   page4: {
    screen: HomeScreen1
  },
  page5: {
    screen: news
  },
  page6: {
    screen:listnews
  },
  page7: {
    screen: newsdetail
  },
   page8: {
    screen: newsdetail1
  },
   page9: {
    screen: newsdetail2
  },
   page10: {
    screen: newsdetail3
  }
  , 
  page11: {
    screen: listnews1
  }


});

export default DrawerNavigator({
  page1: {
    screen:Application
  },
  page2: {
    screen: Login
  },
  page3: {
    screen: Signup
  }
}, {
  contentComponent: MenuSamping,
  drawerWidth: 300
});


 