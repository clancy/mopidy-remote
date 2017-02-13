import * as SpotifyActions from './Actions'
import Immutable, { Map, Set } from 'immutable'

const initialState = Map({
  connected: false,
  access_token: null,
  refresh_token: null,
  image_index: Map({})
});

export default function SpotifyReducer(state = initialState, action) {
  switch (action.type) {
    case SpotifyActions.SPOTIFY_CONNECTED:
      var refreshToken = action.payload.refresh_token ? action.payload.refresh_token : state.get('refresh_token');
      return state.merge({
        access_token: action.payload.access_token,
        refresh_token: refreshToken,
        connected: true
      });
    case SpotifyActions.SPOTIFY_RECEIVE_TRACK:
      var image300 = action.payload.currentTrack.album.images.find(i => i.height == 300);
      return state.setIn(['image_index', action.payload.currentTrack.album.uri], image300.url)
    default:
      return state;
  }
}
