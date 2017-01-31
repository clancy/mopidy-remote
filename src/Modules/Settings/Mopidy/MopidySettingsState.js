import {Map} from 'immutable';

// Initial state
const initialState = Map({
  value: 0
});

// Reducer
export default function MopidySettingsStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
