export const MOPIDY_CONNECT = 'Mopidy/CONNECT';
export const MOPIDY_CONNECTED = 'Mopidy/CONNECTED';
export const MOPIDY_READY = 'Mopidy/MOPIDY_READY';
export const MOPIDY_GET_INITIAL_STATE = 'Mopidy/MOPIDY_GET_INITIAL_STATE';
export const MOPIDY_RECEIVE_CURRENT_TRACK = 'Mopidy/MOPIDY_RECEIVE_CURRENT_TRACK';
export const MOPIDY_RECEIVE_PLAYBACK_STATUS = 'Mopidy/MOPIDY_RECEIVE_PLAYBACK_STATUS';
export const MOPIDY_RECEIVE_SHUFFLE_STATUS = 'Mopidy/MOPIDY_RECEIVE_SHUFFLE_STATUS';
export const MOPIDY_RECEIVE_REPEAT_STATUS = 'Mopidy/MOPIDY_RECEIVE_REPEAT_STATUS';
export const MOPIDY_RECEIVE_TRACK_POSITION = 'Mopidy/MOPIDY_RECEIVE_TRACK_POSITION';

export function connect(webSocketUrl) {
  return {
    type: MOPIDY_CONNECT,
    payload: {
      webSocketUrl
    }
  };
}

export function connected() {
  return {
    type: MOPIDY_CONNECTED
  };
}

export function getInitialState() {
  return {
    type: MOPIDY_GET_INITIAL_STATE
  };
}

export function ready() {
  return {
    type: MOPIDY_READY
  };
}

export function receiveCurrentTrack(currentTrack) {
  return {
    type: MOPIDY_RECEIVE_CURRENT_TRACK,
    payload: {
      currentTrack
    }
  };
}

export function receivePlaybackStatus(playbackStatus) {
  return {
    type: MOPIDY_RECEIVE_PLAYBACK_STATUS,
    payload: {
      playbackStatus
    }
  };
}

export function receiveShuffleStatus(shuffle) {
  return {
    type: MOPIDY_RECEIVE_SHUFFLE_STATUS,
    payload: {
      shuffle
    }
  };
}

export function receiveRepeatStatus(repeat) {
  return {
    type: MOPIDY_RECEIVE_REPEAT_STATUS,
    payload: {
      repeat
    }
  };
}

export function receiveTrackPosition(trackPosition) {
  return {
    type: MOPIDY_RECEIVE_TRACK_POSITION,
    payload: {
      trackPosition
    }
  };
}
