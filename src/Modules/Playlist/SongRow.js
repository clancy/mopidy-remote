import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const SongRow = (props) => (
  <View style={styles.container}>
    <View>
      <View>
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
      <View>
        <Text style={styles.artistAlbum}>
          {props.artist} - {props.album}
        </Text>
      </View>
    </View>
    <View style={styles.lengthContainer}>
      <Text style={styles.length}>
        {props.length}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  artistAlbum: {
    color: 'lightgrey',
    fontSize: 10,
  },
  length: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }
});

export default SongRow;
