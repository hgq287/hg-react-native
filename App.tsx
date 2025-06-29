import { Provider } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/store/store';
import AppView from './src/launch/AppView';

export default function App() {
  const navigationRef = useRef<NavigationContainerRef<RootParamList>>(null);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppView />
      </NavigationContainer>
    </Provider >
  );
}