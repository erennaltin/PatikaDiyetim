import React from 'react';
import DietsPage from './DietsPages';
import DiscoverMealPages from './DiscoverMealPages';
import ProfilePage from './ProfilePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
import MealInformationPage from './DiscoverMealPages/MealInformationPage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {colors} from '../../styles';

function DietPagesRouter() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'DietsPage') {
            return <Icon name="list-alt" size={size} color={color} />;
          } else if (route.name === 'DiscoverMealPages') {
            return <Icon name="saved-search" size={size} color={color} />;
          } else if (route.name === 'ProfilePage') {
            return <FeatherIcon name="users" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.textColor.Secondary,
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
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
