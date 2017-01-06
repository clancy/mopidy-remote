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
  route: {
    navigationBar: {
      title: 'About',
      tintColor: "#000",
    },
  },

  propTypes: {
    isPinging: PropTypes.bool.isRequired
  },

  ping() {
    this.props.dispatch(AboutState.ping());
  },
  render() {
    const pingingStyle = this.props.isPinging
      ? {backgroundColor: 'green'}
      : {backgroundColor: 'blue'};
    return (
      <View style={styles.container}>
        <Text>About Screnn</Text>
        <StatusBar barStyle="default" />
        <TouchableOpacity
          onPress={this.ping}
          style={[styles.pingButton, pingingStyle]}>
          <Text>Ping</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  pingButton: {
    ...circle,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  }
});

export default AboutView;
