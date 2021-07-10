import React, {useState, useEffect} from 'react';
import styles from './LoginPage.style';
import {View, Text} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import {SET_USER, SET_ACCESS_TOKEN} from '../../../store/reducers/UserReducer';
import {AUTH0_DOMAIN} from '@env';
import {useDispatch} from 'react-redux';
import Auth0 from 'react-native-auth0';
import axios from 'axios';
const auth0 = new Auth0({
  domain: 'erennaltin.eu.auth0.com',
  clientId: 'v93vjNKnoACC4B8Wom8FK5uWE4oEbRLf',
});
import firestore from '@react-native-firebase/firestore';

export default function LoginPage(props) {
  const [accessToken, setAccessToken] = useState('');
  const [isLogin, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const checkAuth = () => {
    setLoading(true);
    auth0.webAuth
      .authorize({scope: 'openid profile email'})
      .then(credentials => {
        setAccessToken(credentials.accessToken);
        dispatch(SET_ACCESS_TOKEN(credentials.accessToken));
        setLogin(true);
      })
      .catch(authError => setError(authError));
  };

  useEffect(() => {
    isLogin &&
      axios
        .get(AUTH0_DOMAIN + '/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(res => {
          console.log(res.data);
          firestore()
            .collection('users')
            .doc(res.data.sub)
            .set({
              name: res.data.name,
              country: res.data.locale,
              picture: res.data.picture,
            })
            .then(() => {
              console.log('User added!');
            });
          setLoading(false);
          dispatch(SET_USER(res.data));
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
  }, [accessToken, dispatch, isLogin]);

  const logout = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Diyetim </Text>
      </View>
      <View style={styles.formContainer}>
        <CustomButton
          onPress={checkAuth}
          title="Get in!"
          theme="Secondary"
          loading={loading}
        />
        <CustomButton onPress={logout} title="Logout!" theme="Secondary" />
        {error && <Text> {error} </Text>}
      </View>
    </View>
  );
}
