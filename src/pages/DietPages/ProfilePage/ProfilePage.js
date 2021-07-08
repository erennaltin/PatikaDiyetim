import React from 'react';
// import styles from './ProfilePage.style';
import {View, Text, Button} from 'react-native';
import {LOG_OUT, CLEAN_ACCESS_TOKEN} from '../../../store/reducers/UserReducer';
import {useDispatch} from 'react-redux';
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({
  domain: 'erennaltin.eu.auth0.com',
  clientId: 'v93vjNKnoACC4B8Wom8FK5uWE4oEbRLf',
});

export default function ProfilePage() {
  const dispatch = useDispatch();
  const logout = async () => {
    // Hızlı giriş için clearSession ve CLEAN_ACCESS_TOKEN yapma!!!!
    // eslint-disable-next-line no-unused-vars
    const clearSession = await auth0.webAuth.clearSession();
    dispatch(CLEAN_ACCESS_TOKEN());
    dispatch(LOG_OUT());
  };

  return (
    <View>
      <Text> Profile Page</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
