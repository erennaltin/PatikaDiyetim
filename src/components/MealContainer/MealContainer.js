import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './MealContainer.style';

export default function MealContainer({size, meal}) {
  return (
    <View style={[styles.mainContainer, styles[`mainContainer${size}`]]}>
      <Image
        style={styles.image}
        source={{
          uri: meal.strMealThumb,
        }}
      />
      <View style={styles.mealInformationContainer}>
        <Text
          numberOfLines={1}
          style={[styles.mealName, styles[`mealName${size}`]]}>
          {meal.strMeal}
        </Text>
        {size === 'Large' && (
          <Text style={[styles.mealCategory, styles[`mealCategory${size}`]]}>
            {meal.strCategory}
          </Text>
        )}
      </View>
    </View>
  );
}
