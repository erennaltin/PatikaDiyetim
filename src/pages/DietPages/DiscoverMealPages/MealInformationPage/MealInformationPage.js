import React, {useState, useEffect, useCallback} from 'react';
import styles from './MealInformationPage.style';
import {colors} from '../../../../styles';

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
import MealInformationHeader from '../../../../components/MealInformationHeader/MealInformationHeader';
import InformationText from './../../../../components/InformationText/InformationText';
import HorizontalMealSlider from '../../../../components/HorizontalMealSlider/HorizontalMealSlider';
import {useSelector} from 'react-redux';

export default function MealInformationPage({route, navigation}) {
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [error, setError] = useState(null);
  const userSub = useSelector(state => state.store.user.user.sub);
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
    if (
      fetchedMeal === undefined ||
      fetchedMeal === '' ||
      fetchedMeal === null
    ) {
      setError('Not Found');
    } else {
      setError(null);
      setMeal(fetchedMeal);
      if (fetchedMeal) {
        const initIngredients = [];
        fetchedMeal.extendedIngredients.forEach(ingredint => {
          const obj = {
            id: ingredint.id,
            title: ingredint.name,
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/' +
              ingredint.image,
            summary: '',
          };
          initIngredients.push(obj);
        });
        setIngredients({results: initIngredients});
      }
    }

    fetchedError && setError(fetchedError);
  }, [fetchedMeal, fetchedError]);

  const scrollToEndRef = useCallback(node => {
    if (node !== null) {
      node.scrollToEnd({animated: true});
    }
  }, []);

  return loading ? (
    <ActivityIndicator size="small" color={colors.textColor.Secondary} />
  ) : error ? (
    <Text> {error} </Text>
  ) : (
    <>
      <MealInformationHeader
        navigation={navigation}
        title={meal.nutrition.nutrients[0].amount}
        userSub={userSub}
        mealId={meal.id}
        mealTitle={meal.title}
        mealImage={meal.image}
      />
      <ScrollView style={styles.container} ref={scrollToEndRef}>
        <Image style={styles.image} source={{uri: meal.image}} />

        <View style={styles.innerContainer}>
          <InformationText title="Name:" answer={meal.title} />
          <InformationText
            title="Calories:"
            answer={meal.nutrition.nutrients[0].amount + ' kcal'}
          />
          <InformationText title="Dishes:" answer={meal.dishTypes.join(',')} />
          <InformationText
            title="Dairy Free:"
            answer={String(meal.dairyFree)}
          />
          <InformationText
            title="Gluten Free:"
            answer={String(meal.glutenFree)}
          />
          <InformationText title="For Vegans:" answer={String(meal.vegan)} />
          <View style={styles.mealContainer}>
            <HorizontalMealSlider
              unclickable
              data={ingredients}
              mainNavigation={navigation}>
              <Text style={styles.mealText}> Ingredients </Text>
            </HorizontalMealSlider>
          </View>
          <TouchableOpacity style={styles.linkContainer} onPress={handleLink}>
            <Text style={styles.link}> See the full recipe!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
