/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/// <reference path="../typings/index.d.ts"/>

import * as React from 'react'
//import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native'

import Forecast from './Forecast'

const API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';

class WeatherProject extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      zip: '',
      forecast: null
    };
  }

  onZipCodeChanged(event: any) {
    let zip: string = event.nativeEvent.text;
    console.log("onZipCodeChanged: zip=" + zip);
  }

  onZipCodeTextChanged(text: string) {
    let zip: string = text;
    console.log("onZipCodeTextChanged: zip=" + zip);
  }

  onZipCodeSubmitted(event: any) {
    let zip: string = event.nativeEvent.text;
    console.log("onZipCodeSubmitted: zip=" + zip);
    this.setState({zip: zip});
    fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + zip + '&units=imperial&APPID=' + API_KEY)
      .then((response: any) => response.json())
      .then((responseJSON: any) => {
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error: any) => {
        console.warn(error);
      });
  }

  render() {
    var content = null;
    if (this.state.forecast !== null) {
          content = <Forecast
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}/>;
    }
    return (
      <View style={[styles.container]}>
        <Text style={[styles.instructions]}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.mainText}>
               Current weather for
        </Text>
        <View style={[styles.zipContainer]}>
          <TextInput
            style={[styles.zipCode]}
            placeholder={'Zip'}
            onChange={(event) => this.onZipCodeChanged(event)}
            onChangeText={(text) => this.onZipCodeTextChanged(text)}
            onSubmitEditing={(event) => this.onZipCodeSubmitted(event)}/>
        </View>
           {content}
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    alignItems: 'center'
  },
  zipCode: {
    width: 50,
    height: 30,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    textAlign: 'center'
  },
  mainText: {
    //flex: 1,
    fontSize: baseFontSize,
    color: 'black'
  }
});

export default WeatherProject;
