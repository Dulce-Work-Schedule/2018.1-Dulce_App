import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const menuIcon = (<Icon name='md-menu' size={30} />);

class MenuButton extends React.Component {
  render() {
    return (
    <View style={styles.headerLeft}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
      >
        { menuIcon }
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = {
  headerLeft: {
    flexDirection: 'row'
  }
};

export default MenuButton;
