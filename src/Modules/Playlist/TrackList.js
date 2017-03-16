import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import TrackRow from './TrackRow'

class TrackList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => item.tlid}
          data={this.props.trackList}
          renderItem={({item}) => <TrackRow {...item.track} />}
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

export default TrackList;
