import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import TrackList from './TrackList'

class PlaylistView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container} >
        <TrackList trackList={this.props.trackList}/>
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

export default PlaylistView;
