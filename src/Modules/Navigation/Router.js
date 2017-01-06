import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeViewContainer from '../Home/HomeViewContainer';
import AboutViewContainer from '../About/AboutViewContainer';
import DrawerNavigationLayout from './DrawerNavigationLayout';

export const Router = createRouter(() => ({
  home: () => HomeViewContainer,
  about: () => AboutViewContainer,
  drawerNavigationLayout: () => DrawerNavigationLayout
}));
