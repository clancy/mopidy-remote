import * as MopidyActions from '../../Modules/Mopidy/Actions'
import { Map } from 'immutable'

let socket = null;

const sendRpcJson = (socket, method, params) => {
  let jsonRpc = { jsonrpc: "2.0", id: method, method: method, params: params };
  socket.send(JSON.stringify(jsonRpc));
}

const onOpen = (ws,store,token) => evt => {
  //Send a handshake, or authenticate with remote end

  //Tell the store we're connected
  store.dispatch(MopidyActions.connected());
}

const onClose = (ws,store) => evt => {
  //Tell the store we've disconnected
  //store.dispatch(actions.disconnected());
}

const onMessage = (ws,store) => evt => {
  //Parse the JSON message received on the websocket
  let data = JSON.parse(evt.data);
  let event = data.event ? data.event : data.id;
  console.log(data);
  switch(event){
    case "track_playback_paused":
        store.dispatch(MopidyActions.receiveTrackPosition(data.time_position));
      break;
    case "track_playback_resumed":
        store.dispatch(MopidyActions.receiveTrackPosition(data.time_position));
      break;
    case "track_playback_started":
        store.dispatch(MopidyActions.receiveCurrentTlId(data.tl_track.tlid));
        store.dispatch(MopidyActions.receiveTrackPosition(0));
      break;
    case "playback_state_changed":
        store.dispatch(MopidyActions.receivePlaybackStatus(data.new_state));
      break;
    case "seeked":
        store.dispatch(MopidyActions.receiveTrackPosition(data.time_position));
    case "options_changed":
        store.dispatch(MopidyActions.getInitialState());
      break;
    case "tracklist_changed":
        store.dispatch(MopidyActions.getTlTracks());
      break;
    case "core.library.get_images":
        store.dispatch(MopidyActions.receiveAlbumArt(data.result));
        break;
    case "core.playback.get_current_tlid":
        store.dispatch(MopidyActions.receiveCurrentTlId(data.result));
        break;
    case "core.playback.get_state":
        store.dispatch(MopidyActions.receivePlaybackStatus(data.result));
        break;
    case "core.tracklist.get_repeat":
        store.dispatch(MopidyActions.receiveRepeatStatus(data.result));
        break;
    case "core.tracklist.get_random":
        store.dispatch(MopidyActions.receiveShuffleStatus(data.result));
        break;
    case "core.playback.get_time_position":
        store.dispatch(MopidyActions.receiveTrackPosition(data.result));
        break;
    case "core.tracklist.get_tl_tracks":
        store.dispatch(MopidyActions.receiveTlTracks(data.result));
        break;
  }
}

const mopidyMiddleware = store => next => action => {
  switch(action.type) {

    //The user wants us to connect
    case MopidyActions.MOPIDY_CONNECT:
      //Start a new connection to the server
      if(socket != null) {
        socket.close();
      }
      socket = new WebSocket(`ws://${action.payload.hostname}:${action.payload.port}/mopidy/ws/`);
      socket.onmessage = onMessage(socket,store);
      socket.onclose = onClose(socket,store);
      socket.onopen = onOpen(socket,store);
      break;

    case MopidyActions.MOPIDY_PLAY:
      sendRpcJson(socket, "core.playback.play");
      break;

    case MopidyActions.MOPIDY_PAUSE:
      sendRpcJson(socket, "core.playback.pause");
      break;

    case MopidyActions.MOPIDY_NEXT_TRACK:
      sendRpcJson(socket, "core.playback.next");
      break;

    case MopidyActions.MOPIDY_PREVIOUS_TRACK:
      sendRpcJson(socket, "core.playback.previous");
      break;

    case MopidyActions.MOPIDY_GET_ALBUM_ART:
      sendRpcJson(socket, "core.library.get_images", { uris: action.payload });
      break;

    case MopidyActions.MOPIDY_GET_CURRENT_TL_ID:
      sendRpcJson(socket, "core.playback.get_current_tlid");
      break;

    case MopidyActions.MOPIDY_GET_TL_TRACKS:
      sendRpcJson(socket, "core.tracklist.get_tl_tracks");
      break;

    case MopidyActions.MOPIDY_GET_PLAYBACK_STATUS:
      sendRpcJson(socket, "core.playback.get_state");
      break;

    case MopidyActions.MOPIDY_GET_REPEAT_STATUS:
      sendRpcJson(socket, "core.tracklist.get_repeat");
      break;

    case MopidyActions.MOPIDY_GET_SHUFFLE_STATUS:
      sendRpcJson(socket, "core.tracklist.get_random");
      break;

    case MopidyActions.MOPIDY_GET_TRACK_POSITION:
      sendRpcJson(socket, "core.playback.get_time_position");
      break;

    case MopidyActions.MOPIDY_REPEAT:
      sendRpcJson(socket, "core.tracklist.set_repeat", { value: action.payload });
      break;

    case MopidyActions.MOPIDY_SHUFFLE:
      sendRpcJson(socket, "core.tracklist.set_random", { value: action.payload });
      break;

  }

  return next(action);
}

export default mopidyMiddleware
