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

export default TrackInfo = React.createClass({
  propTypes: {
    inLibrary: PropTypes.bool.isRequired
  },
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon style={iconStyle(this.props.inLibrary)} name='done' size={35} />
        </View>
        <View style={styles.trackTextView}>
          <Text style={styles.trackNameText}>Talisman</Text>
          <Text style={styles.albumText}>Air</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon style={iconStyle()}  name='more-vert' size={35} />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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
  albumText: {
    color: 'white'
  },
  trackTextView: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 70
  }
});
