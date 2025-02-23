import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SignInScreen from '../../scenes/auth/SignInViewContainer';
import ForgotPasswordScreen from '../../scenes/auth/ForgotPasswordViewContainer';

import { colors } from '../../styles';

const RootStack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <SafeAreaProvider>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{
            title: `Sign In`,
            headerStyle: {
              backgroundColor: colors.secondary,
            }, 
          }
        }/>
        <RootStack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{
            title: `Change Password`,
            headerStyle: {
              backgroundColor: '#F0F0F0',
            }, 
          }
        }/>
      </RootStack.Navigator>
    </SafeAreaProvider>
  );
};

export default AuthStack;
