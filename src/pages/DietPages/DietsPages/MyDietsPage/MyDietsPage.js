import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import styles from './MyDietsPage.style';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import DietContainer from '../../../../components/DietContainer';
import AddDietModal from '../../../../components/AddDietModal/AddDietModal';

export default function MyDietsPage() {
  const userSub = useSelector(state => state.store.user.sub);
  const [diets, setDiets] = useState([]);
  const [dietTitles, setTitles] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    const fetchDiets = async () => {
      try {
        const dietList = await firestore()
          .collection('users')
          .doc(userSub)
          .collection('diets')
          .get();
        const initDiets = [];
        const titleDiets = [];
        dietList.forEach(diet => {
          const obj = {
            title: diet.id,
            calories: diet.data().kcal,
            isActive: diet.data().isActive,
            photoUrl: diet.data().photoUrl,
          };
          titleDiets.push(diet.id);
          initDiets.push(obj);
        });
        setDiets(initDiets);
        setTitles(titleDiets);
        setRefreshing(false);
      } catch (err) {
        setRefreshing(false);
        console.log(err);
      }
    };
    fetchDiets();
  }, [userSub, refreshing]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> My Diet Plans </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={styles.innerListContainer}
          data={diets}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <DietContainer item={item} index={index} />
          )}
        />
        <AddDietModal dietTitles={dietTitles} onRefresh={onRefresh} />
      </View>
    </View>
  );
}
