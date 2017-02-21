/* @flow */
import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AlbumArt = (props) => (
  <View style={[styles.container, !props.albumArtUri ? styles.iconContainer : null]}>
    {(props.albumArtUri
      ? <Image style={styles.albumArtImage} source={{uri: props.albumArtUri }}/>
      : <Icon name='error-outline' style={styles.icon} />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'black'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  albumArtImage: {
    flex:1
  },
  icon: {
    color: 'white',
    fontSize: 200
  }
});

export default AlbumArt;
