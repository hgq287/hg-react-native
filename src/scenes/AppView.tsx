import React, { useEffect } from 'react';

import AppNavigator from '../navigator/AppNavigator';

export default function AppView() {

  useEffect(() => {

    (async () => {
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
