import React, {useState, useEffect} from 'react';
import styles from './MealInformationPage.style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors, sizes} from '../../../../styles';

import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  View,
} from 'react-native';
import useMeal from '../../../../hooks/useMeal';

export default function MealModal({route}) {
  const [meal, setMeal] = useState({});
  const [error, setError] = useState(null);
  const mealId = route.params.mealId;

  const {
    loading,
    meal: fetchedMeal,
    error: fetchedError,
  } = useMeal(
    `https://api.spoonacular.com/recipes/${mealId}/information?includeNutrition=true&apiKey=4604414bb7954a628bbbbdc68944253b`,
  );

  const handleLink = () => {
    Linking.openURL(meal.sourceUrl);
  };

  useEffect(() => {
    fetchedMeal === undefined
      ? setError('Not Found!')
      : (setError(null), setMeal(fetchedMeal));

    fetchedError && setError(fetchedError);
  }, [fetchedMeal, fetchedError]);

  return loading ? (
    <ActivityIndicator size="small" color={colors.textColor.Secondary} />
  ) : error ? (
    <Text> {error} </Text>
  ) : (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: meal.image}} />
      <View style={styles.informationContainer}>
        <View>
          <Text style={styles.title}> {meal.title} </Text>
          <Text style={styles.cal}>
            {meal.nutrition.nutrients[0].amount} kcal
          </Text>
        </View>
        <TouchableOpacity style={styles.addToDiet}>
          <MaterialIcon
            name="add-circle-outline"
            size={sizes.fontSize.Title}
            color={colors.textColor.Primary}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.instruction}> {meal.summary} </Text>
      <TouchableOpacity style={styles.linkContainer} onPress={handleLink}>
        <Text style={styles.link}> See the original!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
