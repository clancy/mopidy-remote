import * as MopidyActions from '../Actions';

describe('Mopidy Actions tests', () => {
  test('connect emits correct action', () => {
    expect(MopidyActions.connect('192.168.1.1', '6680')).toMatchObject({
      type: 'MOPIDY_CONNECT',
      payload: {hostname: '192.168.1.1', port:'6680'}
    });
  });

  test('getAlbumArt emits correct action', () => {
    expect(MopidyActions.getAlbumArt(['trackid1'])).toMatchObject({
      type: 'MOPIDY_GET_ALBUM_ART',
      payload: ['trackid1']
    });
  });

  test('receiveAlbumArt emits correct action', () => {
    expect(MopidyActions.receiveAlbumArt(['http://someuri', 'http://otheruri'])).toMatchObject({
      type: 'MOPIDY_RECEIVE_ALBUM_ART',
      payload: ['http://someuri', 'http://otheruri']
    });
  });

  test('receiveCurrentTrack emits correct action', () => {
    expect(MopidyActions.receiveCurrentTrack({uri: 'trackuri'})).toMatchObject({
      type: 'MOPIDY_RECEIVE_CURRENT_TRACK',
      payload: {uri: 'trackuri'}
    });
  });

  test('receivePlaybackStatus emits correct action', () => {
    expect(MopidyActions.receivePlaybackStatus('PLAYING')).toMatchObject({
      type: 'MOPIDY_RECEIVE_PLAYBACK_STATUS',
      payload: 'PLAYING'
    });
  });

  test('receiveShuffleStatus emits correct action', () => {
    expect(MopidyActions.receiveShuffleStatus(true)).toMatchObject({
      type: 'MOPIDY_RECEIVE_SHUFFLE_STATUS',
      payload: true
    });
  });

  test('receiveRepeatStatus emits correct action', () => {
    expect(MopidyActions.receiveRepeatStatus(false)).toMatchObject({
      type: 'MOPIDY_RECEIVE_REPEAT_STATUS',
      payload: false
    });
  });

  test('receiveTrackPosition emits correct action', () => {
    expect(MopidyActions.receiveTrackPosition(10000)).toMatchObject({
      type: 'MOPIDY_RECEIVE_TRACK_POSITION',
      payload: 10000
    });
  });

  test('shuffle emits correct action', () => {
    expect(MopidyActions.shuffle()).toMatchObject({
      type: 'MOPIDY_SHUFFLE'
    });
  });

  test('repeat emits correct action', () => {
    expect(MopidyActions.repeat()).toMatchObject({
      type: 'MOPIDY_REPEAT'
    });
  });

  test('play emits correct action', () => {
    expect(MopidyActions.play()).toMatchObject({
      type: 'MOPIDY_PLAY'
    });
  });

  test('pause emits correct action', () => {
    expect(MopidyActions.pause()).toMatchObject({
      type: 'MOPIDY_PAUSE'
    });
  });

  test('nextTrack emits correct action', () => {
    expect(MopidyActions.nextTrack()).toMatchObject({
      type: 'MOPIDY_NEXT_TRACK'
    });
  });

  test('previousTrack emits correct action', () => {
    expect(MopidyActions.previousTrack()).toMatchObject({
      type: 'MOPIDY_PREVIOUS_TRACK'
    });
  });

  test('connected emits correct action', () => {
    expect(MopidyActions.connected()).toMatchObject({
      type: 'MOPIDY_CONNECTED'
    });
  });

  test('getInitialState emits correct action', () => {
    expect(MopidyActions.getInitialState()).toMatchObject({
      type: 'MOPIDY_GET_INITIAL_STATE'
    });
  });
});
