import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import Routes from './src/routes';
import {store} from './src/redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <Routes/>

    </Provider>
  );
}
