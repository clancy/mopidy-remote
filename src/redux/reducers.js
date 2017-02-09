import HomeStateReducer from '../Modules/Home/HomeState';
import MopidyReducer from '../Modules/Mopidy/Reducer';
import SpotifyReducer from '../Modules/Spotify/Reducer';
import SettingsStateReducer from '../Modules/Settings/SettingsState';

export default {
  home: HomeStateReducer,
  mopidy: MopidyReducer,
  spotify: SpotifyReducer,
  settings: SettingsStateReducer
};
