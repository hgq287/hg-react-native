import * as React from 'react';
import { 
  View,
  Text, 
  StyleSheet, 
  Image 
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default AppNavigator = (props) => {

  const AppDrawer = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen 
          name="StackNavigator" 
          component={StackNavigator} 
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <AppDrawer />
  )
}