import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TypeProps } from '../types/types';

const HomeScreen = (props: TypeProps) => {
  console.log('[HomeScreen][Log] - HomeScreen mounted:', props);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Profile')}
        style={{ padding: 10, backgroundColor: '#007BFF', borderRadius: 5 }}
      >
        <Text style={{ color: '#fff' }}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles can be added here or imported from a separate file

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
};

export default HomeScreen;