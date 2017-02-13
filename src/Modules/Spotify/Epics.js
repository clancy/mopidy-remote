import * as MopidyActions from '../Mopidy/Actions'
import * as SpotifyActions from './Actions'
import Rx from 'rxjs/Rx'
import SpotifyService from './Service'
import AuthService from './AuthService'

const trackPattern = /spotify:track:([A-Za-z0-9]+)/;
const api = SpotifyService.create();
const authApi = AuthService.create();

const getTrackEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_RECEIVE_CURRENT_TRACK)
         .filter((action) => action.payload.currentTrack)
         .map((action) => action.payload.currentTrack)
         .map(currentTrack => trackPattern.exec(currentTrack.uri)[1])
         .switchMap(id =>
           Rx.Observable.fromPromise(
             api.getTrack(id))
                  .switchMap(res => Rx.Observable.if(
                    () => !res.ok && res.status == 401,
                      Rx.Observable.of(SpotifyActions.refreshToken()),
                      Rx.Observable.of(SpotifyActions.receiveTrack(res.data)))));

const refreshTokenEpic = (action$, store) =>
 action$.ofType(SpotifyActions.SPOTIFY_REFRESH_TOKEN)
        .map(() => store.getState().settings.getIn(['spotify', 'refresh_token']))
        .switchMap(rt => Rx.Observable.fromPromise(authApi.refreshToken(rt))
        .map(res => SpotifyActions.connected(res.data.access_token, res.data.refresh_token)));

const SpotifyEpics = [
 getTrackEpic,
 refreshTokenEpic
];

export default SpotifyEpics;
