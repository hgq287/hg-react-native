import React from 'react';
import {
  Button,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import SignInScreen from '../../features/auth/SignInScreen';

const RootStack = createNativeStackNavigator();

const AuthStack = (props: TypeProps) => {
  return (
    <SafeAreaProvider>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#fff',
            },
            title: 'Đăng nhập',
            headerTitleStyle: { color: '#555', fontSize: 20, fontWeight: '300' },
            headerBackTitleVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginLeft: 0 }}>
                <Icon name="chevron-back-outline" size={28} color="#555" />
              </TouchableOpacity>
            ),
          }
          } />
      </RootStack.Navigator>
    </SafeAreaProvider>
  );
};

export default AuthStack;
