import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const msToMinAndSec = (ms: number) => {
  if(ms === undefined){
    return '0:00'
  }
  let x = Math.trunc(ms / 1000)
  let seconds = x % 60
  x = Math.trunc(x / 60)
  let minutes = x % 60
  return `${minutes}:${padZero(seconds,2)}`
}

const padZero = (num, size) => {
  let s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
};

const TrackRow = (props) => (
  <View style={styles.container}>
    <View>
      <View>
        <Text style={styles.title}>
          {props.name}
        </Text>
      </View>
      <View>
        <Text style={styles.artistAlbum}>
          {props.artists.map(a => a.name).join(', ')} - {props.album.name}
        </Text>
      </View>
    </View>
    <View style={styles.lengthContainer}>
      <Text style={styles.length}>
        {msToMinAndSec(props.length)}
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

export default TrackRow;
