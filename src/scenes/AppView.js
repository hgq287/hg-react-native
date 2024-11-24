import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { colors, fonts } from '../styles'; 

export default function AppView() {

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hi, Hg Q.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    alignItems: 'center',
    color: colors.primary,
    fontFamily: fonts.primaryRegular,
    fontSize: 40,
    marginVertical: 3,
  },
});
