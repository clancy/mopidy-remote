import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ProgressViewIOS
} from 'react-native';

const padZero = (num, size) => {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
};

export default Progress = React.createClass({
  propTypes: {
    length: PropTypes.number,
    position: PropTypes.number,
    playing: PropTypes.bool.isRequired
  },

  getTrackProgress: (length, position) => {
    return position / length;
  },

  msToMinAndSec: (ms) => {
    if(ms === undefined){
      return '0:00'
    }
    var x = Math.trunc(ms / 1000)
    var seconds = x % 60
    x = Math.trunc(x / 60)
    var minutes = x % 60
    return `${minutes}:${padZero(seconds,2)}`
  },
  getInitialState: function() {
    return {
      position: 0
    };
  },
  tick: function() {
    this.setState({position: this.state.position + 1000});
    if (this.state.position >= this.props.length) {
      clearInterval(this.interval);
    }
  },
  componentDidMount: function() {
    this.setState({ position: this.props.position });

    clearInterval(this.interval);
    if(this.props.playing){
      this.interval = setInterval(this.tick, 1000);
    }
  },
  componentWillReceiveProps(nextProps) {
    if(this.props == nextProps){
      return;
    }
    this.setState({ position: nextProps.position });

    clearInterval(this.interval);
    if(nextProps.playing){
      this.interval = setInterval(this.tick, 1000);
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{this.msToMinAndSec(this.state.position)}</Text>
        </View>
        <ProgressViewIOS
          style={styles.progressView}
          progress={this.getTrackProgress(this.props.length, this.state.position)}
          progressTintColor='green'/>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{this.msToMinAndSec(this.props.length)}</Text>
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
  timeContainer: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeText: {
    color: 'white'
  },
  progressView: {
    flex: 70
  }
});
