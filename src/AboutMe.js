import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default class AboutMe extends Component {

  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{height:15}}>

            </View>
            <View style={{flex:3}}>
                <View style={{flex:1,
                            flexDirection:'row'}}>
                    <View style={{flex:1,
                                alignItems:'flex-end',
                                justifyContent:'space-around',
                                borderRadius:20}}>
                        <Image  style={{width: 100, height: 125}}
                        source={require("./tasyasya.png")}/>
                    </View>
                    <View style={{flex:2,
                                alignItems:'stretch',
                                justifyContent:'space-around',
                                margin:5}}>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>Nama  : Gusti Ayu Permata Sari</Text>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>NIM   : 1715051045</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:6}}>

            </View>
            <View style={{flex:1, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#87CEFA'}}>
                <Text style={{color:'black', fontSize:20}}>Gusti Ayu Permata Sari --- 1715051045</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    }
})
