import React, { Component } from 'react'
import {
  ScrollView,
  WebView,
  Text,
  View
} from 'react-native'
import { Header, Body, Left, Right, Title, Button, Icon, Container, Content, Spinner } from 'native-base'

export default class ArticleDetail extends Component {

  onGoBack () {
    this.props.onGoBack()
  }
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.onGoBack.bind(this)}>
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
        <Text>detail </Text>
      </Container>
    )
  }
}
