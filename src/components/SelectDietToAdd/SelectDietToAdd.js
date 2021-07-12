import React from 'react';
import styles from './SelectDietToAdd.style';
import {View, Text, TouchableHighlight} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function SelectDietToAdd({
  title,
  mealId,
  mealCal,
  mealTitle,
  mealImage,
  userSub,
  setModalVisible,
}) {
  const addToFirebase = async () => {
    try {
      await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(title)
        .collection('meals')
        .doc(String(mealId))
        .set({
          id: mealId,
          image: mealImage,
          kcal: mealCal,
          title: mealTitle,
          usage: 0,
        });

      const dietRef = await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(title);

      const diet = await dietRef.get();
      await dietRef.update({
        picture: mealImage,
        kcal: diet.data().kcal + mealCal,
      });

      const meals = await firestore()
        .collectionGroup('meals')
        .where('id', '==', mealId)
        .get();

      meals.docs.forEach(snapshot => {
        snapshot.ref.update({
          usage: snapshot.data().usage + 1,
        });
      });
    } catch (err) {
      console.log(err);
    }

    setModalVisible(false);
  };

  return (
    <TouchableHighlight
      onPress={addToFirebase}
      style={styles.textContainer}
      activeOpacity={0.8}
      underlayColor="#eee">
      <View style={styles.innerContainer}>
        <Text style={styles.text}> {title} </Text>
      </View>
    </TouchableHighlight>
  );
}
