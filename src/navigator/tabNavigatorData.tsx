import HomeScreen from '../features/home/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const tabNavigatorData = [
  {
    key: 'ROUTES_TAB_HOME',
    name: 'Home',
    component: HomeScreen,
    headerShown: true,
    iconName: 'home-outline',
  },
  {
    key: 'ROUTES_TAB_CUSTOMERS',
    name: 'Vận chuyển',
    headerShown: true,
    component: HomeScreen,
    iconName: 'car-outline',
  },
  {
    key: 'ROUTES_TAB_ORDERS',
    name: 'Quản lý kho',
    headerShown: true,
    component: HomeScreen,
    iconName: 'bag-handle-outline',
  },
  {
    key: 'ROUTES_TAB_PROFILE',
    name: 'Tôi',
    headerShown: false,
    component: HomeScreen,
    iconName: 'person-circle-outline',
  },
];

export default tabNavigatorData;