import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import login2 from './login2';
import signup from './signup';
import Category from './Category';
import AddCategory from './AddCategory';
import Updatecategory from './Updatecategory';
import ObjekBarang from './ObjekBarang';
import AboutMe from './AboutMe';
import Home from './Home';
import Upload from './Upload';

const Navigator = createStackNavigator(
  {
    login2: {
      screen: login2,
    },
    signup: {
      screen: signup,
    },
    Category: {
      screen: Category,
    },
    Upload: {
      screen: Upload,
    },
    AddCategory: {
      screen: AddCategory,
    },
    Updatecategory: {
      screen: Updatecategory,
    },
    ObjekBarang: {
      screen: ObjekBarang,
    },
    Home: {
      screen: Home,
    },
    AboutMe: {
      screen: AboutMe,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'login2',
  }
);

export default createAppContainer(Navigator);