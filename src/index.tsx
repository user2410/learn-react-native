/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import Home from '@scenes/Home';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Loading from '@components/Loading';
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
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
        <Loading />
      </PaperProvider>
    </Provider>
  );
}

export default App;
