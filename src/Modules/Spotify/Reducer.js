import * as SpotifyActions from './Actions'
import Immutable, { Map } from 'immutable'

const initialState = Map({
  connected: false,
  access_token: null,
  refresh_token: null
});

export default function SpotifyReducer(state = initialState, action) {
  switch (action.type) {
    case SpotifyActions.SPOTIFY_CONNECTED:
      return state.merge({
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        connected: true
      });

    default:
      return state;
  }
}
