/* @flow */
import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const iconStyle = enabled => {
  return {
      'color' : enabled ? 'green' : 'white'
  };
};

const TrackInfo = React.createClass({
  propTypes: {
    inLibrary: PropTypes.bool.isRequired,
    trackName: PropTypes.string,
    artists: PropTypes.arrayOf(React.PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired
  },
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon style={iconStyle(this.props.inLibrary)} name='done' size={35} />
        </View>
        <View style={styles.trackTextView}>
          <Text style={styles.trackNameText}>{this.props.trackName}</Text>
          <Text style={styles.artistText}>{this.props.artists.map(a => a.name).join(', ')}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon style={iconStyle()}  name='more-vert' size={35} />
        </View>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: .5,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconContainer: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  trackNameText: {
    color: 'white',
    fontWeight: 'bold'
  },
  artistText: {
    color: 'white'
  },
  trackTextView: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 70
  }
});

export default TrackInfo;
