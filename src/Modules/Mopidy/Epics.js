import * as MopidyActions from './Actions'
import Rx from 'rxjs/Rx'
import * as Mopidy from './Service'
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

const connectEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_CONNECT)
         .map(action => `ws://${action.payload.hostname}:${action.payload.port}/mopidy/ws/`)
         .switchMap(webSocketUrl =>
           Rx.Observable.fromPromise(
             Mopidy.connect(webSocketUrl))
                   .map(MopidyActions.connected));

const connectedEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_CONNECTED)
        .map(MopidyActions.getInitialState);

const getInitialStateEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_GET_INITIAL_STATE)
         .switchMap(action => Rx.Observable.forkJoin(
           Rx.Observable.fromPromise(Mopidy.getCurrentTrack()),
           Rx.Observable.fromPromise(Mopidy.getState()),
           Rx.Observable.fromPromise(Mopidy.getRandom()),
           Rx.Observable.fromPromise(Mopidy.getTimePosition()),
           Rx.Observable.fromPromise(Mopidy.getRepeat()))
        .flatMap((arr) =>
              [MopidyActions.receiveCurrentTrack(arr[0]),
              MopidyActions.receivePlaybackStatus(arr[1]),
              MopidyActions.receiveShuffleStatus(arr[2]),
              MopidyActions.receiveTrackPosition(arr[3]),
              MopidyActions.receiveRepeatStatus(arr[4])]
            ));

const playEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_PLAY)
        .do(action => Mopidy.play())
        .skip();

const pauseEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_PAUSE)
        .do(action => Mopidy.pause())
        .skip();

const nextTrackEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_NEXT_TRACK)
        .do(() => Mopidy.nextTrack())
        .skip();

const previousTrackEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_PREVIOUS_TRACK)
        .do(() => Mopidy.previousTrack())
        .skip();

const shuffleEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_SHUFFLE)
        .do(action => Mopidy.setRandom(action.payload.enabled))
        .skip();

const repeatEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_REPEAT)
        .do(action => Mopidy.setRepeat(action.payload.enabled))
        .skip();

const MopidyEpics = [
  connectEpic,
  connectedEpic,
  getInitialStateEpic,
  playEpic,
  pauseEpic,
  nextTrackEpic,
  previousTrackEpic,
  shuffleEpic,
  repeatEpic,
  rehydrateEpic
];

export default MopidyEpics;
