import * as MopidyActions from './Actions'
import Rx from 'rxjs/Rx'
import * as Mopidy from './Service'

const connectEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_CONNECT)
         .map(action => action.payload.webSocketUrl)
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
        .map(MopidyActions.nullAction);

const pauseEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_PAUSE)
        .do(action => Mopidy.pause())
        .map(MopidyActions.nullAction);

const nextTrackEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_NEXT_TRACK)
        .do(() => Mopidy.nextTrack())
        .map(MopidyActions.nullAction);

const previousTrackEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_PREVIOUS_TRACK)
        .do(() => Mopidy.previousTrack())
        .map(MopidyActions.nullAction);

const shuffleEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_SHUFFLE)
        .do(action => Mopidy.setRandom(action.payload.enabled))
        .map(MopidyActions.nullAction);

const repeatEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_REPEAT)
        .do(action => Mopidy.setRepeat(action.payload.enabled))
        .map(MopidyActions.nullAction);

const MopidyEpics = [
  connectEpic,
  connectedEpic,
  getInitialStateEpic,
  playEpic,
  pauseEpic,
  nextTrackEpic,
  previousTrackEpic,
  shuffleEpic,
  repeatEpic
];

export default MopidyEpics;
