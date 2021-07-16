import React, {useState, useEffect, useCallback} from 'react';
import styles from './DietInformationPage.style';
import {View, Text, Image, ScrollView, RefreshControl} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import InformationText from '../../../../components/InformationText';
import HorizontalMealSlider from './../../../../components/HorizontalMealSlider/HorizontalMealSlider';
import DietInformationHeader from '../../../../components/DietInformationHeader/DietInformationHeader';

export default function DietInformationPage({route, navigation}) {
  const title = route.params.title;
  const [diet, setDiet] = useState({kcal: 0});
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
          kcal: meal.data().kcal,
          title: meal.data().title,
        };
        initMeals.push(obj);
      });
      setMeals({results: initMeals});
    };

    fetchInformations();
    fetchMeals();
  }, [title, userSub, refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <DietInformationHeader
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
            <InformationText
              title="Total Calories:"
              answer={diet.kcal.toFixed(2)}
            />
            <InformationText title="Eating Time:" answer={diet.time} />
            <InformationText
              title="To delete any meal from the diet press on for 1 second."
              answer=""
            />
          </View>
          <View style={styles.mealContainer}>
            <HorizontalMealSlider
              data={meals}
              mainNavigation={navigation}
              title={title}
              onRefresh={onRefresh}>
              <Text style={styles.mealText}> Meals </Text>
            </HorizontalMealSlider>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
