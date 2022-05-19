import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../screens/Main';
import Onboarding from '../screens/Onboarding';
import Recipe from '../screens/Recipe';
import AddRecipe from '../screens/AddRecipe';
import AddIngredient from '../screens/AddIngredient';
import Pantry from '../screens/Pantry';
import History from '../screens/History';
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
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="AddRecipe" component={AddRecipe} />
      <Stack.Screen name="AddIngredient" component={AddIngredient} />
      <Stack.Screen name="Pantry" component={Pantry} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};

export default Route;
