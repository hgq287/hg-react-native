import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { useDispatch } from 'react-redux';
import { setCredentials } from '@redux/slices/authSlice';

import { authService } from '@core/services';
import { TypeProps } from '@types/types';
import { ROUTES_APP_NAVIGATOR, ROUTES_SIGNIN } from '@constants';

import colors from '@styles/colors';

const unsplashBgImage = require('@assets/images/unsplash-backgound.png');
const LaunchScreen = (props: TypeProps) => {

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {

      authService.checkForAuthorized()
        .then((data) => {
          dispatch(setCredentials(data.credentials));
          props.navigation.reset({
            index: 0,
            routes: [{ name: ROUTES_APP_NAVIGATOR }],
          });
        })
        .catch(() => {
          // If not authorized, navigate to SignIn screen
          console.log('[LaunchScreen] - Not authorized, navigating to SignIn');
        });
    })();
  }, []);

  const handleLoginPress = () => {
    props.navigation.navigate(ROUTES_SIGNIN);
  };

  return (
    <ImageBackground
      source={unsplashBgImage}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.icon}>🔒</Text>
          <Text style={styles.title}> Wellcome to the App </Text>
          <Text style={styles.subtitle}>
            To access the app features. Please log in to continue.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  icon: {
    fontSize: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LaunchScreen;
