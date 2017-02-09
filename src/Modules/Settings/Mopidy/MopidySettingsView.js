import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import FormRow from './FormRow'
import * as MopidyActions from '../../Mopidy/Actions'

export default class MopidySettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostname: props.hostname,
      port: props.port
    };
  };
  static propTypes = {
    hostname: PropTypes.string,
    port: PropTypes.string
  };
  connect = () => {
    var hostname = this.state.hostname;
    var port = this.state.port;
    //TODO validate hostname and port
    this.props.dispatch(MopidyActions.connect(hostname, port));
  };
  render() {
    return (
      <View style={styles.container}>
        <FormRow
          label="Host Name"
          value={this.state.hostname}
          onChangeText={(hostname) => this.setState({hostname})} />
        <FormRow
          label="Port"
          value={this.state.port}
          onChangeText={(port) => this.setState({port})} />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.connect}>
            <Text style={styles.buttonText}>CONNECT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  buttonRow: {
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 20,
    flex: .3
  },
});
