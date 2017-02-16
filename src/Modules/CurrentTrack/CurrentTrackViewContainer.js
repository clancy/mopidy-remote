/* @flow */
import {connect} from 'react-redux';
import CurrentTrackView from './CurrentTrackView';

const mapStateToProps = (state) => {
  var artists = state.mopidy.getIn(['currentTrack', 'artists']);
  var albumUri = state.mopidy.getIn(['currentTrack', 'album', 'uri'])
  return {
    length: state.mopidy.getIn(['currentTrack', 'length']),
    position: state.mopidy.get('position'),
    playing: state.mopidy.get('playbackStatus') === 'playing',
    shuffleEnabled: state.mopidy.get('shuffle'),
    repeatEnabled: state.mopidy.get('repeat'),
    inLibrary: false,
    trackName: state.mopidy.getIn(['currentTrack', 'name']),
    albumArtUri: state.spotify.getIn(['image_index', albumUri]),
    artists: artists ? artists.toJSON() : []
  }
}

export default connect(mapStateToProps)(CurrentTrackView);
