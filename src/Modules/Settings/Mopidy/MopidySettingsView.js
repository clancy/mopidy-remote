import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const MopidySettingsView = (props) => (
  <View style={styles.container}>
    <View style={styles.settingRow}>
      <Text style={styles.text}>Host Name</Text>
      <TextInput style={styles.textInput} />
    </View>
    <View style={styles.settingRow}>
      <Text style={styles.text}>Port</Text>
      <TextInput style={styles.textInput} />
    </View>
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONNECT</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  settingRow: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
  text: {
    color: 'white',
    width: 80
  },
  textInput: {
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
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

export default MopidySettingsView;
