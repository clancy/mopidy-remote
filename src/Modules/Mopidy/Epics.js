import * as MopidyActions from './Actions'
import Rx from 'rxjs/Rx'
import * as Mopidy from './Service'

export const connectEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_CONNECT)
         .map(action => action.payload.webSocketUrl)
         .switchMap(webSocketUrl =>
           Rx.Observable.fromPromise(
             Mopidy.connect(webSocketUrl))
                   .map(MopidyActions.connected));

export const connectedEpic = action$ =>
 action$.ofType(MopidyActions.MOPIDY_CONNECTED)
        .map(MopidyActions.getInitialState);

export const getInitialStateEpic = action$ =>
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
