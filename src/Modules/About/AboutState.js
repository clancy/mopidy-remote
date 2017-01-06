import {Map} from 'immutable';

// Initial state
const initialState = Map({
  isPinging: false
});

const PING = 'AboutState/PING';
const PONG = 'AboutState/PONG';

export function ping(user) {
  return {
    type: PING
  };
}

export const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

export default function AboutStateReducer(state = initialState, action) {
  switch (action.type) {
    case PING:
      return state.update('isPinging', v => true);

    case PONG:
      return state.update('isPinging', v => false);

    default:
      return state;
  }
}
