import * as MopidyActions from '../Actions';

describe('Mopidy Actions tests', () => {
  test('connect emits correct action', () => {
    expect(MopidyActions.connect('192.168.1.1', '6680')).toEqual({
      type: 'MOPIDY_CONNECT',
      payload: {hostname: '192.168.1.1', port:'6680'}
    });
  });

  test('getAlbumArt emits correct action', () => {
    expect(MopidyActions.getAlbumArt(['trackid1'])).toEqual({
      type: 'MOPIDY_GET_ALBUM_ART',
      payload: ['trackid1']
    });
  });

  test('receiveAlbumArt emits correct action', () => {
    expect(MopidyActions.receiveAlbumArt(['http://someuri', 'http://otheruri'])).toEqual({
      type: 'MOPIDY_RECEIVE_ALBUM_ART',
      payload: ['http://someuri', 'http://otheruri']
    });
  });

  test('receiveCurrentTrack emits correct action', () => {
    expect(MopidyActions.receiveCurrentTrack({uri: 'trackuri'})).toEqual({
      type: 'MOPIDY_RECEIVE_CURRENT_TRACK',
      payload: {uri: 'trackuri'}
    });
  });

  test('receivePlaybackStatus emits correct action', () => {
    expect(MopidyActions.receivePlaybackStatus('PLAYING')).toEqual({
      type: 'MOPIDY_RECEIVE_PLAYBACK_STATUS',
      payload: 'PLAYING'
    });
  });

  test('receiveShuffleStatus emits correct action', () => {
    expect(MopidyActions.receiveShuffleStatus(true)).toEqual({
      type: 'MOPIDY_RECEIVE_SHUFFLE_STATUS',
      payload: true
    });
  });

  test('receiveRepeatStatus emits correct action', () => {
    expect(MopidyActions.receiveRepeatStatus(false)).toEqual({
      type: 'MOPIDY_RECEIVE_REPEAT_STATUS',
      payload: false
    });
  });

  test('receiveTrackPosition emits correct action', () => {
    expect(MopidyActions.receiveTrackPosition(10000)).toEqual({
      type: 'MOPIDY_RECEIVE_TRACK_POSITION',
      payload: 10000
    });
  });

  test('shuffle emits correct action', () => {
    expect(MopidyActions.shuffle()).toEqual({
      type: 'MOPIDY_SHUFFLE'
    });
  });

  test('repeat emits correct action', () => {
    expect(MopidyActions.repeat()).toEqual({
      type: 'MOPIDY_REPEAT'
    });
  });

  test('play emits correct action', () => {
    expect(MopidyActions.play()).toEqual({
      type: 'MOPIDY_PLAY'
    });
  });

  test('pause emits correct action', () => {
    expect(MopidyActions.pause()).toEqual({
      type: 'MOPIDY_PAUSE'
    });
  });

  test('nextTrack emits correct action', () => {
    expect(MopidyActions.nextTrack()).toEqual({
      type: 'MOPIDY_NEXT_TRACK'
    });
  });

  test('previousTrack emits correct action', () => {
    expect(MopidyActions.previousTrack()).toEqual({
      type: 'MOPIDY_PREVIOUS_TRACK'
    });
  });

  test('connected emits correct action', () => {
    expect(MopidyActions.connected()).toEqual({
      type: 'MOPIDY_CONNECTED'
    });
  });

  test('getInitialState emits correct action', () => {
    expect(MopidyActions.getInitialState()).toEqual({
      type: 'MOPIDY_GET_INITIAL_STATE'
    });
  });
});
