
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import { authService } from '@core/services';

import { useDispatch } from 'react-redux';
import { setCredentials } from '@redux/slices/authSlice';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Icon from 'react-native-vector-icons/Feather';
import { colors } from '@styles';

import { signIn } from '@core/apis';
import { ROUTES_HOME, ROUTES_APP_NAVIGATOR } from '@constants';

const logo = require('@assets/images/logo.png');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialValues = {
  username: '',
  password: ''
};

const loginValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default function SignInView(props) {
  const dispatch = useDispatch();

  const handleLogin = (values: ValuesType, { setErrors }: any) => {
    signIn(values)
      .then(res => {
        const { uid, idToken, refreshToken } = res.data;
        let expiresAt: Date | undefined;
        console.log('[SignInView] - Login response:', idToken);

        if (idToken) {
          (async () => {
            await authService.saveCredentials({
              type: 'BearerToken',
              uid,
              idToken,
              refreshToken,
            }).then(() => {
              console.log('[SignInView] - Credentials saved successfully');
              dispatch(setCredentials({
                user: {
                  uid: uid,
                  email: values.email,
                },
                token: idToken,
              }));

              props.navigation.reset({
                index: 0,
                routes: [{ name: ROUTES_APP_NAVIGATOR }],
              });
            });
          })();
        }
      })
      .catch(e => {
        if (e.response?.data?.errors) {
          let result = transformToFormikErrors(e.response.data.errors);
          setErrors(result);
        }
      });
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot Password Pressed');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <Icon name="mail" size={25} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {errors.email && touched.email && (
              <Icon name="camera" size={30} color="#333" />
            )}
            <View style={styles.inputContainer}>
              <Icon name="lock" size={25} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity onPress={() => handleForgotPassword()}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signUp: {
    color: '#000',
  },
  signUpLink: {
    color: '#1E90FF',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
});
