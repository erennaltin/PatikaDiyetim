import React, {useState} from 'react';
import {View, Text, Modal, TextInput, Pressable} from 'react-native';
import styles from './AddDietModal.style';
import CustomButton from './../CustomButton/CustomButton';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

export default function AddDietModal({dietTitles, onRefresh}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dietName, setDietName] = useState('');
  const [error, setError] = useState(null);
  const userSub = useSelector(state => state.store.user.user.sub);

  const addNewDietToCloud = async () => {
    try {
      if (dietTitles.indexOf(dietName) !== -1) {
        throw Error(`There is already a diet named '${dietName}'`);
      }
      const dietList = await firestore()
        .collection('users')
        .doc(userSub)
        .collection('diets')
        .doc(dietName);

      // eslint-disable-next-line no-unused-vars
      const setTheList = await dietList.set({
        isActive: false,
        kcal: 0,
        picture:
          'https://firebasestorage.googleapis.com/v0/b/patikadiyetim.appspot.com/o/dietImageDefault.jpg?alt=media&token=7b1c4219-7339-4c12-addd-ab9a057a33e1',
        time: '-',
      });
      onRefresh();
      setModalVisible(!modalVisible);
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(null), 5000);
    }

    setDietName('');
  };

  return (
    <View>
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
                <Text style={styles.text}> Let's plan another one! </Text>
                <TextInput
                  style={styles.textInput}
                  value={dietName}
                  onChangeText={setDietName}
                  placeholder="What is the name of your next plan?"
                />
                <View style={styles.customButton}>
                  <CustomButton
                    title="Add a new diet!"
                    theme="Third"
                    disabled={
                      dietName === '' || dietName.length > 30 ? true : false
                    }
                    onPress={addNewDietToCloud}
                  />
                </View>
                {error && <Text style={styles.text}> {error} </Text>}
              </View>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
      <View style={styles.initialButton}>
        <CustomButton
          title="Add a new diet!"
          theme="Third"
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </View>
  );
}
