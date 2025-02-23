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

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync, selectCount } from '../../store/userSlice';

import { fonts, colors } from '../../styles';  

export default function NewsView(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.titleText}>News</Text>
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
