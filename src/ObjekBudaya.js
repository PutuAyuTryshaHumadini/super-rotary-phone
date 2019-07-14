import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import axios from 'axios';
import Header from './Header';

export default class ObjekBudaya extends Component {
  constructor(props) {
    super(props)
    prefik_url = 'http://wadaya.rey1024.com/api/uploads/';
    
    this.state = {
      listbudaya: [],
    };
  }
  componentDidMount() {
    const id = this.props.navigation.state.params.id
    axios.get(`http://mhs.rey1024.com/apibudaya/getListBudaya.php?id_kategori=` + id)
      .then(res => {
        const listbudaya = res.data;
        console.log(listbudaya);
        this.setState({ listbudaya });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.nama_budaya}
      leftAvatar={{ source: { uri: prefik_url + item.url_gambar } }}
    />
  )
  render() {
    const title = this.props.navigation.getParam('title', 'NO-TITLE');

    return (
      <View style={styles.container} >
        <Header title={title}/>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.listbudaya}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});