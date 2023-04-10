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

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <RegisterScreen />
    </PaperProvider>
  );
}

export default App;
