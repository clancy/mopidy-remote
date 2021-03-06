import * as MopidyActions from './Actions'
import Rx from 'rxjs/Rx'
import * as ReduxPersistConstants from 'redux-persist/constants'

export const rehydrateEpic = action$ =>
 action$.ofType(ReduxPersistConstants.REHYDRATE)
        .filter(action =>
          action.payload.settings &&
          action.payload.settings.getIn(['mopidy', 'hostname']) &&
          action.payload.settings.getIn(['mopidy', 'port']))
        .map(action => MopidyActions.connect(
          action.payload.settings.getIn(['mopidy', 'hostname']),
          action.payload.settings.getIn(['mopidy', 'port'])));

export const mapReceiveTrackEpic = (action$, store) =>
  action$.ofType(MopidyActions.MOPIDY_RECEIVE_TL_TRACKS)
         .map(action => action.payload
           .map(tlTrack => tlTrack.track.album.uri)
           .filter(u => store.getState().mopidy.getIn(['image_index', u]) == undefined))
         .map(uris => MopidyActions.getAlbumArt(uris));

export const connectedEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_CONNECTED)
        .mapTo(MopidyActions.getInitialState());

export const getInitialStateEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_GET_INITIAL_STATE)
         .switchMap(() => [
           MopidyActions.getCurrentTlId(),
           MopidyActions.getTlTracks(),
           MopidyActions.getPlaybackStatus(),
           MopidyActions.getShuffleStatus(),
           MopidyActions.getRepeatStatus(),
           MopidyActions.getTrackPosition()]);

const MopidyEpics = [
  connectedEpic,
  mapReceiveTrackEpic,
  getInitialStateEpic,
  rehydrateEpic
];

export default MopidyEpics;
