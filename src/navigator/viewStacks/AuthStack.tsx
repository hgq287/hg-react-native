import React from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { ROUTES_SIGNIN } from '@constants';
import SignInScreen from '@features/auth/SignInScreen';

const RootStack = createNativeStackNavigator();

type HeaderLeftProps = {
  onPress: () => void;
};

const HeaderLeftButton: React.FC<HeaderLeftProps> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.headerLeft}>
    <Icon name="chevron-back-outline" size={28} color="#555" />
  </TouchableOpacity>
);

const renderHeaderLeft = (navigation: any) => (
  <HeaderLeftButton onPress={() => navigation.goBack()} />
);

const AuthStack = (props: TypeProps) => {
  console.log('[AuthStack][Log] - AuthStack mounted:', props);
  return (
    <SafeAreaProvider>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name={ROUTES_SIGNIN}
          initialParams={props.route.params ?? {}}
          component={SignInScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#fff',
            },
            title: 'Sign In',
            headerTitleStyle: { color: '#555', fontSize: 20, fontWeight: '300' },
            headerBackTitleVisible: false,
            headerLeft: () => renderHeaderLeft(navigation),
          })}
        />
      </RootStack.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 0,
  },
});

export default AuthStack;
