import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native';
import SettingsRow from './SettingsRow'
import * as SpotifyActions from '../Spotify/Actions'
import SettingsSectionHeader from './SettingsSectionHeader'

class SettingsView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({item}) => <SettingsRow {...item} /> }
          renderSectionHeader={({section}) => <SettingsSectionHeader text={section.key} />}
          sections={[{
            key: 'Mopidy',
            data: [{
              key:0,
              text: "Connect to Mopidy",
              onPress: () => this.props.navigation.navigate('MopidySettings')
            }]
          }, {
            key: 'Spotify',
            data: [{
              key: 0,
              text: "Login to Spotify",
              onPress: () => this.props.navigation.navigate('SpotifyLogin')
            },{
              key: 1,
              text: "Force refresh token",
              onPress: () => this.props.dispatch(SpotifyActions.refreshToken())
            }]
          }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default SettingsView;
