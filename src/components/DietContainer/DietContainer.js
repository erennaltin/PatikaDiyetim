import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './DietContainer.style';
import {sizes} from '../../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function DietContainer({item, index, navigation}) {
  const isEven = index % 2 === 0 ? 'Even' : 'Odd';
  const goToDetail = () => {
    navigation.navigate('DietInformationPage', {
      title: item.title,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={[styles.mainContainer, styles[isEven]]}>
        <Image
          source={{uri: item.informations.picture}}
          style={styles.picture}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.text]}> {item.title} </Text>
          <View style={[styles.informationContainer]}>
            {item.informations.isActive && (
              <MaterialIcon
                name="check"
                color="white"
                size={sizes.fontSize.Standart}
              />
            )}
            <Text style={[styles.calories, styles.text]}>
              {item.informations.kcal}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
