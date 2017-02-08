import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeViewContainer from '../Home/HomeViewContainer';
import CurrentTrackViewContainer from '../CurrentTrack/CurrentTrackViewContainer';
import SettingsViewContainer from '../Settings/SettingsViewContainer';
import MopidySettingsViewContainer from '../Settings/Mopidy/MopidySettingsViewContainer';
import SpotifyLoginViewContainer from '../Settings/Spotify/SpotifyLoginViewContainer';
import DrawerNavigationLayout from './DrawerNavigationLayout';

const Router = createRouter(() => ({
  home: () => HomeViewContainer,
  currentTrack: () => CurrentTrackViewContainer,
  drawerNavigationLayout: () => DrawerNavigationLayout,
  settings: () => SettingsViewContainer,
  mopidySettings: () => MopidySettingsViewContainer,
  spotifyLogin: () => SpotifyLoginViewContainer
}));

export default Router;
