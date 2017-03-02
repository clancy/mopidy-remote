import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 12,
    fontSize: 16,
  }
});

const SettingsRow = (props) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={props.onPress} >
      <Text style={styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>

  </View>
);

export default SettingsRow;
