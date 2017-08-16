import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { StackNavigator } from 'react-navigation'
import ArticleDetail from './Detail'

class PageA extends React.Component {
  onLinkDetail (text) {
    this.props.onLinkDetail(text)
  }
  render () {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Button
          onPress={this.onLinkDetail.bind(this)}
        >
          <Text>Click Me! </Text>
        </Button>
      </Container>
    )
  }
}

const PageAboard = ({ navigation }) => (
  <PageA
    onLinkDetail={(text) => navigation.navigate('Detail')}
  />
)

const MyProfileScreen = ({ navigation }) => (
  <ArticleDetail
    navigation={navigation}
    onGoBack={() => navigation.goBack(null)}
  />
)

const PageAScreen = StackNavigator({
  Root: {
    screen: PageAboard
  },
  Detail: {
    screen: MyProfileScreen,
    navigationOptions: {
      title: 'Detail'
    }
  }
}, {headerMode: 'none'})

export default PageAScreen
