import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeViewContainer from '../Home/HomeViewContainer';
import AboutViewContainer from '../About/AboutViewContainer';
import CurrentTrackViewContainer from '../CurrentTrack/CurrentTrackViewContainer';
import DrawerNavigationLayout from './DrawerNavigationLayout';

export const Router = createRouter(() => ({
  home: () => HomeViewContainer,
  about: () => AboutViewContainer,
  currentTrack: () => CurrentTrackViewContainer,
  drawerNavigationLayout: () => DrawerNavigationLayout
}));
