import React from 'react';
import {TouchableHighlight, Text, View, ActivityIndicator} from 'react-native';
import {colors} from '../../styles';
import styles from './CustomButton.style';
const CustomButton = ({
  title = 'Selam!',
  theme = 'Primary',
  disabled = false,
  loading = false,
  resetForm = () => {},
  ...props
}) => {
  const sendAndResetForm = () => {
    props.onPress();
    setTimeout(() => resetForm({}), 100);
  };
  return (
    <TouchableHighlight
      onPress={disabled ? null : sendAndResetForm}
      underlayColor={
        disabled ? 'rgba(255,255,255, 0)' : 'rgba(255,255,255,0.4)'
      }
      style={[
        styles.container,
        disabled ? styles.disabled : styles[`container${theme}`],
      ]}>
      <View>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={
              theme === 'Primary'
                ? colors.textColor.Primary
                : colors.textColor.Secondary
            }
          />
        ) : (
          <Text
            style={[
              styles.text,
              disabled ? styles.disabled : styles[`text${theme}`],
            ]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default CustomButton;
