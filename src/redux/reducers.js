import MopidyReducer from '../Modules/Mopidy/Reducer';
import SpotifyReducer from '../Modules/Spotify/Reducer';
import SettingsStateReducer from '../Modules/Settings/SettingsState';

export default {
  mopidy: MopidyReducer,
  spotify: SpotifyReducer,
  settings: SettingsStateReducer
};
