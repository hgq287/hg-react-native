import HomeScreen from '../scenes/home/HomeView';
import ProfileScreen from '../scenes/profile/ProfileView';
import NewsScreen from '../scenes/news/NewsView';

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