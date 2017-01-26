import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
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
    repeat: PropTypes.bool.isRequired,
    playPause: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name='shuffle' size={25} style={iconStyle(this.props.shuffle)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.previous} >
          <Icon name='skip-previous' size={35} style={iconStyle()} />
        </TouchableOpacity>
        <View style={styles.playIconContainer}>
          <TouchableOpacity
            onPress={this.props.playPause} >
            <Icon name={playIconName(this.props.paused)} size={50} style={styles.playIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.props.next}>
          <Icon name='skip-next' size={35} style={iconStyle()}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='repeat' size={25} style={iconStyle(this.props.repeat)}/>
        </TouchableOpacity>
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
