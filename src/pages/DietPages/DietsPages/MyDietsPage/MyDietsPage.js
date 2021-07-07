import React from 'react';
import {View, Text} from 'react-native';
import styles from './MyDietsPage.style';
import {useSelector} from 'react-redux';

export default function MyDietsPage() {
  const accessToken = useSelector(state => state.user.accessToken);
  return (
    <View style={styles.mainContainer}>
      <Text> MyDietsPage </Text>
      <Text> {accessToken} </Text>
    </View>
  );
}
