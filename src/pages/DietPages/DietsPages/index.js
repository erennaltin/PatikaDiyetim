import React from 'react';
import DietTimesPage from './DietTimesPage';
import MyDietsPage from './MyDietsPage';
import DietInformationPage from './DietInformationPage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {colors} from '../../../styles';

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
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'MyDietsPage') {
            return <AntIcon name="rest" size={24} color={color} />;
          } else if (route.name === 'DietTimesPage') {
            return <FeatherIcon name="watch" size={24} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.textColor.Secondary,
        inactiveTintColor: 'gray',
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen name="MyDietsPage" component={MyDietsPage} />
      <Tab.Screen name="DietTimesPage" component={DietTimesPage} />
    </Tab.Navigator>
  );
}
