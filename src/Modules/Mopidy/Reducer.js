import * as MopidyActions from './Actions'
import Immutable, { Map } from 'immutable'

const initialState = Map({
  hostname: null,
  port: null,
  connected: false,
  ready: false,
  currentTrack: null,
  playbackStatus: null,
  shuffle: false,
  repeat: false,
  position: 0.0,
  image_index: Map({})
});

export default function MopidyReducer(state = initialState, action) {
  switch (action.type) {
    case MopidyActions.MOPIDY_CONNECT:
      return state.merge({
        hostname: action.payload.hostname,
        port: action.payload.port
      });

    case MopidyActions.MOPIDY_CONNECTED:
      return state.set('connected', true);

    case MopidyActions.MOPIDY_READY:
      return state.set('ready', true);

    case MopidyActions.MOPIDY_RECEIVE_CURRENT_TRACK:
      return state.set('currentTrack', Immutable.fromJS(action.payload.currentTrack));

    case MopidyActions.MOPIDY_RECEIVE_PLAYBACK_STATUS:
      return state.set('playbackStatus', action.payload.playbackStatus);

    case MopidyActions.MOPIDY_RECEIVE_SHUFFLE_STATUS:
      return state.set('shuffle', action.payload.shuffle);

    case MopidyActions.MOPIDY_RECEIVE_REPEAT_STATUS:
      return state.set('repeat', action.payload.repeat);

    case MopidyActions.MOPIDY_RECEIVE_TRACK_POSITION:
      return state.set('position', action.payload.trackPosition);

    case MopidyActions.MOPIDY_RECEIVE_ALBUM_ART:
      var images = Map(Immutable.fromJS(action.payload).map(uriMap => uriMap.filter(images => images.get('width') == 640).get(0).get('uri')));
      return state.mergeIn(['image_index'], images);
    default:
      return state;
  }
}
