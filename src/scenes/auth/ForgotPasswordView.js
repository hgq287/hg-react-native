import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
  Button
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function ForgotPasswordView(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.titleText}>Forgot Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  titleText: {
    color: colors.primary,
    fontFamily: fonts.primaryRegular,
    fontSize: 32,
    marginVertical: 3,
  },
  bodyText: {
    color: colors.primary,
    fontFamily: fonts.primaryRegular,
    fontSize: 18,
    marginVertical: 3,
  }
});
