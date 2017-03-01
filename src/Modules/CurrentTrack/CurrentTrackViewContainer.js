/* @flow */
import {connect} from 'react-redux';
import CurrentTrackView from './CurrentTrackView';
import * as MopidyActions from '../Mopidy/Actions'

const mapStateToProps = (state) => {
  let artists = state.mopidy.getIn(['currentTrack', 'artists']);
  let trackUri = state.mopidy.getIn(['currentTrack', 'uri'])
  return {
    length: state.mopidy.getIn(['currentTrack', 'length']) || 0,
    position: state.mopidy.get('position') || 0,
    playing: state.mopidy.get('playbackStatus') === 'playing',
    shuffleEnabled: state.mopidy.get('shuffle'),
    repeatEnabled: state.mopidy.get('repeat'),
    inLibrary: false,
    trackName: state.mopidy.getIn(['currentTrack', 'name']),
    albumArtUri: state.mopidy.getIn(['image_index', trackUri]),
    artists: artists ? artists.toJSON() : []
  }
}

const mapDispatchToProps = (dispatch) => {
    return({
      play: () => { dispatch(MopidyActions.play()) },
      pause: () => { dispatch(MopidyActions.pause()) },
      previous: () => { dispatch(MopidyActions.previousTrack()) },
      next: () => { dispatch(MopidyActions.nextTrack()) },
      shuffle: (enabled) => { dispatch(MopidyActions.shuffle(enabled)) },
      repeat: (enabled) => { dispatch(MopidyActions.repeat(enabled)) }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrackView);
