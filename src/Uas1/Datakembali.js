import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Header from "./Header";


export default class Library extends React.Component {

    render() {
      return (
      <View style={styles.containerMain}>
          <View style={{alignItems:'center',
                      justifyContent:'space-around',
                      backgroundColor:'#00FFFF'}}>
              <Text style={{fontSize:30, color:'black', margin :10}}>Data Kembali</Text>
          </View>

          <View style={{flexDirection:'row', borderWidth:2, backgroundColor:'white', justifyContent:'center', marginTop:10}}>
          <TextInput style = {{height: 40}}
         placeholder="Kode Kembali :"
           onChangeText={(Nama)=>this.setState({Nama})}
           keyboardType = 'text'  />
                             </View>

          <View style={{flexDirection:'row', borderWidth:2, backgroundColor:'white', justifyContent:'center', marginTop:20}}>
            <TextInput style = {{height: 40}}
                placeholder="Kode Buku :"
                  onChangeText={(Nama)=>this.setState({Nama})}
                    keyboardType = 'text'  />
                          </View>

                                    <View style={{flexDirection:'row', borderWidth:2, backgroundColor:'white', justifyContent:'center', marginTop:20}}>
                                      <TextInput style = {{height: 40}}
                                          placeholder="Kode Anggota:"
                                            onChangeText={(Nama)=>this.setState({Nama})}
                                              keyboardType = 'text'  />
                                                    </View>



                <View style={{flexDirection:'row', borderWidth:2, backgroundColor:'white', justifyContent:'center', marginTop:20}}>
                    <TextInput style = {{height: 40}}
                            placeholder="Nama Anggota:"
                                    onChangeText={(Nama)=>this.setState({Nama})}
                                      keyboardType = 'text'  />
                                        </View>


                      <View style={{flexDirection:'row', borderWidth:2, backgroundColor:'white', justifyContent:'center', marginTop:20}}>
                        <TextInput style = {{height: 40}}
                            placeholder="Batas Waktu:"
                                onChangeText={(Nama)=>this.setState({Nama})}
                                keyboardType = 'text'  />
                                  </View>

                                                        <View style={{flexDirection:'row', borderWidth:2, backgroundColor:'white', justifyContent:'center', marginTop:20}}>
                                                          <TextInput style = {{height: 40}}
                                                              placeholder="Tanggal Kembali:"
                                                                  onChangeText={(Nama)=>this.setState({Nama})}
                                                                  keyboardType = 'text'  />
                                                                    </View>
              <View style={{flexDirection:'row', borderWidth:2, backgroundColor:'white', justifyContent:'center',marginTop:20}}>
                  <TextInput style = {{height: 40}}
                          placeholder="Denda :"
                                  onChangeText={(Nama)=>this.setState({Nama})}
                                    keyboardType = 'text'  />
                                      </View></View>




        );
      }
    }

  const styles = StyleSheet.create({
              containerMain: {
                  flex: 1,
                  backgroundColor : '#008B8B'
              },
              buttonText: {
                    textAlign: "center",
                    height: 40,
                    width: "100%",
                    marginTop: 10,
                    color: "black",
                    fontSize: 16
                  },

                  TextInput : {
                    marginTop: 20,
                    width:"50%",
                    height:'40',
                    color:'black'
                  },
          });
