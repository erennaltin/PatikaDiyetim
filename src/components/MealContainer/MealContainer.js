import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './MealContainer.style';

export default function MealContainer({size, meal, mainNavigation}) {
  const [calories, setCalories] = useState(0);

  const goModal = () => {
    mainNavigation.navigate('MealInformation', {
      mealId: meal.id,
    });
  };

  useEffect(() => {
    if (size === 'Large' && meal.id) {
      const words = meal.summary.split(' ');
      const index = words.indexOf('calories</b>,');
      const calory = words[index - 1].split('>')[1];
      setCalories(calory);
    }
  }, [meal, size]);

  return (
    <TouchableWithoutFeedback style={styles.outerContainer} onPress={goModal}>
      <View style={[styles.mainContainer, styles[`mainContainer${size}`]]}>
        <Image
          style={styles.image}
          source={{
            uri: meal.image,
          }}
        />
        <View style={styles.mealInformationContainer}>
          <Text
            numberOfLines={1}
            style={[styles.mealName, styles[`mealName${size}`]]}>
            {meal.title}
          </Text>
          {size === 'Large' && (
            <Text style={[styles.mealCategory, styles[`mealCategory${size}`]]}>
              {calories}
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
