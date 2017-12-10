import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

import { Container,Button, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

 export default class MenuSamping extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem icon>
              <Left/>
               
              <Body>
               <Button transparent dark>
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
                <Button transparent dark>
               
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
                <Button transparent dark  onPress={()=>{this.props.navigation.navigate('LoginHome');}}>
               
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
    );
  }
}