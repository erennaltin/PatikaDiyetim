import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './DietContainer.style';
import {sizes} from '../../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import defaultPicture from '../../assets/defaults/dietImageDefault.jpg';

export default function DietContainer({item, index}) {
  const isEven = index % 2 === 0 ? 'Even' : 'Odd';
  const picture = item.photoUrl || defaultPicture;
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.mainContainer, styles[isEven]]}>
        <Image source={picture} style={styles.picture} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.text]}> {item.title} </Text>
          <View style={[styles.informationContainer]}>
            {item.isActive && (
              <MaterialIcon
                name="check"
                color="white"
                size={sizes.fontSize.Standart}
              />
            )}
            <Text style={[styles.calories, styles.text]}>{item.calories}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
