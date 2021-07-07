import React from 'react';
import {View, FlatList, Text} from 'react-native';
import MealContainer from '../MealContainer/MealContainer';
import CustomIcon from './../CustomIcon/CustomIcon';
import styles from './HorizontalMealSlider.style';

export default function HorizontalMealSlider({children, data}) {
  return (
    <View style={styles.horizontalMenu}>
      <View style={styles.todaysKitchenContainer}>{children}</View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => <MealContainer size="Small" meal={item} />}
        // renderItem={({item}) => <Text> {item.idMeal} </Text>}
      />
    </View>
  );
}
