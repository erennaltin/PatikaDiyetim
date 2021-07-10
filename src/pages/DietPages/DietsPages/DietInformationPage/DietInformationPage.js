import React, {useState, useEffect} from 'react';
import styles from './DietInformationPage.style';
import {View, Text, Image, ScrollView, RefreshControl} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import InformationText from '../../../../components/InformationText';
import HorizontalMealSlider from './../../../../components/HorizontalMealSlider/HorizontalMealSlider';
import MealInformationHeader from '../../../../components/MealInformationHeader/MealInformationHeader';

export default function DietInformationPage({route, navigation}) {
  const title = route.params.title;
  const [diet, setDiet] = useState({});
  const [meals, setMeals] = useState({});
  const [refreshing, setRefreshing] = React.useState(false);
  const userSub = useSelector(state => state.store.user.user.sub);

  useEffect(() => {
    const fetchInformations = async () => {
      const informations = await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(title)
        .get();
      setDiet(informations.data());
      setRefreshing(false);
    };
    const fetchMeals = async () => {
      const mealList = await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(title)
        .collection('meals')
        .get();
      const initMeals = [];
      mealList.forEach(meal => {
        const obj = {
          id: meal.id,
          image: meal.data().image,
          summary: `>${meal.data().kcal} calories</b>`,
          title: meal.data().title,
        };
        initMeals.push(obj);
      });
      setMeals({results: initMeals});
    };

    fetchInformations();
    fetchMeals();
  }, [title, userSub, refreshing]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <MealInformationHeader
        title={title}
        navigation={navigation}
        userSub={userSub}
        onRefresh={onRefresh}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Image source={{uri: diet.picture}} style={styles.picture} />
        <View style={styles.innerContainer}>
          <View style={styles.informations}>
            <InformationText title="Name:" answer={title} />
            <InformationText title="Using:" answer={String(diet.isActive)} />
            <InformationText title="Total Calories:" answer={diet.kcal} />
            <InformationText title="Eating Time:" answer={diet.time} />
          </View>
          <View style={styles.mealContainer}>
            <HorizontalMealSlider data={meals} mainNavigation>
              <Text style={styles.mealText}> Meals </Text>
            </HorizontalMealSlider>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
