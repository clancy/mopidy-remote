import * as SpotifyActions from './Actions'
import Immutable, { Map, Set } from 'immutable'

const initialState = Map({
  connected: false,
  image_index: Map({})
});

export default function SpotifyReducer(state = initialState, action) {
  switch (action.type) {
    case SpotifyActions.SPOTIFY_CONNECTED:
      return state.set('connected', true);
    case SpotifyActions.SPOTIFY_RECEIVE_TRACK:
      var image300 = action.payload.currentTrack.album.images.find(i => i.height == 300);
      return state.setIn(['image_index', action.payload.currentTrack.album.uri], image300.url)
    default:
      return state;
  }
}
