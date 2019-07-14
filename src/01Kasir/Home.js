import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import TentangKami from './TentangKami';
import DataBarang from './DataBarang';
import Penjualan from './Penjualan';

export default class Home extends Component {
    render() {
      return (
          <MyApp />
      )
    }
  }

class ThisHome extends Component {
  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{flex:1, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#008B8B'}}>
                <Text style={{fontSize:30, color:'black'}}>APLIKASI KASIR</Text>
            </View>
            <View style={{flex:3, alignItems:'center',
                        justifyContent:'space-around',
                        margin:10}}>
                <Image  style={{width: 250, height: 250}}
                        source={require("./1.png")}/>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1,
                            flexDirection:'row'}}>
                    <View style={{flex:1,
                                alignItems:'center',
                                justifyContent:'space-around',
                                backgroundColor:'#6495ED',
                                margin:5}}>
                        <TouchableHighlight style={{ flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#6495ED',
                              margin: 10, }}
                                            onPress={ () => this.props.navigation.navigate('ScreenPenjualan')}
                                            underlayColor='#6495ED'>
                                            <Text style={{color:'black', fontSize:25}}>Penjualan</Text></TouchableHighlight>
                    </View>
                    <View style={{flex:1,
                                alignItems:'center',
                                justifyContent:'space-around',
                                backgroundColor:'#6495ED',
                                margin:5}}>
                        <TouchableHighlight style={{ flex: 1,
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  borderRadius: 20,
                                                  backgroundColor: '#6495ED'}}
                                            onPress={ () => this.props.navigation.navigate('ScreenDataBarang')}
                                            underlayColor='#F4B400'>
                                            <Text style={{color:'black', fontSize:25}}>Data Barang</Text></TouchableHighlight>
                    </View>
                </View>
                <View style={{flex:1,
                            justifyContent:'space-around'}}>
                    <View style={{flex:1,
                    alignItems:'center',
                    justifyContent:'space-around',
                    backgroundColor:'#F08080'}}>
                    <TouchableHighlight style={{ flex: 1,
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  borderRadius: 20,
                                                  backgroundColor: '#F08080'}}
                                            onPress={ () => this.props.navigation.navigate('ScreenTentangKami')}>
                                            <Text style={{color:'black', fontSize:30}}>Tentang Kami</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={{flex:1, alignItems:'center',justifyContent:'space-around',  backgroundColor:'#008B8B'}}>
                <Text style={{color:'black', fontSize:20,}}>Trysha Humadini - 17150151038</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor : '#E0FFFF'
    }
})

const MyDrawerNavigator = createDrawerNavigator(
    {
      ScreenHome: {
        screen: ThisHome,
      },
      ScreenPenjualan: {
        screen: Penjualan,
      },
      ScreenDataBarang: {
        screen: DataBarang,
      },
      ScreenTentangKami: {
        screen: TentangKami,
      },
    },
    {
      initialRouteName: "ScreenHome",
    }
  );

const MyApp = createAppContainer(MyDrawerNavigator);
