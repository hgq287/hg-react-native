import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';

import { TypeProps } from '@types/types';
import colors from '@styles/colors';

import HeaderBar from '@components/HeaderBar';

const NotificationsScreen = (props: TypeProps) => {
  return (
    <View style={styles.container}>
      <HeaderBar title="Notifications" />
      <View style={styles.content}>
        <Image
          source={require('@assets/images/empty_notifications.png')}
          style={styles.image}
        />
        <Text style={styles.title}>No Notifications</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
  },
  content: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: '300',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default NotificationsScreen;