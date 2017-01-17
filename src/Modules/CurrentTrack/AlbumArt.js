import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const iconStyle = enabled => {
  return {
      'color' : enabled ? 'green' : 'white'
  };
};

export default TrackInfo = React.createClass({
  propTypes: {
    albumArtUri: PropTypes.string
  },
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.albumArtImage} source={{uri: 'https://i.scdn.co/image/2809893505162b55132370f3171fdc92128e28f0' }}/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'black'
  },
  albumArtImage: {
    flex:1
  }
});
