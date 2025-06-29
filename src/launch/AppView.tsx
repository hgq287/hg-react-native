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
      }} uriPrefix="/app" />
    </>
  );
}
