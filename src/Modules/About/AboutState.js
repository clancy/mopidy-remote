import {Map} from 'immutable';
import Rx from 'rxjs/Rx'
import * as Mopidy from '../../utils/MopidyService';

// Initial state
const initialState = Map({
  connected: false,
  currentTrack: '',
});

const CONNECT = 'AboutState/CONNECT';
const CONNECTED = 'AboutState/CONNECTED';
const GET_CURRENT_TRACK = 'AboutState/GET_CURRENT_TRACK';
const RECEIVED_CURRENT_TRACK = 'AboutState/RECEIVED_CURRENT_TRACK';

export function connect(webSocketUrl) {
  return {
    type: CONNECT,
    payload: {
      webSocketUrl
    }
  };
}

function connected() {
  return {
    type: CONNECTED
  };
}

function getCurrentTrack() {
  return {
    type: GET_CURRENT_TRACK
  };
}

export function receivedCurrentTrack(currentTrack) {
  return {
    type: RECEIVED_CURRENT_TRACK,
    payload: {
      currentTrack
    }
  };
}

export const connectEpic = action$ =>
  action$.ofType(CONNECT)
         .map(action => action.payload.webSocketUrl)
         .switchMap(webSocketUrl =>
           Rx.Observable.fromPromise(
             Mopidy.connect(webSocketUrl))
                   .map(connected));

export const connectedEpic = action$ =>
  action$.ofType(CONNECTED)
         .map(getCurrentTrack);

export const getCurrentTrackEpic = action$ =>
  action$.ofType(GET_CURRENT_TRACK)
         .switchMap(() =>
          Rx.Observable.fromPromise(
           Mopidy.getCurrentTrack())
                 .map(track => track.name)
                 .map(receivedCurrentTrack));

export default function AboutStateReducer(state = initialState, action) {
  switch (action.type) {
    case CONNECTED:
      return state.update('connected', v => true);

    case RECEIVED_CURRENT_TRACK:
      return state.update('currentTrack', v => action.payload.currentTrack);

    default:
      return state;
  }
}
