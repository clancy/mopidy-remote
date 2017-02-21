/* @flow */
import {connect} from 'react-redux';
import CurrentTrackView from './CurrentTrackView';

const mapStateToProps = (state) => {
  let artists = state.mopidy.getIn(['currentTrack', 'artists']);
  let trackUri = state.mopidy.getIn(['currentTrack', 'uri'])
  return {
    length: state.mopidy.getIn(['currentTrack', 'length']),
    position: state.mopidy.get('position'),
    playing: state.mopidy.get('playbackStatus') === 'playing',
    shuffleEnabled: state.mopidy.get('shuffle'),
    repeatEnabled: state.mopidy.get('repeat'),
    inLibrary: false,
    trackName: state.mopidy.getIn(['currentTrack', 'name']),
    albumArtUri: state.mopidy.getIn(['image_index', trackUri]),
    artists: artists ? artists.toJSON() : []
  }
}

export default connect(mapStateToProps)(CurrentTrackView);
