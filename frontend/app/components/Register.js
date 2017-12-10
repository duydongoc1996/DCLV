import React, { Component } from 'react';
import { Container, Button,Header,Text, Content, Form, Item, Input } from 'native-base';
export default class Register extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item regular>
            <Input placeholder='UserName' />
          </Item>
           <Item regular>
            <Input placeholder='PassWord' />
          </Item>
           <Item regular>
            <Input placeholder='Email' />
          </Item>
           <Item regular>
            <Input placeholder='Phone' />
          </Item>
           <Item regular last>
            <Input placeholder='Address' />
          </Item>
            <Button block >
            <Text>Sign In</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}