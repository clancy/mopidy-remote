import * as SpotifyActions from './Actions'
import Immutable, { Map } from 'immutable'

initialState = Map({
  connected: false,
  access_token: null,
  refresh_token: null
});

export default function SpotifyReducer(state = initialState, action) {
  switch (action.type) {
    case SpotifyActions.SPOTIFY_CONNECTED:
      return state.merge({
        connected:true,
        hostname: action.payload.access_token,
        port: action.payload.refresh_token
      });
      
    default:
      return state;
  }
}
