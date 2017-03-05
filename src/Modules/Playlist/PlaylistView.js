import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class PlaylistView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from PlaylistView</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PlaylistView;
