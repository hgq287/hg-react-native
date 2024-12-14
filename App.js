import { Provider } from 'react-redux';
import React, {useEffect, useRef} from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './src/store/store';
import AppSettings from './src/core/models/appSettings';
import { settingsService } from './src/core/services';

import AppView from './src/scenes/AppViewContainer';


export default function App() {

  const navigationRef = useRef();

  useEffect(() => {

    (async() => {
       let appSettings: AppSettings = await settingsService.loadAppSettings();
       console.log('[App][LOG] - App version: ', appSettings.version);
    })();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <PersistGate
          loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
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