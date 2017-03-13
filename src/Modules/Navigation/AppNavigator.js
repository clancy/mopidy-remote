import { DrawerNavigator, StackNavigator } from 'react-navigation'

import CurrentTrackViewContainer from '../CurrentTrack/CurrentTrackViewContainer';
import PlaylistViewContainer from '../Playlist/PlaylistViewContainer';
import SettingsViewContainer from '../Settings/SettingsViewContainer';
import MopidySettingsViewContainer from '../Settings/Mopidy/MopidySettingsViewContainer';
import SpotifyLoginViewContainer from '../Settings/Spotify/SpotifyLoginViewContainer';
import WithNavigationHeader from './WithNavigationHeader';

const AppNavigator = DrawerNavigator({
  CurrentTrack: { screen: StackNavigator({ CurrentTrack: { screen: WithNavigationHeader(CurrentTrackViewContainer, "Current Track") }})},
  Playlist: { screen: StackNavigator({ Playlist: { screen: WithNavigationHeader(PlaylistViewContainer, "Playlist") }})},
  Settings: { screen: StackNavigator({
    Settings: { screen: WithNavigationHeader(SettingsViewContainer, "Settings") },
    MopidySettings: { screen: MopidySettingsViewContainer },
    SpotifyLogin: { screen: SpotifyLoginViewContainer }
  })}
});



export default AppNavigator;
