import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import {createAppContainer } from 'react-navigation'
import Header from "./Header";


export default class Mainscreen extends React.Component {

  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"E-Library"} />

      <View style={{alignItems:'center', height:100, justifyContent: 'space-around'}}>
      <Text >Login</Text>
      </View>
      <View style = {{alignItems:'center', justifyContent:'space-around'}}>
      <Image  style={{width: 100, height: 100}}
                          source={require("./book.png")}/>
                          </View>

                          <View style={{flex:1}}>
                                        <View style={{flex:1,
                                                    flexDirection:'row', borderWidth:2, backgroundColor:'white'}}>

                                      <Image  style={{width: 40, height: 40}}
                                                        source={require("./2.png")}/>
                                     <TextInput style = {{height: 40}}
                                    placeholder="Nama :"
                                      onChangeText={(Nama)=>this.setState({Nama})}
                                      keyboardType = 'text'  />
                                                        </View></View>
                          <View style={{flex:1,
                              flexDirection:'row', borderWidth:2, backgroundColor:'white'}}>
                                    <Image  style={{width:20, height:20}}
                                  source={require("./3.png")}/>

                                    <TextInput style = {{height: 40}}
                                      placeholder="Nis : "
                                      onChangeText={(Nis)=>this.setState({Nis})}
                                      keyboardType = 'numeric'/>
                                      </View>
                          <View style ={{marginTop:20, activeOpacity:0.5}}>
                           <Button
                           color="#FF8C00"
                           onPress={() => this.props.navigation.navigate('Library')}
                           title="Sign In"
                           accessibilityLabel="Library"/>
                           </View>

                            <View style ={{flex:2}}></View>
                      </View>




    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#008B8B',
    flex: 1,
    flexDirection: 'column'
  },


  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 20,
        color :'black',
        fontSize: 16

  },
});
