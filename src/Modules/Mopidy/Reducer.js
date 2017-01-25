import * as MopidyActions from './Actions'
import Immutable, { Map } from 'immutable'

initialState = Map({
  connected: false,
  ready: false,
  currentTrack: null,
  playbackStatus: null,
  shuffle: false,
  repeat: false,
  position: 0.0
});

export default function MopidyReducer(state = initialState, action) {
  switch (action.type) {
    case MopidyActions.MOPIDY_CONNECT:
      return state.update('connected', v => true);

    case MopidyActions.MOPIDY_READY:
      return state.update('ready', v => true);

    case MopidyActions.MOPIDY_RECEIVE_CURRENT_TRACK:
      return state.update('currentTrack', v => Immutable.fromJS(action.payload.currentTrack));

    case MopidyActions.MOPIDY_RECEIVE_PLAYBACK_STATUS:
      return state.update('playbackStatus', v => action.payload.playbackStatus);

    case MopidyActions.MOPIDY_RECEIVE_SHUFFLE_STATUS:
      return state.update('shuffle', v => action.payload.shuffle);

    case MopidyActions.MOPIDY_RECEIVE_REPEAT_STATUS:
      return state.update('repeat', v => action.payload.repeat);

    case MopidyActions.MOPIDY_RECEIVE_TRACK_POSITION:
      return state.update('position', v => action.payload.trackPosition);

    default:
      return state;
  }
}
