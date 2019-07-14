import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';

export default class Post extends React.Component {
  state = {
        nama: '',
        deskripsi:'',
        status:'',
        cek:false
  }
  handleSubmit = event => {

    axios.post('http://mhs.rey1024.com/apibudaya/postCategory.php', {
        nama:this.state.nama,
        deskripsi:this.state.deskripsi
     })
     .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const pesan = <Text style={{color:'red'}}> Data Berhasil ditambahkan </Text>;
    return (

      <View style={styles.container}>
          <View style={styles.vHeader}>
              <Text style={styles.txtHeader}>Tambah Warisan Budaya</Text>
          </View>
          <View style={styles.vInput}>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>Nama Budaya      :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (nama) => { this.setState({nama}) } }
                          placeholder=""
                  />
              </View>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>Deskripsi Budaya  :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (deskripsi) => { this.setState({deskripsi}) } }
                          placeholder=""
                  />
              </View>
          </View>
          <View style={styles.vButton}>
              <TouchableHighlight
                          onPressIn={() =>{
                            this.handleSubmit()
                          }}
                          accessibilityLabel="Tambah"
                          style={styles.vHitung}>

                          <Text style={styles.txtHeader}>Tambah</Text>
              </TouchableHighlight>
          </View>
          <View style={{flex:3}}>




          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  vHeader: {
      flex:0.8,
      backgroundColor:'#194B95',
      alignItems:'center',
      justifyContent:'center'
  },
  vInput: {
      flex:2,
      backgroundColor:'#E3F2FD',
      justifyContent:'flex-start',
  },
  vItemInput: {
      flex:1,
      flexDirection:'row',
  },
  txtLabelInput: {
      flex:2,
      height: 30,
      marginLeft:20,
      marginTop:10,
      color:'black'

  },
  txtInput: {
      flex:3,
      marginRight:20,
      marginTop:5,
      height:40,
      backgroundColor:'#fff',
      borderColor: 'black',
  },
  vButton:{
      flex:1,
  },
  vHitung:{
      flex:1,
      backgroundColor:'#194B95',
      marginBottom:10,
      marginLeft:60,
      marginRight:60,
      marginTop:20,
      alignItems:'center',
      justifyContent:'center'
  },
  txtHeader: {
      fontSize:20,
      color : 'white'
  },
});
