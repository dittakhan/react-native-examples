import * as React from 'react'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Forecast extends React.Component<any, any> {
      constructor(props: any) {
    super(props);
  }
  render() {
    console.log('Render Forecast')
    return (
      <View>
        <Text style={[styles.bigText]}>
          {this.props.main}
        </Text>
        <Text style={[styles.mainText]}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={[styles.bigText]}>
          {this.props.temp}°F
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'grey'
  }
})

export default Forecast;
