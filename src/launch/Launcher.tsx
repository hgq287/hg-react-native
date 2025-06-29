import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { TypeProps } from '../types/types';

const LaunchScreen = (props: TypeProps) => {
  console.log('LaunchScreen props', props);
  return (
    <View style={styles.background}>
      <Text style={styles.welcomeText}>
        Welcome to the App!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default LaunchScreen;
