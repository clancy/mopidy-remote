import React, { Component, PropTypes } from 'react';
import * as AboutState from './AboutState';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const AboutView = React.createClass({

  propTypes: {
    connected: PropTypes.bool.isRequired,
    currentTrack: PropTypes.string
  },

  connect() {
    this.props.dispatch(AboutState.connect('ws://192.168.0.32:6680/mopidy/ws/'));
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.connect}>
          <Text>Connect</Text>
        </TouchableOpacity>
        <Text>{ this.props.currentTrack }</Text>
      </View>
    );
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default AboutView;
