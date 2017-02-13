/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  WebView
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'http://10.60.1.8'

export default class WebViewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: DEFAULT_URL,
      status: 'No Page Loaded',
      loading: true,
      scalesPageToFit: true,
    };
  }
  render() {
  console.log(this.state.url);
  var self=this;
  return (
    <View style={[styles.container]}>
      <Image style={styles.bg} source={require('./Image/beerback.jpg')} />
      <View style={styles.topBar}>
        <View style={styles.topBarView}>
          <View style={{flex:0.1, paddingLeft: 5}}>
            <Image style={{width: 40}} size={30} source={require('./Image/menu-icon.png')}></Image>
          </View>
          <View style={{flex:0.2}}>
            <Text style={styles.topBarText}>WebView</Text>
          </View>
        </View>
      </View>
      <View style={{flex:1}}>
        <WebView
        ref={WEBVIEW_REF}
        automaticallyAdjustContentInsets={false}
        source={{uri: this.state.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bg: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: windowSize.width,
      height: windowSize.height
    },
    topBar: {
      padding:5,
      backgroundColor: '#237cc5'
    },
    topBarView: {
      flex:1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    topBarText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      alignItems:'center'
    },
});

AppRegistry.registerComponent('WebViewProject', () => WebViewProject);
