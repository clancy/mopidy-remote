import { connect } from 'react-redux';
import { StatusBar } from 'react-native'
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './AppNavigator'
import React from 'react'

const AppWithNavigationState = connect(state => ({
  nav: state.nav,
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}>
    <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />
  </AppNavigator>
));

export default AppWithNavigationState;
