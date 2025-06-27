import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';

import { store, persistor } from './src/store/store';
import AppSettings from './src/core/models/appSettings';
import { settingsService } from './src/core/services';

import AppView from './src/scenes/AppView';

export default function App() {

  const navigationRef = createNavigationContainerRef<any>();

  useEffect(() => {

    (async () => {
      let appSettings: AppSettings = await settingsService.loadAppSettings();
    })();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <PersistGate
          loading={
            <View style={styles.container}>
              <ActivityIndicator color='#555CC4' />
            </View>
          }
          persistor={persistor}
        >
          <AppView />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});