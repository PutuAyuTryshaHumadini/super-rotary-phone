import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Header from "./Header";


export default class Profil extends React.Component {

    render() {
      return (
        <View style={styles.containerMain}>
            <View style={{flex:1, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#00FFFF'}}>
                <Text style={{fontSize:25,
                            color:'black'}}>Profil</Text>
            </View>
        <View style={{flex:3}}>
            <View style={{flex:1,
                        flexDirection:'row'}}>
                <View style={{flex:1,
                            alignItems:'flex-end',
                            justifyContent:'space-around',
                            borderRadius:20}}>
                    <Image  style={{width:150, height: 150}}
                      source={require("./2.png")}/>
                </View>
                <View style={{flex:2,
                            alignItems:'stretch',
                            justifyContent:'space-evenly',
                            margin:5}}>
                    <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>Nama    :  </Text>
                    <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>NIS     :  </Text>
                    <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>Kelas   :  </Text>
                    <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>Jurusan :  </Text>
                    <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>Alamat  :  </Text>
                </View>

        </View>
        </View>
        <View style={{flex:6}}>

        </View>
        <View style={{flex:1, alignItems:'center',
                    justifyContent:'space-around',
                    backgroundColor:'#008B8B'}}>
            <Text style={{color:'black', fontSize:15}}>Trysha Humadini</Text>
        </View>
      </View>
      );
      }
      }

  const styles = StyleSheet.create({
      containerMain: {
      flex: 1,
      backgroundColor : '#008B8B'
      }
      })
