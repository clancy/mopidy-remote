import * as MopidyActions from './Actions'
import Rx from 'rxjs/Rx'
import * as ReduxPersistConstants from 'redux-persist/constants'

const rehydrateEpic = action$ =>
 action$.ofType(ReduxPersistConstants.REHYDRATE)
        .filter(action =>
          action.payload.settings &&
          action.payload.settings.getIn(['mopidy', 'hostname']) &&
          action.payload.settings.getIn(['mopidy', 'port']))
        .map(action => MopidyActions.connect(
          action.payload.settings.getIn(['mopidy', 'hostname']),
          action.payload.settings.getIn(['mopidy', 'port'])));

const mapReceiveTrackEpic = (action$, store) =>
  action$.ofType(MopidyActions.MOPIDY_RECEIVE_CURRENT_TRACK)
         .filter(action => action.payload && store.getState().mopidy.getIn(['image_index', action.payload.uri]) == undefined)
         .map(action => MopidyActions.getAlbumArt([action.payload.uri]));

const connectedEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_CONNECTED)
        .mapTo(MopidyActions.getInitialState());

const getInitialStateEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_GET_INITIAL_STATE)
         .switchMap(() => [
           MopidyActions.getCurrentTrack(),
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
