import 'rxjs/Rx';
import React from 'react';
import { AppRegistry, View, StatusBar, StyleSheet } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppWithNavigationState from './src/Modules/Navigation/AppWithNavigationState'

class MopidyRemote extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('MopidyRemote', () => MopidyRemote);
