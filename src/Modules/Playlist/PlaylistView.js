import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import SongRow from './SongRow'

class PlaylistView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{
            key: 'a',
            title: 'Hold On',
            artist: 'Buck',
            album: 'Where Out There',
            length: '4:45'
          }, {
            key: 'b',
            title: 'Hardly',
            artist: 'Buck',
            album: 'Where Out There',
            length: '3:42'
          }]}
          renderItem={({item}) => <SongRow {...item} />}
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

export default PlaylistView;
