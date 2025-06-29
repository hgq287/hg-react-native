import { Provider } from 'react-redux';
import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { store } from '@redux/store';
import AppView from '@launch/AppView';

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