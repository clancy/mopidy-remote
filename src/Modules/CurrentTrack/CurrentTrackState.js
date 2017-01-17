import { Map, Set } from 'immutable';
import Rx from 'rxjs/Rx'

// Initial state
const initialState = Map({
  "track": Map({
    "album": Map({
      "date": "1993",
      "__model__": "Album",
      "artists": Set([
        Map({
          "__model__": "Artist",
          "name": "Archie Roach",
          "uri": "spotify:artist:4LtYxILg8YPMwQjKnXb5kh"
        })
      ]),
      "name": "Jamu Dreaming",
      "uri": "spotify:album:3ZCGkZVimHRuLTXYbkLPV5"
    }),
    "__model__": "Track",
    "name": "Weeping In The Forest",
    "disc_no": 1,
    "uri": "spotify:track:3wnuSCfPwKj42YPPpnQqOk",
    "length": 292000,
    "track_no": 1,
    "artists": Set([
      Map({
        "__model__": "Artist",
        "name": "Archie Roach",
        "uri": "spotify:artist:4LtYxILg8YPMwQjKnXb5kh"
      })
    ]),
    "date": "1993",
    "bitrate": 160
  }),
  "__model__": "TlTrack",
  "tlid": 12
});

export default function CurrentTrackStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
