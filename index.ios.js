import 'rxjs/Rx';
import React from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Router from './src/Modules/Navigation/Router'
import DrawerNavigationLayout from './src/Modules/Navigation/DrawerNavigationLayout'
import { NavigationProvider } from '@exponent/ex-navigation';

class MopidyRemote extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <DrawerNavigationLayout />
      </NavigationProvider>
    </Provider>
    );
  }
}

AppRegistry.registerComponent('MopidyRemote', () => MopidyRemote);
