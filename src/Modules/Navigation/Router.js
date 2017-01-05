import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeViewContainer from '../Home/HomeViewContainer';
import AboutScreen from '../About/AboutScreen';
import DrawerNavigationLayout from './DrawerNavigationLayout';

export const Router = createRouter(() => ({
  home: () => HomeViewContainer,
  about: () => AboutScreen,
  drawerNavigationLayout: () => DrawerNavigationLayout,
}));
