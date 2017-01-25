import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Router } from './Router';

export default class DrawerNavigationLayout extends Component {

  _renderHeader = () => {
    return (
      <View style={{height: 180, width: 300}}>
      </View>
    );
  };

  _renderTitle = (text: string, isSelected: bool) => {
    return (
      <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
        {text}
      </Text>
    );
  };

  _renderIcon = (name: string, isSelected: bool) => {
    return (
      <Icon
        name={name}
        size={24}
      />
    );
  };

  render() {
    return (
      <DrawerNavigation
        drawerPosition="left"
        renderHeader={this._renderHeader}
        drawerWidth={300}
        initialItem="currentTrack">
        <DrawerNavigationItem
          id="home"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Home', isSelected)}
          renderIcon={isSelected => this._renderIcon('bath', isSelected)}>
          <StackNavigation
            id="root"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#0084FF',
                tintColor: '#fff',
                title: 'Home'
              },
            }}
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="currentTrack"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Current Track', isSelected)}
          renderIcon={isSelected => this._renderIcon('telegram', isSelected)}>
          <StackNavigation
            id="root"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: 'black',
                tintColor: 'white',
                title: 'Current Track'
              },
            }}
            initialRoute={Router.getRoute('currentTrack')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 180,
    width: null,
    resizeMode: 'cover',
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  icon: {
    color: '#999',
  },
  selectedText: {
    color: '#0084FF',
  },
  selectedItemStyle: {
    backgroundColor: "#E8E8E8",
  },
});
