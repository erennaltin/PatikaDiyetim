import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import styles from './DiscoverMealPage.style';
import MealContainer from './../../../../components/MealContainer/MealContainer';
import CustomIcon from './../../../../components/CustomIcon';
import useMeal from './../../../../hooks/useMeal';
import useRandomMeal from './../../../../hooks/useRandomMeal';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../../styles';
import HorizontalMealSlider from '../../../../components/HorizontalMealSlider/HorizontalMealSlider';
import firestore from '@react-native-firebase/firestore';
import {FOOD_API_KEY} from '@env';

export default function DiscoverMealPage({navigation}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('err');
  const [todaysKitchen, setKitchen] = useState('American');
  const [preferences, setPreferences] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  const {
    loading: randomLoading,
    meal: randomMeal,
    error: randomError,
  } = useRandomMeal(
    `https://api.spoonacular.com/recipes/random?number=1&apiKey=${FOOD_API_KEY}`,
    refreshing,
  );

  const {
    loading: kitchenMealLoading,
    meal: kitchenMealList,
    error: kitchenMealError,
  } = useMeal(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${FOOD_API_KEY}&cuisine=${todaysKitchen}&number=20`,
    refreshing,
  );

  // Most selected meals
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const list = await firestore()
          .collectionGroup('meals')
          .orderBy('usage', 'desc')
          .limit(20)
          .get();

        const initList = [];
        list.docs.forEach(item => {
          const obj = {
            id: item.id,
            title: item.data().title,
            image: item.data().image,
            kcal: item.data().kcal,
          };
          initList.push(obj);
        });
        let reserve = 0;
        const reserveList = initList.filter(item => {
          if (item.id !== reserve) {
            reserve = item.id;
            return true;
          } else {
            return false;
          }
        });
        setPreferences({results: reserveList});
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeals();
    setRefreshing(false);
  }, [refreshing]);

  // Loading Check
  useEffect(() => {
    if (randomLoading) {
      setLoading(true);
    } else if (kitchenMealLoading) {
      setLoading(true);
    } else {
      setRefreshing(false);
      setLoading(false);
    }
  }, [randomLoading, kitchenMealLoading]);

  // Error Check
  useEffect(() => {
    if (randomError) {
      setError(randomError);
    } else if (kitchenMealError) {
      setError(kitchenMealError);
    } else {
      setError(null);
    }
  }, [randomError, kitchenMealError]);

  // Kitchen's list handling
  useEffect(() => {
    const cuisines = [
      'American',
      'British',
      'Chinese',
      'French',
      'Greek',
      'Indian',
      'Irish',
      'Italian',
      'Japanese',
      'Mexican',
      'Spanish',
      'Thai',
      'Vietnamese',
      'European',
      'German',
      'African',
      'Caribbean',
      'Mediterranean',
      'Middle Eastern',
      'Nordic',
    ];
    const day = new Date().getDay();
    const reserve = day > 20 ? 31 - day : day;
    setKitchen(cuisines[reserve]);
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="medium" color={colors.textColor.Secondary} />
    );
  } else if (error) {
    return <Text> {error} </Text>;
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.innerContainer}>
        <Text style={styles.randomMeal}> Take a new shot! </Text>
        <MealContainer
          mainNavigation={navigation}
          size="Large"
          meal={randomMeal}
          dietName=""
        />
        <HorizontalMealSlider
          data={kitchenMealList}
          mainNavigation={navigation}>
          <Text style={styles.todaysKitchen}>
            {`Cuisine of Today: ${todaysKitchen}`}
          </Text>
          <CustomIcon style={styles.flagIcon} icon={todaysKitchen} size={24} />
        </HorizontalMealSlider>
        <HorizontalMealSlider data={preferences} mainNavigation={navigation}>
          <Text style={styles.todaysKitchen}>Your Preferences</Text>
        </HorizontalMealSlider>
      </ScrollView>
    </View>
  );
}
