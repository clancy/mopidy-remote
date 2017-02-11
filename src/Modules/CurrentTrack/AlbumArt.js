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

export default AlbumArt = React.createClass({
  propTypes: {
    albumArtUri: PropTypes.string
  },
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.albumArtImage}
          source={{uri: this.props.albumArtUri }}/>
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
