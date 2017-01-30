import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  }
});

const SectionHeader = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

export default SectionHeader;
