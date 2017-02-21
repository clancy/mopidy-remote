import React, { Component } from 'react';
import { View, StyleSheet, WebView } from 'react-native';
import Url from 'url-parse';
import * as SpotifyActions from '../../Spotify/Actions'

class SpotifyLoginView extends Component {

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    let url = Url(event.url, true);
    if(url.query && url.query.access_token && url.query.refresh_token){
      this.props.dispatch(SpotifyActions.connected(url.query.access_token, url.query.refresh_token));
      this.props.navigator.pop();
    }
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.container}
          source={{uri: 'http://thawing-basin-74614.herokuapp.com/login'}}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webView: {
    flex: 1
  }
});

export default SpotifyLoginView;
