import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class AddCategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nama: "",
      keterangan: ""
    }
  }

  _simpan = () => {
    axios.post('http://mhs.rey1024.com/apibudaya/postCategory.php', {
      nama: this.state.nama,
      deskripsi: this.state.keterangan
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Tambah Kategori Budaya' />
        <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Nama Kategori : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(nama) => this.setState({ nama })}
              value={this.state.nama}
            />
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: '5%', marginBottom: 20 }}>
            <View style={{ width: '30%', marginTop: 5 }}>
              <Text>Deskripsi : </Text>
            </View>
            <Textarea
              containerStyle={{
                height: 170,
                padding: 5, borderWidth: 1, borderColor: 'gray', width: '70%', borderRadius: 5
              }}
              style={{
                textAlignVertical: 'top', height: 160
              }}
              onChangeText={(keterangan) => this.setState({ keterangan })}
              defaultValue={this.state.keterangan}
              maxLength={120}
              placeholder={'Input Keterangan ...'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <TouchableHighlight
            style={{
              width: '90%', marginHorizontal: '5%', borderRadius: 20, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF5722'
            }}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Category')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 24, color: 'white' }}>SIMPAN DATA</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
