import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import colors from '@styles/colors';

const HeaderBar = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButton}
      >
        <Icon name="chevron-back-outline" size={28} color="#555" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bluish,
    paddingTop: 64,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  backButton: {
    marginVertical: 0,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 0
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '300',
    color: '#555',
    textAlign: 'center',
  },
});

export default HeaderBar;