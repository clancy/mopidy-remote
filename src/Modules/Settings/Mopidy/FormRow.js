import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const FormRow = (props) => (
  <View style={styles.settingRow}>
    <Text style={styles.text}>{props.label}</Text>
    <TextInput
      style={styles.textInput}
      onChangeText={props.onChangeText}
      value={props.value} />
  </View>
);

const styles = StyleSheet.create({
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
  }
})

export default FormRow;
