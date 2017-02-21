import * as SpotifyActions from './Actions'
import Immutable, { Map, Set } from 'immutable'

const initialState = Map({
  connected: false
});

export default function SpotifyReducer(state = initialState, action) {
  switch (action.type) {
    case SpotifyActions.SPOTIFY_CONNECTED:
      return state.set('connected', true);
    default:
      return state;
  }
}
