import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '@features/home/HomeScreen';
import ProfileScreen from '@features/profile/ProfileScreen';

const tabNavigatorData = [
  {
    key: 'ROUTES_TAB_HOME',
    name: 'Home',
    component: HomeScreen,
    headerShown: true,
    iconName: 'home-outline',
  },
  {
    key: 'ROUTES_TAB_PROFILE',
    name: 'Me',
    headerShown: false,
    component: ProfileScreen,
    iconName: 'person-circle-outline',
  },
];

export default tabNavigatorData;