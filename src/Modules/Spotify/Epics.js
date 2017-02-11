import * as MopidyActions from '../Mopidy/Actions'
import * as SpotifyActions from './Actions'
import Rx from 'rxjs/Rx'
import SpotifyService from './Service'

const trackPattern = /spotify:track:([A-Za-z0-9]+)/;
const api = SpotifyService.create();

const getTrackEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_RECEIVE_CURRENT_TRACK)
         .filter((action) => action.payload.currentTrack)
         .map((action) => action.payload.currentTrack)
         .map(currentTrack => trackPattern.exec(currentTrack.uri)[1])
         .switchMap(id =>
           Rx.Observable.fromPromise(
             api.getTrack(id))
                   .map((d) => SpotifyActions.receiveTrack(d.data)));


const SpotifyEpics = [
 getTrackEpic
];

export default SpotifyEpics;
