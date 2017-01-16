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
  return mopidy.playback.getCurrentTrack();
}
