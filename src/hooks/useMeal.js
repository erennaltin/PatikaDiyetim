import {useState, useEffect} from 'react';
import axios from 'axios';

const useMeal = uri => {
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
  }, [uri]);

  return {loading, meal, error};
};

export default useMeal;
