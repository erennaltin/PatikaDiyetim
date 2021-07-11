import React from 'react';
import DietsPage from './DietsPages';
import DiscoverMealPages from './DiscoverMealPages';
import ProfilePage from './ProfilePage';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
import MealInformationPage from './DiscoverMealPages/MealInformationPage';

function DietPagesRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DietsPage" component={DietsPage} />
      <Tab.Screen name="DiscoverMealPages" component={DiscoverMealPages} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default function DietPages() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="DietPages"
        component={DietPagesRouter}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="MealInformation"
        component={MealInformationPage}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}
