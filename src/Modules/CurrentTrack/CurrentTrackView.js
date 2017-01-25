import React, { Component, PropTypes } from 'react';
import ControlsView from './Controls'
import ProgressView from './Progress'
import TrackInfo from './TrackInfo'
import AlbumArt from './AlbumArt'
import * as MopidyActions from '../Mopidy/Actions'
import {
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const CurrentTrackView = React.createClass({
  propTypes: {
    length: PropTypes.number,
    position: PropTypes.number.isRequired,
    paused: PropTypes.bool.isRequired,
    shuffle: PropTypes.bool.isRequired,
    repeat: PropTypes.bool.isRequired,
    inLibrary: PropTypes.bool.isRequired,
    trackName: PropTypes.string,
    artists: PropTypes.arrayOf(React.PropTypes.shape({
      name: PropTypes.string.isRequired
    })),
    albumArtUri: PropTypes.string.isRequired
  },
  componentWillMount() {
    this.props.dispatch(MopidyActions.connect('ws://192.168.0.30:6680/mopidy/ws/'));
  },
  render() {
    return (
      <View style={styles.container}>
        <AlbumArt albumArtUri={this.props.albumArtUri}/>
        <TrackInfo inLibrary={this.props.inLibrary} trackName={this.props.trackName} artists={this.props.artists}/>
        <Progress length={this.props.length} position={this.props.position}/>
        <Controls paused={this.props.paused} shuffle={this.props.shuffle} repeat={this.props.repeat} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default CurrentTrackView;
