import * as SpotifyActions from '../Spotify/Actions'
import * as MopidyActions from '../Mopidy/Actions'
import Immutable, { Map } from 'immutable'

const initialState = Map({
  spotify: Map({
    access_token: null,
    refresh_token: null
  }),
  mopidy: Map({
    hostname: null,
    port: null,
  })
});

export default function SettingsStateReducer(state = initialState, action) {
  switch (action.type) {
    case MopidyActions.MOPIDY_CONNECT:
      return state.merge({
        mopidy: {
          hostname: action.payload.hostname,
          port: action.payload.port
        }
      });

    case SpotifyActions.SPOTIFY_CONNECTED:
      return state.merge({
        spotify: {
          access_token: action.payload.access_token,
          refresh_token: action.payload.refresh_token
        }
      });

    default:
      return state;
  }
}
