import React, {Component} from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
//import Category from './src/AppNavigator'
import Navigator from './src/UAS/Navigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Navigator/>
    );
  }
}
