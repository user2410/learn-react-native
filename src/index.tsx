/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Address from '@scenes/Address';
// import Home from '@scenes/Home';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
// import Login from '@scenes/Login';
// import Register from '@scenes/Register';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#AA336A',
  },
};

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <Address />
    </PaperProvider>
  );
}

export default App;
