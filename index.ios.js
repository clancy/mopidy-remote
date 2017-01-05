import React from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Router } from './src/Modules/Navigation/Router'
import DrawerNavigationLayout from './src/Modules/Navigation/DrawerNavigationLayout'
import { NavigationProvider } from '@exponent/ex-navigation';

class MopidyRemote extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <DrawerNavigationLayout />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('MopidyRemote', () => MopidyRemote);
