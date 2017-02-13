/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/// <reference path="../typings/index.d.ts"/>

import * as React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
} from 'react-native';

class Scroller extends React.Component<any, any> {
    constructor(props: any) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      name: 'JOHN ' + this.props.name,
      address: 'LOVE LANE',
      dataSource: ds.cloneWithRows([
        'row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8',
        'row 9', 'row 10', 'row 11', 'row 12', 'row 13', 'row 14', 'row 15', 'row 16',
        'row 17', 'row 18', 'row 19', 'row 20', 'row 21', 'row 22', 'row 23', 'row 24',
        'row 25', 'row 26', 'row 27', 'row 28', 'row 29', 'row 30', 'row 31', 'row 32',
        ]),
    };

    console.log(this.state.dataSource.getRowCount(0));
  }


  renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    return (

      <Text>{this.state.dataSource.getRowData(0, rowID)}</Text>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Text style={{fontWeight: "bold"}}>name is {this.props.name}</Text>
          <Text style={{fontWeight: "bold"}}>Start of LIST</Text>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} style ={styles.listView} />
        </ScrollView>
      </View>
    );
  }
}

class ScrollProject extends React.Component<any, any> {
    constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Scroller name='Veera'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontSize: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listView: {
    marginTop: 10,
  },
});

export default ScrollProject;


