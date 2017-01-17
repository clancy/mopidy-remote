import React, { Component, PropTypes } from 'react';
import * as CurrentTrackState from './CurrentTrackState';
import ControlsView from './Controls'
import ProgressView from './Progress'
import TrackInfo from './TrackInfo'
import AlbumArt from './AlbumArt'
import {
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const CurrentTrackView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <AlbumArt albumArtUri={'https://i.scdn.co/image/2809893505162b55132370f3171fdc92128e28f0'}/>
        <TrackInfo inLibrary={true}/>
        <Progress length={300000.0} position={200000.0}/>
        <Controls isPaused={true} shuffle={false} repeat={false} />
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
