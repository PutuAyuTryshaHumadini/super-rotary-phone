import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Main';
import Post from './Post';
import Kategori from './Kategori';
import DetailKategori from './DetailKategori';


const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Post:Post,
            Kategori:Kategori,
            DetailKategori:DetailKategori,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);
