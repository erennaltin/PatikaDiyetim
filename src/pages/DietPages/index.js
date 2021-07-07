import React from 'react';
import DietsPage from './DietsPages';
import DiscoverMealPages from './DiscoverMealPages';
import ProfilePage from './ProfilePage';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

export default function DietPages() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DietsPage" component={DietsPage} />
      <Tab.Screen name="DiscoverMealPages" component={DiscoverMealPages} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} />
    </Tab.Navigator>
  );
}
