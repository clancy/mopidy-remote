import Mopidy from 'mopidy';
import store from '../../redux/store';
import * as MopidyActions from './Actions';
var mopidy = null;

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
  var cache = [];
  var objString = JSON.stringify(data, function(key, value) {
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
        store.dispatch(MopidyActions.receivePlaybackStatus("paused"));
      break;
    case "event:trackPlaybackResumed":
        store.dispatch(MopidyActions.receiveTrackPosition(data.time_position));
        store.dispatch(MopidyActions.receivePlaybackStatus("playing"));
      break;
    case "event:trackPlaybackStarted":
        store.dispatch(MopidyActions.receiveTrackPosition(0));
        store.dispatch(MopidyActions.receiveCurrentTrack(data.tl_track.track));
      break;
    case "event:seeked":
        store.dispatch(MopidyActions.receiveTrackPosition(data.time_position));
      break;
  }
}

export function getCurrentTrack() {
  var a = mopidy.playback.getCurrentTrack();
  return a;
}

export function getState() {
  var a =  mopidy.playback.getState();
  return a;
}

export function getRandom() {
  var a =  mopidy.tracklist.getRandom();
  return a;
}

export function getRepeat() {
  var a =  mopidy.tracklist.getRepeat();
  return a;
}

export function getTimePosition() {
  var a =  mopidy.playback.getTimePosition();
  return a;
}
