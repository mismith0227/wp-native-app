import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


class PageC extends React.Component {
  render() {
    return (
      <View>
        <Text>PageC</Text>
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

const PageCScreen = ({ navigation }) => (
  <PageC banner="PageB Tab" navigation={navigation} />
);

export default PageCScreen
