import { createActions } from 'redux-actions';

export const MOPIDY_CONNECT = 'MOPIDY_CONNECT';
export const MOPIDY_CONNECTED = 'MOPIDY_CONNECTED';
export const MOPIDY_GET_INITIAL_STATE = 'MOPIDY_GET_INITIAL_STATE';
export const MOPIDY_GET_CURRENT_TL_ID = 'MOPIDY_GET_CURRENT_TL_ID';
export const MOPIDY_RECEIVE_CURRENT_TL_ID = 'MOPIDY_RECEIVE_CURRENT_TL_ID';
export const MOPIDY_GET_TL_TRACKS = 'MOPIDY_GET_TL_TRACKS';
export const MOPIDY_RECEIVE_TL_TRACKS = 'MOPIDY_RECEIVE_TL_TRACKS';
export const MOPIDY_GET_PLAYBACK_STATUS = 'MOPIDY_GET_PLAYBACK_STATUS';
export const MOPIDY_RECEIVE_PLAYBACK_STATUS = 'MOPIDY_RECEIVE_PLAYBACK_STATUS';
export const MOPIDY_GET_SHUFFLE_STATUS = 'MOPIDY_GET_SHUFFLE_STATUS';
export const MOPIDY_RECEIVE_SHUFFLE_STATUS = 'MOPIDY_RECEIVE_SHUFFLE_STATUS';
export const MOPIDY_GET_REPEAT_STATUS = 'MOPIDY_GET_REPEAT_STATUS';
export const MOPIDY_RECEIVE_REPEAT_STATUS = 'MOPIDY_RECEIVE_REPEAT_STATUS';
export const MOPIDY_GET_TRACK_POSITION = 'MOPIDY_GET_TRACK_POSITION';
export const MOPIDY_RECEIVE_TRACK_POSITION = 'MOPIDY_RECEIVE_TRACK_POSITION';
export const MOPIDY_GET_ALBUM_ART = 'MOPIDY_GET_ALBUM_ART';
export const MOPIDY_RECEIVE_ALBUM_ART = 'MOPIDY_RECEIVE_ALBUM_ART';

export const MOPIDY_PLAY = 'MOPIDY_PLAY';
export const MOPIDY_SHUFFLE = 'MOPIDY_SHUFFLE';
export const MOPIDY_REPEAT = 'MOPIDY_REPEAT';
export const MOPIDY_PAUSE = 'MOPIDY_PAUSE';
export const MOPIDY_NEXT_TRACK = 'MOPIDY_NEXT_TRACK';
export const MOPIDY_PREVIOUS_TRACK = 'MOPIDY_PREVIOUS_TRACK';


export const {
  mopidyConnect: connect,
  mopidyGetAlbumArt: getAlbumArt,
  mopidyGetCurrentTlId: getCurrentTlId,
  mopidyGetTlTracks: getTlTracks,
  mopidyGetPlaybackStatus: getPlaybackStatus,
  mopidyGetShuffleStatus: getShuffleStatus,
  mopidyGetRepeatStatus: getRepeatStatus,
  mopidyGetTrackPosition: getTrackPosition,
  mopidyReceiveAlbumArt: receiveAlbumArt,
  mopidyReceiveCurrentTlId: receiveCurrentTlId,
  mopidyReceiveTlTracks: receiveTlTracks,
  mopidyReceivePlaybackStatus: receivePlaybackStatus,
  mopidyReceiveShuffleStatus: receiveShuffleStatus,
  mopidyReceiveRepeatStatus: receiveRepeatStatus,
  mopidyReceiveTrackPosition: receiveTrackPosition,
  mopidyShuffle: shuffle,
  mopidyRepeat: repeat,
  mopidyPlay: play,
  mopidyPause: pause,
  mopidyNextTrack: nextTrack,
  mopidyPreviousTrack: previousTrack,
  mopidyConnected: connected,
  mopidyGetInitialState: getInitialState
} = createActions({
  MOPIDY_CONNECT: (hostname, port) => ({ hostname: hostname, port:port })
},
  MOPIDY_GET_ALBUM_ART,
  MOPIDY_GET_CURRENT_TL_ID,
  MOPIDY_GET_TL_TRACKS,
  MOPIDY_GET_PLAYBACK_STATUS,
  MOPIDY_GET_SHUFFLE_STATUS,
  MOPIDY_GET_REPEAT_STATUS,
  MOPIDY_GET_TRACK_POSITION,
  MOPIDY_RECEIVE_ALBUM_ART,
  MOPIDY_RECEIVE_CURRENT_TL_ID,
  MOPIDY_RECEIVE_TL_TRACKS,
  MOPIDY_RECEIVE_PLAYBACK_STATUS,
  MOPIDY_RECEIVE_SHUFFLE_STATUS,
  MOPIDY_RECEIVE_REPEAT_STATUS,
  MOPIDY_RECEIVE_TRACK_POSITION,
  MOPIDY_SHUFFLE,
  MOPIDY_REPEAT,
  MOPIDY_PLAY,
  MOPIDY_PAUSE,
  MOPIDY_NEXT_TRACK,
  MOPIDY_PREVIOUS_TRACK,
  MOPIDY_CONNECTED,
  MOPIDY_GET_INITIAL_STATE);
