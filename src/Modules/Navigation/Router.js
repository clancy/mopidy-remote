import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeViewContainer from '../Home/HomeViewContainer';
import CurrentTrackViewContainer from '../CurrentTrack/CurrentTrackViewContainer';
import DrawerNavigationLayout from './DrawerNavigationLayout';

export const Router = createRouter(() => ({
  home: () => HomeViewContainer,
  currentTrack: () => CurrentTrackViewContainer,
  drawerNavigationLayout: () => DrawerNavigationLayout
}));
