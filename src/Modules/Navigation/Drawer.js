import { DrawerNavigator, StackNavigator, DrawerView } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import React from 'react';

const Drawer = props => (
  <View style={styles.container}>
    <DrawerView.Items {...props} />
  </View>
);

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
