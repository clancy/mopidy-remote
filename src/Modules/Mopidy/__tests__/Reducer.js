import MopidyReducer from '../Reducer'
import * as MopidyActions from '../Actions'
import Immutable, { Map } from 'immutable'

describe('MopidyReducer', () => {
  let initialState = undefined;

  beforeEach(() => {
    initialState = Map({
      hostname: null,
      port: null,
      connected: false,
      currentTrack: null,
      playbackStatus: null,
      shuffle: false,
      repeat: false,
      position: 0.0,
      image_index: Map({})
    });
  });

  it('should return the initial state', () => {
    expect(MopidyReducer(undefined, {})).toEqual(initialState);
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
      hostname: action.payload.hostname,
      port: action.payload.port
    });

    expect(MopidyReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set connected true on connected', () => {
    const action = {
      type: MopidyActions.MOPIDY_CONNECTED
    };
    let expectedState = initialState.set('connected', true);

    expect(MopidyReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set currentTrack on receive currnet track', () => {
    const action = {
      type: MopidyActions.MOPIDY_RECEIVE_CURRENT_TRACK,
      payload: {
        trackName: 'hello'
      }
    };
    let expectedState = initialState.set('currentTrack', Immutable.fromJS(action.payload));

    expect(MopidyReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set playback status on receive playback status', () => {
    const action = {
      type: MopidyActions.MOPIDY_RECEIVE_PLAYBACK_STATUS,
      payload: 'PLAYING'
    };

    let expectedState = initialState.set('playbackStatus', action.payload);

    expect(MopidyReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set shuffle status on receive shuffle status', () => {
    const action = {
      type: MopidyActions.MOPIDY_RECEIVE_SHUFFLE_STATUS,
      payload: true
    };

    let expectedState = initialState.set('shuffle', action.payload);

    expect(MopidyReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set repeat status on receive repeat status', () => {
    const action = {
      type: MopidyActions.MOPIDY_RECEIVE_REPEAT_STATUS,
      payload: true
    };

    let expectedState = initialState.set('repeat', action.payload);

    expect(MopidyReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set position on receive track position', () => {
    const action = {
      type: MopidyActions.MOPIDY_RECEIVE_TRACK_POSITION,
      payload: 10000
    };

    let expectedState = initialState.set('position', action.payload);

    expect(MopidyReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set albumArt in image_index on receive album art', () => {
    const action = {
      type: MopidyActions.MOPIDY_RECEIVE_ALBUM_ART,
      payload: {
        "spotify:track:1": [
          {
            "width": 640,
            "__model__": "Image",
            "uri": "https://imguri.com/image1_640.jpg",
            "height": 640
          },
          {
            "width": 300,
            "__model__": "Image",
            "uri": "https://imguri.com/image1_300.jpg",
            "height": 300
          }
        ],
        "spotify:track:2": [
          {
            "width": 640,
            "__model__": "Image",
            "uri": "https://imguri.com/image2_640.jpg",
            "height": 640
          },
          {
            "width": 300,
            "__model__": "Image",
            "uri": "https://imguri.com/image2_300.jpg",
            "height": 300
          }
        ]}
      };

    let images = Map(Immutable.fromJS(action.payload).map(uriMap => uriMap.filter(images => images.get('width') == 640).get(0).get('uri')));
    let expectedState = initialState.mergeIn(['image_index'], images);

    expect(MopidyReducer(initialState, action)).toEqual(expectedState);
  });
});
