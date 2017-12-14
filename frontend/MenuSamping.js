import React from 'react'
import { StyleSheet,  View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container,Button, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import Expo from "expo";

export default class MenuSamping extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
       
    };
  }


   
 async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }
  render() {

   if (!this.state.isReady) {
      return (<Expo.AppLoading />);
    }
    const { navigation } = this.props
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem icon>
              <Left/>
               
              <Body>
               <Button transparent dark onPress={() => navigation.navigate('page1')}>
                <Icon name='home' />
            <Text>Home</Text>
          </Button>
              </Body>
              <Right/>
               
            </ListItem>
            <ListItem icon>
              <Left/>
               
              
              <Body>
                <Button transparent dark>
               
            <Text>Tin Bất Động Sản</Text>
          </Button>
              </Body>
              <Right/>
                
            </ListItem>
            <ListItem icon>
              <Left/>
               
              
              <Body>
                <Button transparent dark>
               
            <Text>Tin Dự án</Text>
          </Button>
              </Body>
              <Right/>
                
            </ListItem>
             <ListItem icon>
              <Left/>
               
              
              <Body>
<Button transparent dark  onPress={() => navigation.navigate('page5')}>               
            <Text>Tin tức</Text>
          </Button>
              </Body>
              <Right/>
                
            </ListItem>
             <ListItem icon>
              <Left/>
               
              
              <Body>
                <Button transparent dark>
               
            <Text>Đăng tin</Text>
          </Button>
              </Body>
              <Right/>
                
            </ListItem>
            
             <ListItem icon>
              <Left/>
               
              
              <Body>
                <Button transparent dark  onPress={() => navigation.navigate('page2')}>
               
            <Text>Đăng nhập/Đăng ký</Text>
          </Button>
              </Body>
              <Right/>
                
            </ListItem>
          
             <ListItem icon>
              <Left/>
               
              
              <Body>
                <Button transparent dark>
               
            <Text>Thông tin ứng dụng</Text>
          </Button>
              </Body>
              <Right/>
                
            </ListItem>
            <ListItem icon>
              <Left/>
               
              
              <Body>
                <Button transparent dark>
               
            <Text>Điều khoản dịch vụ</Text>
          </Button>
              </Body>
              <Right/>
                
            </ListItem>
<ListItem icon>
              <Left/>
               
              
              <Body>
                <Button transparent dark>
               
            <Text>Thoát ứng dụng</Text>
          </Button>
              </Body>
              <Right/>
                
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  }
})
