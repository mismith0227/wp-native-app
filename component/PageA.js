import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


class PageA extends React.Component {
  render() {
    return (
      <View>
        <Text>PageA</Text>
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

const PageAScreen = ({ navigation }) => (
  <PageA banner="Home Tab" navigation={navigation} />
);

export default PageAScreen
