import HomeScreen from '../scenes/home/HomeViewContainer';
import ProfileScreen from '../scenes/profile/ProfileViewContainer';
import NewsScreen from '../scenes/news/NewsViewContainer';

import Icon from 'react-native-vector-icons/Ionicons';

const tabNavigatorData = [
  {
    key: 'home',
    name: 'Home',
    component: HomeScreen,
    icon: <Icon name="calendar-clear-sharp" size={25} color="#666" />,
  },
  {
    key: 'profile',
    name: 'Profile',
    component: ProfileScreen,
    icon: <Icon name="chatbubble-ellipses-sharp" size={25} color="#666" />,
  },
  {
    key: 'news',
    name: 'News',
    component: NewsScreen,
    icon: <Icon name="settings-sharp" size={25} color="#666" />,
  },
];

export default tabNavigatorData;