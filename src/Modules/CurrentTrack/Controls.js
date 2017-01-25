import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const playIconName = paused => paused ? 'play-arrow' : 'pause';
const iconStyle = enabled => {
  return {
      marginLeft: 10,
      marginRight: 10,
      'color' : enabled ? 'green' : 'white'
  };
};

export default Controls = React.createClass({
  propTypes: {
    paused: PropTypes.bool.isRequired,
    shuffle: PropTypes.bool.isRequired,
    repeat: PropTypes.bool.isRequired
  },
  render() {
    return (
      <View style={styles.container}>
        <Icon name='shuffle' size={25} style={iconStyle(this.props.shuffle)} />
        <Icon name='skip-previous' size={35} style={iconStyle()} />
        <View style={styles.playIconContainer}>
          <Icon name={playIconName(this.props.paused)} size={50} style={styles.playIcon} />
        </View>
        <Icon name='skip-next' size={35} style={iconStyle()}/>
        <Icon name='repeat' size={25} style={iconStyle(this.props.repeat)}/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playIcon: {
    color: 'white',
    backgroundColor: 'black',
    backgroundColor: 'transparent'
  },
  playIconContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 35,
    width: 70,
    height: 70,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
