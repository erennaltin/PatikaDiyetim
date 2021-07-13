import React, {useState} from 'react';
import {View, Text, Pressable, Image, ActivityIndicator} from 'react-native';
import styles from './MealContainer.style';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {colors} from '../../styles';

export default function MealContainer({
  size,
  meal,
  mainNavigation,
  unclickable,
  dietName,
  onRefresh,
}) {
  const userSub = useSelector(state => state.store.user.user.sub);
  const [loading, setLoading] = useState(false);
  const kcal =
    size === 'Large'
      ? meal.nutrition === undefined
        ? 0
        : meal.nutrition.nutrients[0].amount
      : meal.kcal;

  const goModal = () => {
    mainNavigation.navigate('MealInformation', {
      mealId: meal.id,
    });
  };

  const deleteFromDiet = async () => {
    setLoading(true);
    try {
      const dietRef = await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(dietName);

      const diet = await dietRef.get();
      const mealList = await dietRef.collection('meals').get();
      await dietRef.update({
        kcal: mealList.docs.length === 1 ? 0 : diet.data().kcal - kcal,
      });

      const meals = await firestore()
        .collectionGroup('meals')
        .where('id', '==', meal.id)
        .orderBy('usage', 'desc')
        .get();

      meals.docs.forEach(snapshot => {
        snapshot.ref.update({
          usage: meals.docs[0].data().usage - 1,
        });
      });

      await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(dietName)
        .collection('meals')
        .doc(String(meal.id))
        .delete();

      onRefresh();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <Pressable
      style={styles.outerContainer}
      onPress={unclickable ? () => {} : goModal}
      delayLongPress={1000}
      onLongPress={dietName !== '' ? deleteFromDiet : () => {}}>
      {({pressed}) => (
        <View
          style={[
            styles.mainContainer,
            styles[`mainContainer${size}`],
            pressed &&
              // eslint-disable-next-line react-native/no-inline-styles
              dietName !== '' && {backgroundColor: 'red', borderColor: 'red'},
          ]}>
          <View style={[styles.imageContainer]}>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={colors.textColor.Primary}
              />
            ) : (
              <Image
                style={styles.image}
                source={{
                  uri: meal.image,
                }}
                resizeMode={unclickable ? 'contain' : 'cover'}
              />
            )}
          </View>
          <View style={styles.mealInformationContainer}>
            <Text
              numberOfLines={1}
              style={[styles.mealName, styles[`mealName${size}`]]}>
              {meal.title}
            </Text>
            {size === 'Large' && (
              <Text
                style={[styles.mealCategory, styles[`mealCategory${size}`]]}>
                {kcal}
              </Text>
            )}
          </View>
        </View>
      )}
    </Pressable>
  );
}
