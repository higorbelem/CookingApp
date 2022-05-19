import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Route from './routes';
import theme from './assets/theme';
import Alert from './components/Alert';
import store, {persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Route />

            <Alert.Component />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
