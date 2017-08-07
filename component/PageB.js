import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


class PageB extends React.Component {
  render() {
    return (
      <View>
        <Text>PageB</Text>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

const PageBScreen = ({ navigation }) => (
  <PageB banner="PageB Tab" navigation={navigation} />
);

export default PageBScreen
