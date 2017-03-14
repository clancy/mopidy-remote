import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default withNavigationHeader = (WrappedComponent, title, iconName) => {
  class WithNavigationHeader extends React.Component {
    static navigationOptions = {
        title: title,
        drawer: {
          icon: ({ tintColor }) => (
            <Icon
              name={iconName}
              size={25}
              style={{color: tintColor}}
            />
          ),
        },
        header: ({ navigate }) => ({
            left: <TouchableOpacity onPress={() => {navigate("DrawerOpen")}}><Icon style={ styles.icon } name="menu" size={25} /></TouchableOpacity>,
            style: styles.header,
            titleStyle: styles.title
        })
    };
    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }
  return WithNavigationHeader;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black'
  },
  title: {
    color: 'white'
  },
  icon: {
    padding: 5,
    color: 'white'
  }
});
