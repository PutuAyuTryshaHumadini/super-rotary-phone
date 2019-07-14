import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={{ width: '100%', }}>
        <View style={styles.header}>
          <Text style={styles.txtHeader}> {this.props.title} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  header: {
    height: 70,
    backgroundColor: '#00FFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
