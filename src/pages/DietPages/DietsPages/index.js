import React from 'react';
import DietTimesPage from './DietTimesPage';
import MyDietsPage from './MyDietsPage';
import DietInformationPage from './DietInformationPage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function DietDetailRouter() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="MyDietsPage"
        component={index}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DietInformationPage"
        component={DietInformationPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyDietsPage" component={MyDietsPage} />
      <Tab.Screen name="DietTimesPage" component={DietTimesPage} />
    </Tab.Navigator>
  );
}
