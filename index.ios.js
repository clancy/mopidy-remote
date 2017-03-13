import 'rxjs/Rx';
import React from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppWithNavigationState from './src/Modules/Navigation/AppWithNavigationState'

class MopidyRemote extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MopidyRemote', () => MopidyRemote);
