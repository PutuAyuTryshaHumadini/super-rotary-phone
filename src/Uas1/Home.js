import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Main';
import Library from './Library';
//import Menu from './Menu';
//import Daftaranggota from './Daftaranggota';
//import DetailKategori from './DetailKategori';


const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Library:Library,
//            Menu: Menu,
            //Daftaranggota:Daftaranggota,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);
