import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../screens/Main';
import Onboarding from '../screens/Onboarding';
import defaultTheme from '../assets/theme';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: defaultTheme.colors.background,
        },
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default Route;
