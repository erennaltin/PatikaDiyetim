import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import styles from './MyDietsPage.style';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import DietContainer from '../../../../components/DietContainer';
import AddDietModal from '../../../../components/AddDietModal/AddDietModal';
import {useIsFocused} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function MyDietsPage({navigation}) {
  const userSub = useSelector(state => state.store.user.user.sub);
  const [loading, setLoading] = useState(false);
  const [diets, setDiets] = useState([]);
  const [dietTitles, setTitles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    setLoading(true);
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
            informations: diet.data(),
          };
          titleDiets.push(diet.id);
          initDiets.push(obj);
        });
        setDiets(initDiets);
        setTitles(titleDiets);
        setRefreshing(false);
        setLoading(false);
      } catch (err) {
        setRefreshing(false);
        console.log(err);
        setLoading(false);
      }
    };
    fetchDiets();
  }, [userSub, refreshing, isFocused]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  if (loading) {
    return (
      <LottieView
        source={require('../../../../assets/lottie/loading.json')}
        autoPlay
        loop
      />
    );
  } else {
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
              <DietContainer
                item={item}
                index={index}
                navigation={navigation}
              />
            )}
          />
          <AddDietModal dietTitles={dietTitles} onRefresh={onRefresh} />
        </View>
      </View>
    );
  }
}
