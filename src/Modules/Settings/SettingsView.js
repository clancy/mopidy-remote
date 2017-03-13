import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import SettingsRow from './SettingsRow'
import * as SpotifyActions from '../Spotify/Actions'
import SettingsSectionHeader from './SettingsSectionHeader'

class SettingsView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2
    });

    const configEntries = {
      "Mopidy" : [{
        text: "Connect to Mopidy",
        onPress: () => goToMopidySettings()
      }],
      "Spotify" : [{
          text: "Login to Spotify",
          onPress: () => goToSpotifyLogin()
        },
        {
          text: "Force refresh token",
          onPress: () => forceRefreshToken()
        }]
    }

    let goToMopidySettings = () => {
      this.props.navigation.navigate('MopidySettings');
    }

    let forceRefreshToken = () => {
      this.props.dispatch(SpotifyActions.refreshToken());
    }

    let goToSpotifyLogin = () => {
      this.props.navigation.navigate('SpotifyLogin');
    }

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(configEntries)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <SettingsRow {...data} /> }
          renderSectionHeader={(sectionData, sectionID) => <SettingsSectionHeader text={sectionID} />}
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
