import React from 'react';
import DietTimesPage from './DietTimesPage';
import MyDietsPage from './MyDietsPage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyDietsPage" component={MyDietsPage} />
      <Tab.Screen name="DietTimesPage" component={DietTimesPage} />
    </Tab.Navigator>
  );
}
