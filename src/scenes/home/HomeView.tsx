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
import { increment, decrement, incrementAsync, selectCount } from '../../centralized/homeSlice';

import { fonts, colors } from '../../styles';  

export default function HomeView(props) {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
    <Text style={styles.titleText}>Redux Home</Text>
    <Text style={styles.bodyText}>Counter: {count}</Text>

    <Button title="Increment" onPress={() => dispatch(increment())} />
    <Button title="Decrement" onPress={() => dispatch(decrement())} />
    <Button title="Add Async" onPress={() => dispatch(incrementAsync(Number(2) || 0))} />
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
