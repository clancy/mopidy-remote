import * as SettingsState from './SettingsState';
import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import SpotifyRow from './SpotifyRow'
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
        onPress: () => alert("press")
      }],
      "Spotify" : [{
          text: "Login to Spotify",
          onPress: () => alert("press")
        },
        {
            text: "Logged in to Spotify",
            onPress: () => alert("press")
          }
      ]
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
          renderRow={(data) => <SpotifyRow {...data} /> }
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
