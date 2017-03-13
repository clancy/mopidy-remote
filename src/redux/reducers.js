import MopidyReducer from '../Modules/Mopidy/Reducer';
import SpotifyReducer from '../Modules/Spotify/Reducer';
import SettingsStateReducer from '../Modules/Settings/SettingsState';
import NavigationReducer from '../Modules/Navigation/NavigationReducer';

export default {
  mopidy: MopidyReducer,
  spotify: SpotifyReducer,
  settings: SettingsStateReducer,
  nav: NavigationReducer
};
