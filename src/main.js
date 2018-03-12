import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
import { DrawerNavigator,StackNavigator,NavigationActions} from 'react-navigation';
import HomePage from './containers/HomePage' 
import Main from './containers/main'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
const TransitionConfiguration = () => ({//让页面水平向左进来
  screenInterpolator: (sceneProps) => {
    const { scene } = sceneProps;
    const { route } = scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
  },
});
export const AppNavigator=StackNavigator({
//   welcome:{screen:welcome},
  Main:{screen:Main},
  Home: {
    screen: HomePage,
  },
},{
  transitionConfig: TransitionConfiguration,
  headerMode:  'screen',
  initialRouteName:'Main',
});
export const DrawNav = DrawerNavigator({
  stackNav:{
    screen:AppNavigator,
    navigationOptions:{
      drawerLabel:'首页',
      headerTitle:'home title',
    //   drawerIcon: ({tintColor}) => (
    //       <Image
    //           source={require('../imgs/usename.png')}
    //           style={[ {tintColor: tintColor}]}
    //       />
    //   ),
      // drawerStyle:{height:0}
  }
  },
    Home: {
      screen: HomePage,
      navigationOptions:{
        drawerLabel:'Home',
        headerTitle:'home title',
        // drawerIcon: ({tintColor}) => (
        //     <Image
        //         source={require('../imgs/usename.png')}
        //         style={[ {tintColor: tintColor}]}
        //     />
        // ),
    }
    },
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // initialRouteName: 'stackNav',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
});