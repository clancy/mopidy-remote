import HomeStateReducer from '../Modules/Home/HomeState';
import SettingsStateReducer from '../Modules/Settings/SettingsState';
import MopidySettingsStateReducer from '../Modules/Settings/Mopidy/MopidySettingsState';
import MopidyReducer from '../Modules/Mopidy/Reducer';

export default {
  home: HomeStateReducer,
  mopidy: MopidyReducer,
  settings: SettingsStateReducer,
  mopidySettings: SettingsStateReducer
};
