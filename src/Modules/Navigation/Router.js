import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../Home/HomeScreen';
import AboutScreen from '../About/AboutScreen';
import DrawerNavigationLayout from './DrawerNavigationLayout';

export const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
  drawerNavigationLayout: () => DrawerNavigationLayout,
}));
