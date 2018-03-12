/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import store from './src/store/index.js'
import { Provider } from 'react-redux'
import {DrawNav} from './src/main'
export default class App extends Component{
  componentWillMount(){
   
  }
  render() {
    return (
      <Provider store={store}>
          <DrawNav />
      </Provider> 
    );
  }
}

