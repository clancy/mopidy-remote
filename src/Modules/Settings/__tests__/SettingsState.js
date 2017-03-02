import SettingsStateReducer from '../SettingsState'
import * as MopidyActions from '../../Mopidy/Actions'
import * as SpotifyActions from '../../Spotify/Actions'
import Immutable, { Map } from 'immutable'

describe('MopidyReducer', () => {
  let initialState = undefined;

  beforeEach(() => {
    initialState = Map({
      spotify: Map({
        access_token: null,
        refresh_token: null
      }),
      mopidy: Map({
        hostname: null,
        port: null,
      })
    });
  });

  it('should return the initial state', () => {
    expect(SettingsStateReducer(undefined, {})).toEqual(initialState);
  });

  it('should set hostname and port on connect', () => {
    const action = {
      type: MopidyActions.MOPIDY_CONNECT,
      payload: {
        hostname: '192.168.1.1',
        port: '6680'
      }
    };
    let expectedState = initialState.merge({
      mopidy: {
        hostname: action.payload.hostname,
        port: action.payload.port
      }
    });

    expect(SettingsStateReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set access_token and refresh_token on spotify connect', () => {
    const action = {
      type: SpotifyActions.SPOTIFY_CONNECTED,
      payload: {
        access_token: 'access_1',
        refresh_token: 'refresh_1'
      }
    };

    let refresh_token = action.payload.refresh_token || state.getIn(['spotify', 'refresh_token']);
    let expectedState = initialState.merge({
      spotify: {
        access_token: action.payload.access_token,
        refresh_token: refresh_token
      }
    });

    expect(SettingsStateReducer(initialState, action)).toEqual(expectedState);
  });

  it('should not set refresh_token if refresh_token in payload is undefined', () => {
    let initialStateWithSetRefreshToken = initialState.merge({
      spotify: {
        access_token: 'access_1',
        refresh_token: 'refresh_1'
      }
    });

    const action = {
      type: SpotifyActions.SPOTIFY_CONNECTED,
      payload: {
        access_token: 'access_2',
        refresh_token: undefined
      }
    };

    let expectedState = initialStateWithSetRefreshToken.merge({
      spotify: {
        access_token: 'access_2',
        refresh_token: 'refresh_1'
      }
    });

    expect(SettingsStateReducer(initialStateWithSetRefreshToken, action)).toEqual(expectedState);
  });
});
