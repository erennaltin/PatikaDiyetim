import React from 'react';
import {View, FlatList} from 'react-native';
import MealContainer from '../MealContainer/MealContainer';
import styles from './HorizontalMealSlider.style';

export default function HorizontalMealSlider({children, data, mainNavigation}) {
  return (
    <View style={styles.horizontalMenu}>
      <View style={styles.todaysKitchenContainer}>{children}</View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.results}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MealContainer
            size="Small"
            meal={item}
            mainNavigation={mainNavigation}
          />
        )}
      />
    </View>
  );
}
