import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Drawer from './Drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'

import CurrentTrackViewContainer from '../CurrentTrack/CurrentTrackViewContainer';
import PlaylistViewContainer from '../Playlist/PlaylistViewContainer';
import SettingsViewContainer from '../Settings/SettingsViewContainer';
import MopidySettingsViewContainer from '../Settings/Mopidy/MopidySettingsViewContainer';
import SpotifyLoginViewContainer from '../Settings/Spotify/SpotifyLoginViewContainer';
import WithNavigationHeader from './WithNavigationHeader';

const AppNavigator = DrawerNavigator({
  CurrentTrack: { screen: StackNavigator({ CurrentTrack: { screen: WithNavigationHeader(CurrentTrackViewContainer, "Current Track", "play-circle-outline") }})},
  Playlist: { screen: StackNavigator({ Playlist: { screen: WithNavigationHeader(PlaylistViewContainer, "Playlist", "queue-music") }})},
  Settings: { screen: StackNavigator({
    Settings: { screen: WithNavigationHeader(SettingsViewContainer, "Settings", "settings") },
    MopidySettings: { screen: MopidySettingsViewContainer },
    SpotifyLogin: { screen: SpotifyLoginViewContainer }
  })}
}, {
  contentOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'white'
  },
  contentComponent: Drawer,
  initialRouteName: 'Playlist'
});


export default AppNavigator;
