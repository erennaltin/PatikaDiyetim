import React, {useState, useEffect} from 'react';
import styles from './MealInformationHeader.style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, Pressable, Modal, FlatList} from 'react-native';
import {colors} from '../../styles';
import firestore from '@react-native-firebase/firestore';
import SelectDietToAdd from './../SelectDietToAdd/SelectDietToAdd';

export default function MealInformationHeader({
  title,
  navigation,
  userSub,
  mealId,
  mealImage,
  mealTitle,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dietList, setDietList] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const takeDietList = async () => {
      try {
        const diets = await firestore()
          .collection('users')
          .doc(userSub)
          .collection('diets')
          .get();

        const initDiets = [];
        diets.forEach(diet => {
          initDiets.push(diet.id);
        });
        setDietList(initDiets);
      } catch (err) {
        console.log(err);
      }
    };

    takeDietList();
  }, [userSub]);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          style={styles.pressableView}
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <Pressable
              style={[styles.pressableView, styles.innerPressableView]}
              onPress={() => {}}>
              <View style={styles.modalContainer} onPress={() => {}}>
                <Text style={styles.text}>Choose the diet: </Text>
                <FlatList
                  data={dietList}
                  keyExtractor={(_, index) => index}
                  renderItem={({item}) => (
                    <SelectDietToAdd
                      title={item}
                      mealCal={title}
                      mealId={mealId}
                      mealImage={mealImage}
                      mealTitle={mealTitle}
                      userSub={userSub}
                      setModalVisible={setModalVisible}
                    />
                  )}
                />
              </View>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
      <View style={styles.mainContainer}>
        <Pressable onPress={goBack}>
          <MaterialIcon name="keyboard-backspace" size={24} color="black" />
        </Pressable>
        <Text style={styles.title}> {title} kcal </Text>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <MaterialIcon
            name="add-chart"
            size={24}
            color={colors.textColor.Secondary}
          />
        </Pressable>
      </View>
    </>
  );
}
