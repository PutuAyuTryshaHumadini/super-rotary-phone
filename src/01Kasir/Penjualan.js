import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class PENJUALAN extends Component {
  constructor(props){
    super(props)
    this.state = {
      JumlahBeli:'',
      JumlahHarga:'',
      Penjualan:'',
      Kode: '',
      Total: '',
      Bayar:'',
      Kembalian:''
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#E0FFFF'}}>

        <View style={{backgroundColor:'#008B8B'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'black', textAlign:'center'}} >
            PENJUALAN
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
            placeholder="Kode"
            onChangeText={(Kode)=>this.setState({Kode})}
            keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Jumlah Beli"
              onChangeText={(JumlahBeli)=>this.setState({JumlahBeli})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Jumalh Harga"
              onChangeText={(JumlahHarga)=>this.setState({JumlahHarga})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                Total: (this.state.JumlahBeli*this.state.JumlahHarga)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#008B8B'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Jumlah Beli =  {this.state.JumlahBeli} {"\n"}
              JumlahHarga=  {this.state.JumlahHarga} {"\n"}
              Total = {this.state.Total}
          </Text>

          <View style={{margin:20,padding: 10, backgroundColor:'#008B8B'}}>
              <TextInput style = {{height: 40}}
              placeholder="Uang Bayar"
              onChangeText={(Bayar)=>this.setState({Bayar})}
              keyboardType = 'numeric'
              />

              <Button
                onPress={()=>this.setState({
                  Kembalian: (this.state.Bayar-this.state.Total)
                })}
                title="Hitung"
                accessibilityLabel="Klik untuk menghitung"
              />
         </View>

         <View style={{margin:20, backgroundColor:'#90caf9'}}>
           <Text style = {{padding: 10, fontSize: 20}} >

               Kembalian = {this.state.Kembalian}
           </Text>

         </View>
          </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => PENJUALAN);
