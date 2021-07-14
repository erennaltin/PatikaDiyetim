import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import styles from './DietTimesPage.style';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import DietTimeContainer from '../../../../components/DietTimeContainer/DietTimeContainer';

export default function DietTimesPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const userSub = useSelector(state => state.store.user.user.sub);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  useEffect(() => {
    const fetchDietList = async () => {
      setLoading(true);
      const diets = await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .get();

      const initList = [];
      diets.docs.forEach(diet => {
        initList.push({title: diet.id, data: diet.data()});
      });

      let reserve = '';
      const times = initList
        .map(diet =>
          diet.data.time === '-'
            ? 'Do not forget to set time!'
            : diet.data.time,
        )
        .sort()
        .filter(time => {
          if (reserve !== time) {
            reserve = time;
            return true;
          } else {
            return false;
          }
        });

      const combinedList = [];
      times.forEach(time => {
        const obj = {
          title: time,
          data: initList.filter(diet => {
            return time === 'Do not forget to set time!'
              ? diet.data.time === '-'
                ? true
                : false
              : time === diet.data.time
              ? true
              : false;
          }),
        };
        combinedList.push(obj);
      });

      combinedList.sort((a, b) => {
        if (
          a.title !== 'Do not forget to set time!' &&
          b.title !== 'Do not forget to set time!'
        ) {
          let time1 = parseFloat(
            a.title.replace(':', '.').replace(/[^\d.-]/g, ''),
          );
          let time2 = parseFloat(
            b.title.replace(':', '.').replace(/[^\d.-]/g, ''),
          );
          if (time1 < time2) {
            return -1;
          }
          if (time1 > time2) {
            return 1;
          }
          return 0;
        } else {
          return a.title === 'Do not forget to set time!' ? -1 : 1;
        }
      });
      setData(combinedList);
      setLoading(false);
      setRefreshing(false);
    };

    fetchDietList();
  }, [userSub, refreshing]);

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator colors="blue" size="large" />
      ) : (
        <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <DietTimeContainer item={item} userSub={userSub} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}
