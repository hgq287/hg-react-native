import React, { useEffect } from 'react';
import {
  ColorValue,
  Text,
  View,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import colors from '../styles/colors';
import tabNavigatorData from './tabNavigatorData';
import { TypeProps } from '../types/types';


const Tab = createBottomTabNavigator();

function MainNavigator(props: TypeProps) {
  const dispatch = useDispatch();

  const headerInfo = {
    displayName: 'G\'day Hg Q.',
  }

  useEffect(() => {
  }, [dispatch]);

  /// create icon
  const createIcon = (iconName: string, color: ColorValue) => {
    return <Icon name={iconName} size={24} color={color} />;
  }

  return (
    <Tab.Navigator
      screenOptions={(props) => ({
        showLabel: false,
        headerShown: false,
        headerTitleStyle: { color: 'white', fontSize: 22, fontWeight: '300' },
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: colors.white,
          // borderBottomWidth: 1,  // Add a bottom border
          // borderBottomColor: '#ccc', // Light gray color for the line
          // backgroundColor: '#fff', // Background color of the header
        },
      })}>
      {tabNavigatorData.map((item, idx) => (
        <Tab.Screen
          key={item.key}
          name={item.key}
          component={item.component}
          initialParams={props.route.params ?? {}}
          options={{
            title: item.name,
            headerShown: item.headerShown,
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                {createIcon(item.iconName, focused ? colors.primary : colors.gray)}
              </View>
            ),
            tabBarLabel: ({ focused }) => <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.gray }}>{item.name}</Text>,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

// local style 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
});

export default MainNavigator;