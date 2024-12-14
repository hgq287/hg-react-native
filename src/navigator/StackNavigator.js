import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '@react-navigation/elements';

import LaunchScreen from '../scenes/Launcher';

import AuthStack from './viewStacks/AuthStack';

import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();
export default function StackNavigator(props) {

  console.log('[StackNavigator][Log] - Params: ', props.route.params);

  const headerLeftComponentMenu = () => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >

        <Icon name="menu-outline" size={25} color="#555" />
      </TouchableOpacity>    
    )
  }
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false, gestureEnabled: false }}>
        <Stack.Group>
          <Stack.Screen 
            name="Launcher" 
            component={LaunchScreen} 
            initialParams={props.route.params ?? {}} 
          />
          <Stack.Screen 
            name="SignIn" 
            component={AuthStack} 
            initialParams={props.route.params ?? {}} 
            options={{
              headerLeft: headerLeftComponentMenu,
            }} 
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={MainNavigator}
            options={{ headerShown: false, animationEnabled: false, gestureEnabled: false }}
            initialParams={props.route.params ?? {}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
