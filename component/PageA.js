import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

class PageA extends React.Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
}

const PageAScreen = ({ navigation }) => (
  <PageA banner='Home Tab' navigation={navigation} />
)

export default PageAScreen
