import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './DiscoverMealPage.style';
import MealContainer from './../../../../components/MealContainer/MealContainer';
import CustomIcon from './../../../../components/CustomIcon';
import useMeal from './../../../../hooks/useMeal';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../../styles';
import HorizontalMealSlider from '../../../../components/HorizontalMealSlider/HorizontalMealSlider';

export default function DiscoverMealPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('err');
  const [todaysKitchen, setKitchen] = useState('Turkish');
  // const [todaysKitchenMeals, setTodaysKitchen] = useState([]);

  const {
    loading: randomLoading,
    meal: randomMeal,
    error: randomError,
  } = useMeal('https://www.themealdb.com/api/json/v1/1/random.php');

  const {
    loading: kitchenLoading,
    meal: kitchenList,
    error: kitchenError,
  } = useMeal('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

  const {
    loading: kitchenMealLoading,
    meal: kitchenMealList,
    error: kitchenMealError,
  } = useMeal(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${todaysKitchen}`,
  );

  // Loading Check
  useEffect(() => {
    if (randomLoading) {
      setLoading(true);
    } else if (kitchenLoading) {
      setLoading(true);
    } else if (kitchenMealLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [randomLoading, kitchenLoading, kitchenMealLoading]);

  // Error Check
  useEffect(() => {
    if (randomError) {
      setError(randomError);
    } else if (kitchenError) {
      setError(kitchenError);
    } else if (kitchenMealError) {
      setError(kitchenMealError);
    } else {
      setError(null);
    }
  }, [randomError, kitchenError, kitchenMealError]);

  // Kitchen's list handling
  useEffect(() => {
    if (kitchenList !== '') {
      const length = kitchenList.length;
      let day = new Date().getDate();
      day = day >= length ? 31 - day : day;
      setKitchen(kitchenList[day].strArea);
    }
  }, [kitchenList]);

  if (loading) {
    return (
      <ActivityIndicator size="medium" color={colors.textColor.Secondary} />
    );
  } else if (error) {
    return <Text> {error} </Text>;
  }
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.innerContainer}>
        <Text style={styles.randomMeal}> Take a new shot! </Text>
        <MealContainer size="Large" meal={randomMeal[0]} />
        <HorizontalMealSlider data={kitchenMealList}>
          <Text style={styles.todaysKitchen}>
            {`Kitchen of Today: ${todaysKitchen}`}
          </Text>
          <CustomIcon style={styles.flagIcon} icon={todaysKitchen} size={24} />
        </HorizontalMealSlider>
      </ScrollView>
    </View>
  );
}
