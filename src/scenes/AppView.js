import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import AppNavigator from '../navigator/AppNavigator';

export default function AppView() {

  const navigation = useNavigation();

  useEffect(() => {

    (async() => {
    })();
  }, []);

  return (
    <>
      <AppNavigator onNavigationStateChange={() => {
        console.log('[AppView][Log] - onNavigationStateChange');
      }} uriPrefix="/app" />
    </>
  );
}
