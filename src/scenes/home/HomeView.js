import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';

import { fonts, colors } from '../../styles';  

export default function HomeView(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.bodyText}>Home Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
  },
  bodyText: {
    color: colors.primary,
    fontFamily: fonts.primaryRegular,
    fontSize: 40,
    marginVertical: 3,
  }
});
