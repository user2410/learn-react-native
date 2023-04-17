/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './App.style';
import {RegisterScreen} from './app/screens/register/register.screen';
import {HomeScreen} from './app/screens/home/home.screen';
import AddressScreen from './app/screens/address/address.screen';

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <AddressScreen />
    </PaperProvider>
  );
}

export default App;
