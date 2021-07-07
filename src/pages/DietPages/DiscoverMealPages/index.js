import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import DiscoverMealPage from './DiscoverMealPage';
import MealInformationPage from './MealInformationPage';

export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DiscoverMealPage" component={DiscoverMealPage} />
      <Stack.Screen
        name="MealInformationPage"
        component={MealInformationPage}
      />
    </Stack.Navigator>
  );
}
