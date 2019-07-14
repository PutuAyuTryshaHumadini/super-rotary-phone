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
              <Text style={{fontSize:30, color:'black', margin :10}}>Welcome to E-Library</Text>
          </View>

          <View style ={{margin :20, color:'black'}}>
          <View style = {{alignItems:'center', justifyContent:'space-around'}}>
          <Image  style={{width: 50, height: 50}}
                            source={require("./2.png")}/>
                            </View>
          <Button
           onPress={() => this.props.navigation.navigate('page1')}
                      title="Profil"
                      accessibilityLabel="Profil"
                      color="	#5F9EA0"
                    /></View>

            <View style ={{margin:20, color:'black'}}>
            <Button
            onPress={() => this.props.navigation.navigate('page1')}
                  title="Data Anggota"
                  accessibilityLabel="Data Anggota"
                  color="#90EE90"
                  /></View>

            <View style ={{margin:20, color:'black'}}>
                  <Button
                  onPress={() => this.props.navigation.navigate('page1')}
                        title="Data Buku"
                        accessibilityLabel="Data Anggota"
                        color="#90EE90"
                        /></View>
          <View style ={{margin:20, color:'black'}}>
          <Button
            onPress={() => this.props.navigation.navigate('page1')}
                title="Rak Buku"
                      accessibilityLabel="Data Anggota"
                     color="#90EE90"
                      /></View>

          <View style ={{margin:20, color:'black'}}>
            <Button
              onPress={() => this.props.navigation.navigate('page1')}
              title="Data Peminjaman Buku"
                accessibilityLabel="Data Anggota"
                     color="#90EE90"
                          /></View>

              <View style ={{margin:20, color:'black'}}>
                  <Button
                        onPress={() => this.props.navigation.navigate('page1')}
                          title="Data Pengembalian Buku"
                            accessibilityLabel="Data Anggota"
                               color="#90EE90"
                                      /></View>


          </View>
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
          });
