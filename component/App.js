import React from 'react'
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import PageAScreen from './PageA'
import PageBScreen from './PageB'
import PageCScreen from './PageC'

PageAScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

PageBScreen.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'ios-search' : 'ios-search-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

PageCScreen.navigationOptions = {
  tabBarLabel: 'Setting',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'ios-person' : 'ios-person-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const App = TabNavigator(
  {
    Home: {
      screen: PageAScreen,
      path: '',
    },
    People: {
      screen: PageBScreen,
      path: 'cart',
    },
    Chat: {
      screen: PageCScreen,
      path: 'chat',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false
    },
  }
)

export default App
