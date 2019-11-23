import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Loading from './src/screens/Loading'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Main from './src/screens/Main'


<<<<<<< HEAD
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      SignUp,
      Login,
      Main
    },
    {
      initialRouteName:'Loading'
    })
);
=======
export default createAppContainer(createSwitchNavigator(

  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName:'Loading'
  }
));
>>>>>>> d8d67ac9eff1c17a8d0547c6106b5f01d29da33c
