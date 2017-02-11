export const SPOTIFY_CONNECTED = 'Spotify/SPOTIFY_CONNECTED';
export const SPOTIFY_RECEIVE_TRACK = 'Spotify/SPOTIFY_RECEIVE_TRACK';

export function connected(access_token, refresh_token) {
  return {
    type: SPOTIFY_CONNECTED,
    payload: {
      access_token,
      refresh_token
    }
  };
}

export function receiveTrack(currentTrack) {
  return {
    type: SPOTIFY_RECEIVE_TRACK,
    payload: {
      currentTrack
    }
  };
}
