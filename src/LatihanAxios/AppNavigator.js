// import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Category from './Category';
import ObjekBudaya from './ObjekBudaya';
import AddCategory from './AddCategory';

const AppNavigator = createStackNavigator(
  {
    Category: {
      screen: Category,
    },
    ObjekBudaya: {
      screen: ObjekBudaya,
    },
    AddCategory: {
      screen: AddCategory,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Category',
  }
);

export default createAppContainer(AppNavigator);
