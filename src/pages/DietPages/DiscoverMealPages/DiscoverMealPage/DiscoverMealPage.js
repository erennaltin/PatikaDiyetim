import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import styles from './DiscoverMealPage.style';
import MealContainer from './../../../../components/MealContainer/MealContainer';
import useMeal from './../../../../hooks/useMeal';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../../styles';
import Turkish from '../../../../assets/icons/flags/Turkish.svg';

export default function DiscoverMealPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('err');
  const [todaysKitchen, setKitchen] = useState('');

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

  // Loading Check
  useEffect(() => {
    if (randomLoading) {
      setLoading(true);
    } else if (kitchenLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [randomLoading, kitchenLoading]);

  // Error Check
  useEffect(() => {
    if (randomError) {
      setError(randomError);
    } else if (kitchenError) {
      setError(kitchenError);
    } else {
      setError(null);
    }
  }, [randomError, kitchenError]);

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
        <View style={styles.horizontalMenu}>
          <Text style={styles.todaysKitchen}>
            {`Kitchen of Today: ${todaysKitchen}`}
            <Turkish width={16} height={16} />
          </Text>
        </View>
        <MealContainer size="Small" meal={randomMeal[0]} />
      </ScrollView>
    </View>
  );
}
