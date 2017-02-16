/* @flow */
import React, { Component, PropTypes } from 'react';
import Controls from './Controls'
import Progress from './Progress'
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
    playing: PropTypes.bool.isRequired,
    shuffleEnabled: PropTypes.bool.isRequired,
    repeatEnabled: PropTypes.bool.isRequired,
    inLibrary: PropTypes.bool.isRequired,
    trackName: PropTypes.string,
    artists: PropTypes.arrayOf(React.PropTypes.shape({
      name: PropTypes.string.isRequired
    })),
    albumArtUri: PropTypes.string
  },
  playPause() {
    if(this.props.playing){
      this.props.dispatch(MopidyActions.pause());
    } else {
      this.props.dispatch(MopidyActions.play());
    }
  },
  previous() {
    this.props.dispatch(MopidyActions.previousTrack());
  },
  next() {
    this.props.dispatch(MopidyActions.nextTrack());
  },
  shuffle() {
    this.props.dispatch(MopidyActions.shuffle(!this.props.shuffleEnabled));
  },
  repeat() {
    this.props.dispatch(MopidyActions.repeat(!this.props.repeatEnabled));
  },
  render() {
    return (
      <View style={styles.container}>
        <AlbumArt albumArtUri={this.props.albumArtUri}/>
        <TrackInfo inLibrary={this.props.inLibrary} trackName={this.props.trackName} artists={this.props.artists}/>
        <Progress playing={this.props.playing} length={this.props.length} position={this.props.position}/>
        <Controls
          previous={this.previous}
          next={this.next}
          shuffle={this.shuffle}
          repeat={this.repeat}
          playPause={this.playPause}
          playing={this.props.playing}
          shuffleEnabled={this.props.shuffleEnabled}
          repeatEnabled={this.props.repeatEnabled} />
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
