import React, {useState} from 'react';
import styles from './DietInformationHeader.style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, Pressable, Modal} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {colors} from '../../styles';
import CustomButton from '../CustomButton/CustomButton';
import firestore from '@react-native-firebase/firestore';

export default function DietInformationHeader({
  title,
  navigation,
  userSub,
  onRefresh,
}) {
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const addTimeToDiet = async () => {
    const clock = `${date.getHours()}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }`;
    try {
      const diet = await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(title);

      await diet.update({
        time: clock,
      });
    } catch (err) {
      console.log(err);
    }
    onRefresh();
    setModalVisible(!modalVisible);
  };

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
                <Text style={styles.text}> It is time to set time! </Text>
                <DatePicker
                  date={date}
                  onDateChange={setDate}
                  mode="time"
                  is24hourSource="device"
                />
                <View style={styles.customButton}>
                  <CustomButton
                    title="Add a new diet!"
                    theme="Third"
                    onPress={addTimeToDiet}
                  />
                </View>
              </View>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
      <View style={styles.mainContainer}>
        <Pressable onPress={goBack}>
          <MaterialIcon name="keyboard-backspace" size={24} color="black" />
        </Pressable>
        <Text style={styles.title}> {title} </Text>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <MaterialIcon
            name="add-alarm"
            size={24}
            color={colors.textColor.Secondary}
          />
        </Pressable>
      </View>
    </>
  );
}
