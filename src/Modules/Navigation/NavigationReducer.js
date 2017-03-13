import AppNavigator from './AppNavigator'

const NavigationReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default NavigationReducer;
