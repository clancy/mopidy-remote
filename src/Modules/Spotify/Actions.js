export const SPOTIFY_CONNECTED = 'Spotify/SPOTIFY_CONNECTED';

export function connected(access_token, refresh_token) {
  return {
    type: SPOTIFY_CONNECTED,
    payload: {
      access_token,
      refresh_token
    }
  };
}
