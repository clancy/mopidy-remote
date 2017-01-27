export const MOPIDY_CONNECT = 'Mopidy/CONNECT';
export const MOPIDY_CONNECTED = 'Mopidy/CONNECTED';
export const MOPIDY_READY = 'Mopidy/MOPIDY_READY';
export const MOPIDY_GET_INITIAL_STATE = 'Mopidy/MOPIDY_GET_INITIAL_STATE';
export const MOPIDY_RECEIVE_CURRENT_TRACK = 'Mopidy/MOPIDY_RECEIVE_CURRENT_TRACK';
export const MOPIDY_RECEIVE_PLAYBACK_STATUS = 'Mopidy/MOPIDY_RECEIVE_PLAYBACK_STATUS';
export const MOPIDY_RECEIVE_SHUFFLE_STATUS = 'Mopidy/MOPIDY_RECEIVE_SHUFFLE_STATUS';
export const MOPIDY_RECEIVE_REPEAT_STATUS = 'Mopidy/MOPIDY_RECEIVE_REPEAT_STATUS';
export const MOPIDY_RECEIVE_TRACK_POSITION = 'Mopidy/MOPIDY_RECEIVE_TRACK_POSITION';

export const MOPIDY_PLAY = 'Mopidy/MOPIDY_PLAY';
export const MOPIDY_SHUFFLE = 'Mopidy/MOPIDY_SHUFFLE';
export const MOPIDY_REPEAT = 'Mopidy/MOPIDY_REPEAT';
export const MOPIDY_PAUSE = 'Mopidy/MOPIDY_PAUSE';
export const MOPIDY_NEXT_TRACK = 'Mopidy/MOPIDY_NEXT_TRACK';
export const MOPIDY_PREVIOUS_TRACK = 'Mopidy/MOPIDY_PREVIOUS_TRACK';

export const NULL_ACTION = 'Mopidy/NULL_ACTION';

export function connect(webSocketUrl) {
  return {
    type: MOPIDY_CONNECT,
    payload: {
      webSocketUrl
    }
  };
}

export function nullAction() {
  return {
    type: NULL_ACTION
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

export function play() {
  return {
    type: MOPIDY_PLAY
  };
}

export function pause() {
  return {
    type: MOPIDY_PAUSE
  };
}

export function shuffle(enabled) {
  return {
    type: MOPIDY_SHUFFLE,
    payload: {
      enabled
    }
  };
}

export function repeat(enabled) {
  return {
    type: MOPIDY_REPEAT,
    payload: {
      enabled
    }
  };
}

export function nextTrack() {
  return {
    type: MOPIDY_NEXT_TRACK
  };
}

export function previousTrack() {
  return {
    type: MOPIDY_PREVIOUS_TRACK
  };
}
