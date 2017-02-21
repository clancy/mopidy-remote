import * as MopidyActions from '../Mopidy/Actions'
import * as SpotifyActions from './Actions'
import Rx from 'rxjs/Rx'
import SpotifyService from './Service'
import AuthService from './AuthService'

const trackPattern = /spotify:track:([A-Za-z0-9]+)/;

const getTrackEpic = action$ =>
  action$.ofType(MopidyActions.MOPIDY_RECEIVE_CURRENT_TRACK)
         .filter((action) => action.payload.currentTrack)
         .map((action) => action.payload.currentTrack)
         .map(currentTrack => trackPattern.exec(currentTrack.uri)[1])
         .switchMap(id => SpotifyService.getTrack(id)
            .do(r => console.log(r))
            .map(res => SpotifyActions.receiveTrack(res.response))
            .catch(e => Rx.Observable.of(SpotifyActions.spotifyApiError(e.error))));

const sources = {
    '401': Rx.Observable.of(SpotifyActions.refreshToken())
};

const handleApiErrorEpic = action$ =>
  action$.ofType(SpotifyActions.SPOTIFY_API_ERROR)
         .switchMap(action => Rx.Observable.case(
            function () {
                return action.payload.xhr.status;
            },
            sources));


const refreshTokenEpic = (action$, store) =>
 action$.ofType(SpotifyActions.SPOTIFY_REFRESH_TOKEN)
        .map(() => store.getState().settings.getIn(['spotify', 'refresh_token']))
        .switchMap(rt => AuthService.refreshToken(rt)
          .map(res => SpotifyActions.connected(res.response.access_token, res.response.refresh_token)));

const SpotifyEpics = [
 getTrackEpic,
 handleApiErrorEpic,
 refreshTokenEpic
];

export default SpotifyEpics;
