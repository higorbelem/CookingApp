import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';

import Route from './routes';
import theme from './assets/theme';
import Alert from './components/Alert';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Route />

          <Alert.Component />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
