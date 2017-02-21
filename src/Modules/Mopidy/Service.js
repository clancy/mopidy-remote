import Mopidy from 'mopidy';
import store from '../../redux/store';
import * as MopidyActions from './Actions';
let mopidy = null;

export function connect(webSocketUrl) {
  return new Promise((resolve, reject) => {
    mopidy = new Mopidy({
      autoConnect: false,
      webSocketUrl: webSocketUrl,
      callingConvention: 'by-position-or-by-name'
    });

    mopidy.on("state:online", function () {
        resolve();
    });

    mopidy.on(eventSupervisor);

    mopidy.connect();
  });
};

function eventSupervisor(event, data){
  console.log(JSON.stringify(event));
  let cache = [];
  let objString = JSON.stringify(data, function(key, value) {
      if (typeof value === 'object' && value !== null) {
          if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
          }
          // Store value in our collection
          cache.push(value);
      }
      return value;
  });
  cache = null;
  console.log(JSON.stringify(objString));
  switch(event){
    case "event:trackPlaybackPaused":
        store.dispatch(MopidyActions.receiveTrackPosition(data.time_position));
      break;
    case "event:trackPlaybackResumed":
        store.dispatch(MopidyActions.receiveTrackPosition(data.time_position));
      break;
    case "event:trackPlaybackStarted":
        store.dispatch(MopidyActions.receiveCurrentTrack(data.tl_track.track));
        store.dispatch(MopidyActions.receiveTrackPosition(0));
      break;
    case "event:playbackStateChanged":
        store.dispatch(MopidyActions.receivePlaybackStatus(data.new_state));
      break;
    case "event:seeked":
        store.dispatch(MopidyActions.receiveTrackPosition(data.time_position));
    case "event:optionsChanged":
        store.dispatch(MopidyActions.getInitialState());
      break;
  }
}

export function getCurrentTrack() {
  return mopidy.playback.getCurrentTrack();
}

export function getImages(uris) {
  return mopidy.library.getImages({uris: uris});
}

export function getState() {
  return mopidy.playback.getState();
}

export function play() {
  mopidy.playback.play();
}

export function pause() {
  mopidy.playback.pause();
}

export function nextTrack() {
  mopidy.playback.next();
}

export function previousTrack() {
  mopidy.playback.previous();
}

export function getRandom() {
  return mopidy.tracklist.getRandom();
}

export function getRepeat() {
  return mopidy.tracklist.getRepeat();
}

export function setRandom(enabled) {
  mopidy.tracklist.setRandom({
    value: enabled
  });
}

export function setRepeat(enabled) {
  mopidy.tracklist.setRepeat({
    value: enabled
  });
}

export function getTimePosition() {
  return mopidy.playback.getTimePosition();
}
