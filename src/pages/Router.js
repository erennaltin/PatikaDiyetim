import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthPages from './AuthPages';
import DietPages from './DietPages';
import {useSelector} from 'react-redux';

export default function Router() {
  const user = useSelector(state => state.store.user.user);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {user === null ? <AuthPages /> : <DietPages />}
    </NavigationContainer>
  );
}
