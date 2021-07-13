import {useState, useEffect} from 'react';
import axios from 'axios';
import {FOOD_API_KEY} from '@env';

const useRandomMeal = (uri, refreshing) => {
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState('');
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(uri)
      .then(res => {
        setMeal(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [uri, refreshing]);

  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const mealInfo = await axios.get(
          `https://api.spoonacular.com/recipes/${meal.recipes[0].id}/information?includeNutrition=true&apiKey=${FOOD_API_KEY}`,
        );

        setMeal(mealInfo.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInformation();
  }, [meal]);

  return {loading, meal, error};
};

export default useRandomMeal;
