import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

class TentangKami extends Component {

  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{flex:1, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#008B8B'}}>
                <Text style={{fontSize:25,
                            color:'black'}}>TENTANG KAMI</Text>
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
                        <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>Nama  :Putu Ayu Trysha Humadini</Text>
                        <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>NIM   : 17150151038</Text>
                        <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>Kelas : 4D</Text>
                        <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>Prodi : Pendidikan Teknik Informatika</Text>
                        <Text style={{borderWidth:2, fontSize:13, paddingLeft:10}}>Fakultas  : Teknik dan Kejuruan</Text>
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
        backgroundColor : '#E0FFFF'
    }
})

export default TentangKami;
