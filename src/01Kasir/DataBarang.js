import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class DataBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.containerMain}>
      <View style={{flex:1, alignItems:'center',
                    justifyContent:'space-around',
                    backgroundColor:'#008B8B'}}>
            <Text style={{fontSize:30,
                        color:'black'}}>DATA BARANG</Text>
        </View>
        <View style={{flex:3,
                    alignItems:'stretch'}}>
            <View>
                <Text style={styles.boxData}>01.Coffe Espresso</Text>
                <Text style={styles.boxData}>02. Coffe Arabica</Text>
                <Text style={styles.boxData}>03.Coffe  Macchiato</Text>
                <Text style={styles.boxData}>04. Coffe Luwak </Text>
                <Text style={styles.boxData}>05. Coffe Capucino</Text>
                <Text style={styles.boxData}>06. Coffe Latte </Text>
                <Text style={styles.boxData}>07. Coffe Piccolo</Text>
                <Text style={styles.boxData}>08. Coffe Americano</Text>
                <Text style={styles.boxData}>09. Coffe Bali</Text>
                <Text style={styles.boxData}>10. Coffe Robusta</Text>
            </View>
        </View>
        <View style={{flex:3}}></View>
        <View style={{flex:1, alignItems:'center',
                    justifyContent:'space-around',
                    backgroundColor:'#008B8B'}}>
            <Text style={{color:'black', fontSize:14}}>Aneka Coffe</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor:'#E0FFFF'
    },

    boxData:{
        backgroundColor:'#1E90FF',
        fontSize:20,
        margin:5,
        color:'white',
        borderRadius:10,
        paddingLeft:5
    }
})

export default DataBarang;
