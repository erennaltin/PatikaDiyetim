import React from 'react';
import styles from './CustomInput.style';
import {View, Text, TextInput} from 'react-native';
import {colors} from '../../styles';

const CustomInput = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;
  let theme = props.theme;
  if (theme === undefined) {
    theme = 'Primary';
  }
  const hasError = errors[name] && touched[name];

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={
          theme === 'Primary'
            ? colors.placeholderColor.Primary
            : colors.placeholderColor.Secondary
        }
        style={[
          styles.textInput,
          styles[`textInput${theme}`],
          hasError && styles.errorInput,
        ]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          if (value) {
            setFieldTouched(name);
          }
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && value !== '' && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default CustomInput;
