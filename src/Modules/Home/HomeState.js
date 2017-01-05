import {Map} from 'immutable';

// Initial state
const initialState = Map({
  value: 0
});

// Actions
const INCREMENT = 'HomeState/INCREMENT';
const DECREMENT = 'HomeState/DECREMENT';
const RESET = 'HomeState/RESET';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function reset() {
  return {type: RESET};
}

// Reducer
export default function HomeStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    case RESET:
      return initialState;

    default:
      return state;
  }
}
