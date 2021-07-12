import React, {useState} from 'react';
import styles from './SelectDietToAdd.style';
import {View, Text, TouchableHighlight, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {colors} from '../../styles';

export default function SelectDietToAdd({
  title,
  mealId,
  mealCal,
  mealTitle,
  mealImage,
  userSub,
  setModalVisible,
}) {
  const [loading, setLoading] = useState(false);

  const addToFirebase = async () => {
    setLoading(true);
    try {
      const isThere = await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(title)
        .collection('meals')
        .doc(String(mealId))
        .get();

      if (isThere.exists) {
        setLoading(false);
        setModalVisible(false);
        return 0;
      }

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
        .orderBy('usage', 'desc')
        .get();

      meals.docs.forEach(snapshot => {
        snapshot.ref.update({
          usage: meals.docs[0].data().usage + 1,
        });
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    setModalVisible(false);
  };

  return (
    <TouchableHighlight
      onPress={addToFirebase}
      style={styles.textContainer}
      activeOpacity={0.8}
      underlayColor="#eee">
      <View style={styles.innerContainer}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.textColor.Secondary} />
        ) : (
          <Text style={styles.text}> {title} </Text>
        )}
      </View>
    </TouchableHighlight>
  );
}
