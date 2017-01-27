import {connect} from 'react-redux';
import CurrentTrackView from './CurrentTrackView';

const mapStateToProps = (state) => {

  var artists = state.mopidy.getIn(['currentTrack', 'artists']);
  return {
    length: state.mopidy.getIn(['currentTrack', 'length']),
    position: state.mopidy.get('position'),
    playing: state.mopidy.get('playbackStatus') === 'playing',
    shuffleEnabled: state.mopidy.get('shuffle'),
    repeatEnabled: state.mopidy.get('repeat'),
    inLibrary: false,
    trackName: state.mopidy.getIn(['currentTrack', 'name']),
    albumArtUri: 'https://i.scdn.co/image/2809893505162b55132370f3171fdc92128e28f0',
    artists: artists ? artists.toJSON() : [],
    length: state.mopidy.getIn(['currentTrack', 'length']),
  }
}

export default connect(mapStateToProps)(CurrentTrackView);
