import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';

import Route from './routes';
import theme from './assets/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
