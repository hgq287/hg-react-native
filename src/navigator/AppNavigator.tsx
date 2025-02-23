import * as React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import { TypeProps } from '../types/types';

import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const AppNavigator = (props: TypeProps) => {

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

export default AppNavigator;