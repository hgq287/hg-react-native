import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';

const LaunchScreen = (props) => {
  console.log('[LaunchScreen][Log] - Params: ', props.route.params);

  const checkForAuthorized = async() => {
    return new Promise((resolve, reject) => {
      (async() => {
        reject('');
      })();
    });
  };

  useEffect(() => {

    (async() => {
      checkForAuthorized().then(() => {
        return props.navigation.navigate('Home');
      })
      .catch((err) => {
        return props.navigation.navigate('SignIn');
      })
      .finally(() => {
        setTimeout(() => {
          // RNBootSplash.hide();
      }, 300);
      })
    })();
  }, []);

  return (
    <SafeAreaView>
      <View>
          <ActivityIndicator size="large" color='#3B82F6' />
      </View>
    </SafeAreaView>
  );
};

export default LaunchScreen;
