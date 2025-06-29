import React, {
  useState,
  useEffect,
  useRef
} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing,
  KeyboardEvent,
  ActivityIndicator
} from 'react-native';

import { TypeProps } from '../types/types';

const initialValues = {
  username: '',
  password: ''
};

const SignInScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          {/* <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          /> */}
          <Text style={styles.title}>Sign In</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
            value={initialValues.username}
            onChangeText={(text) => initialValues.username = text}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={initialValues.password}
            onChangeText={(text) => initialValues.password = text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Handle sign in logic here
              console.log('Sign In Pressed', initialValues);
            }}
          >
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});