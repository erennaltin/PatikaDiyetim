// SignUp.js
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './SignupPage.style';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUpValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/(0)(\d){10}\b/, 'Enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Diyetim </Text>
        </View>
        <Formik
          validateOnMount
          validationSchema={signUpValidationSchema}
          initialValues={{
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {}}>
          {({handleSubmit, isValid}) => (
            <View style={styles.form}>
              <Field
                component={CustomInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="username"
                placeholder="Username"
              />
              <Field
                component={CustomInput}
                name="phoneNumber"
                placeholder="Phone Number"
                keyboardType="numeric"
              />
              <Field
                component={CustomInput}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />
              <CustomButton
                onPress={handleSubmit}
                title="Submit"
                disabled={!isValid}
                theme="Secondary"
                loading={loading}
              />
              {error && <Text style={styles.error}> {error} </Text>}
            </View>
          )}
        </Formik>
      </View>
    </>
  );
};

export default SignUp;
