import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { selectUser } from '@redux/slices/userSlice';

import { colors, fonts } from '@styles';

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.value}>{user.username}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primaryBold,
    color: colors.primary,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primaryRegular,
    color: colors.grayDark,
  },
  value: {
    fontSize: 18,
    fontFamily: fonts.primaryRegular,
    color: colors.black,
    marginBottom: 15,
  },
});

export default ProfileScreen;