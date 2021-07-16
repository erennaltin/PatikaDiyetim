import React, {useState, useEffect} from 'react';
import styles from './ProfilePage.style';
import {View, Text, Image} from 'react-native';
import {LOG_OUT, CLEAN_ACCESS_TOKEN} from '../../../store/reducers/UserReducer';
import {useSelector, useDispatch} from 'react-redux';
import Auth0 from 'react-native-auth0';
import InformationText from './../../../components/InformationText/InformationText';
import HorizontalMealSlider from './../../../components/HorizontalMealSlider/HorizontalMealSlider';
import CustomButton from './../../../components/CustomButton/CustomButton';
import firestore from '@react-native-firebase/firestore';
const auth0 = new Auth0({
  domain: 'erennaltin.eu.auth0.com',
  clientId: 'v93vjNKnoACC4B8Wom8FK5uWE4oEbRLf',
});

export default function ProfilePage({navigation}) {
  const user = useSelector(state => state.store.user.user);
  const [activeDiet, setActiveDiet] = useState(0);
  const [preferences, setPreferences] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [averageCalories, setAverageCalories] = useState(0);
  const dispatch = useDispatch();
  const logout = async () => {
    await auth0.webAuth.clearSession();
    dispatch(CLEAN_ACCESS_TOKEN());
    dispatch(LOG_OUT());
  };

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const list = await firestore().collectionGroup('meals').get();

        const initList = [];
        list.docs.forEach(item => {
          const obj = {
            id: item.id,
            title: item.data().title,
            image: item.data().image,
            kcal: item.data().kcal,
          };
          initList.push(obj);
        });
        let reserve = 0;
        const reserveList = initList.filter(item => {
          if (item.id !== reserve) {
            reserve = item.id;
            return true;
          } else {
            return false;
          }
        });
        setPreferences({results: reserveList});
        let total = 0;
        reserveList.map(meal => {
          total += meal.kcal;
        });
        setTotalCalories(total);
        setAverageCalories(total / reserveList.length);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchDiets = async () => {
      const dietList = await firestore()
        .collection('users')
        .doc(user.sub)
        .collection('diets')
        .get();

      const initDiets = [];
      dietList.forEach(diet => {
        diet.data().isActive === true && initDiets.push(diet);
      });

      setActiveDiet(initDiets.length);
    };

    fetchMeals();
    fetchDiets();
  }, [user]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.userNameContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: user.picture}} style={styles.image} />
        </View>
        <Text style={styles.userName}> {user.name} </Text>
      </View>
      <View style={styles.informationContainer}>
        <InformationText
          title="Daily Taken Calories:"
          answer={totalCalories.toFixed(2)}
        />
        <InformationText
          title="Average Taken Calories:"
          answer={averageCalories.toFixed(2)}
        />
        <InformationText title="Daily Active Meal:" answer={activeDiet} />
      </View>
      <View style={styles.sliderContainer}>
        <HorizontalMealSlider data={preferences} mainNavigation={navigation}>
          <Text style={styles.sliderTitle}> Meal History </Text>
        </HorizontalMealSlider>
      </View>
      <View style={styles.centeredContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton theme="Third" onPress={logout} title="Logout" />
        </View>
      </View>
    </View>
  );
}
