import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './DiscoverMealPage.style';
import MealContainer from './../../../../components/MealContainer/MealContainer';
import CustomIcon from './../../../../components/CustomIcon';
import useMeal from './../../../../hooks/useMeal';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../../styles';
import HorizontalMealSlider from '../../../../components/HorizontalMealSlider/HorizontalMealSlider';

export default function DiscoverMealPage({navigation}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('err');
  const [todaysKitchen, setKitchen] = useState('American');

  const {
    loading: randomLoading,
    meal: randomMeal,
    error: randomError,
  } = useMeal(
    'https://api.spoonacular.com/recipes/random?number=1&apiKey=4604414bb7954a628bbbbdc68944253b',
  );

  const {
    loading: kitchenMealLoading,
    meal: kitchenMealList,
    error: kitchenMealError,
  } = useMeal(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=4604414bb7954a628bbbbdc68944253b&cuisine=${todaysKitchen}&number=20`,
  );

  // Loading Check
  useEffect(() => {
    if (randomLoading) {
      setLoading(true);
    } else if (kitchenMealLoading) {
      setLoading(true);
    } else {
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
    ];
    const random = Math.floor(Math.random() * cuisines.length);
    setKitchen(cuisines[random]);
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
      <ScrollView style={styles.innerContainer}>
        <Text style={styles.randomMeal}> Take a new shot! </Text>
        <MealContainer
          mainNavigation={navigation}
          size="Large"
          meal={randomMeal.recipes[0]}
        />
        <HorizontalMealSlider
          data={kitchenMealList}
          mainNavigation={navigation}>
          <Text style={styles.todaysKitchen}>
            {`Cuisine of Today: ${todaysKitchen}`}
          </Text>
          <CustomIcon style={styles.flagIcon} icon={todaysKitchen} size={24} />
        </HorizontalMealSlider>
      </ScrollView>
    </View>
  );
}
