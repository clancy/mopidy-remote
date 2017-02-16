import {
  createRouter,
} from '@exponent/ex-navigation';

import CurrentTrackViewContainer from '../CurrentTrack/CurrentTrackViewContainer';
import SettingsViewContainer from '../Settings/SettingsViewContainer';
import MopidySettingsViewContainer from '../Settings/Mopidy/MopidySettingsViewContainer';
import SpotifyLoginViewContainer from '../Settings/Spotify/SpotifyLoginViewContainer';
import DrawerNavigationLayout from './DrawerNavigationLayout';

const Router = createRouter(() => ({
  currentTrack: () => CurrentTrackViewContainer,
  drawerNavigationLayout: () => DrawerNavigationLayout,
  settings: () => SettingsViewContainer,
  mopidySettings: () => MopidySettingsViewContainer,
  spotifyLogin: () => SpotifyLoginViewContainer
}));

export default Router;
