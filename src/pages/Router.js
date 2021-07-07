import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthPages from './AuthPages';
import DietPages from './DietPages';
import {useSelector} from 'react-redux';
import {LOG_OUT, SET_USER} from '../store/reducers/UserReducer';

export default function Router() {
  const user = useSelector(state => state.user.user);
  const accessToken = useSelector(state => state.user.accessToken);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      {user === null ? <AuthPages /> : <DietPages />}
    </NavigationContainer>
  );
}
