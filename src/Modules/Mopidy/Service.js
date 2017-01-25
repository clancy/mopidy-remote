import Mopidy from 'mopidy'

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
    mopidy.connect();
  });
};

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
