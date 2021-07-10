import React from 'react';
import styles from './InformationText.style';

import {View, Text} from 'react-native';
export default function InformationText({title, answer}) {
  return (
    <View style={styles.informationPiece}>
      <Text style={[styles.informationText, styles.informationTitle]}>
        {title}
      </Text>
      <Text style={[styles.informationText, styles.informationAnswer]}>
        {answer}
      </Text>
    </View>
  );
}
