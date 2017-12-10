import React, { Component } from 'react';
import {AppRegistry ,StyleSheet,
  TouchableOpacity,Text,Picker, TextInput,
} from 'react-native';
//import { Drawer } from 'native-base';
import Expo from "expo";

import SideBar from './MenuSamping1';
import { Container,Drawer,ListItem,List,Item,Input, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon,Form, Item as FormItem} from 'native-base';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
       
    };
  }
 closeDrawer(){
      this._drawer._root.close()
    }
    openDrawer () {
      this._drawer._root.open()
    }
  clearText = () => {
    this._textInput.setNativeProps({text: ''});
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
    
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=> this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{textAlign:'center'}} >BatDongsan.vn</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content>
        <Form >
          <Text style={{textAlign:'center',padding:20,fontSize:20}}>
          Ban muốn tìm gì?
          </Text>
         <TextInput
          ref={component => this._textInput = component}
          style={{height: 50, marginBottom:10, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
        />
 <TouchableOpacity
         style={styles.btn}
         
       >
         <Text> Tim Kiếm </Text>
       </TouchableOpacity>
    
       
      
  
              
         
     <List>
     <ListItem icon>
              <Left>
               <Text style={{padding:10,fontSize:15}}>
         Tìm kiếm nâng cao
          </Text>
              </Left>
              <Body/>
              <Right/>
                
            </ListItem>
     <ListItem icon>
              <Left>
                
            <Text style={{textAlign:'left',padding:10,fontSize:15}}>
         Loại Bất Động sản:
          </Text>
          </Left>
               
              
              <Body>
                <Picker
                      mode="dialog"
                      prompt="Loại Bất Động sản"
                      selectedValue={this.state.language}
                      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                      <Picker.Item label="Chung cư" value="Chung cư" />
                       <Picker.Item label="Văn phòng" value="Văn Phòng" />
                 </Picker>
              </Body>
              <Right/> 
            </ListItem>
  <ListItem icon>
              <Left>
                
           <Text style={{padding:10,fontSize:15}}>
        Tỉnh/Thành Phố:
          </Text>   
          </Left>
               
              
              <Body>
              <Picker
  mode="dialog"
  prompt="Tỉnh|thành Phố"
  selectedValue={this.state.language}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Hồ Chí Minh" value="Hồ Chí Minh" />
     <Picker.Item label="Hà Nội" value="js" />
     </Picker>
              </Body>
              
              
              <Right/>
                
            </ListItem>
<ListItem icon>
              <Left>
                
          <Text style={{padding:10,fontSize:15}}>
        Quận/Huyện:
          </Text>   
          </Left>
               
              
              <Body>
             <Picker
  mode="dialog"
  prompt="Quận|Huyện "

  selectedValue={this.state.language}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Thủ đức" value="Thủ đức" />
  <Picker.Item label="Quận 1" value="Quận 1" />
</Picker>
              </Body>
              
              
              <Right/>
                
            </ListItem>
            <ListItem icon>
              <Left>
                
           <Text style={{padding:10,fontSize:15}}>
        Mức Giá:
          </Text> 
          </Left>
               
              
              <Body>
              <Picker
              mode="dialog"
              prompt="Mức Giá "

             selectedValue={this.state.language}
             onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
             <Picker.Item label="Bất kỳ" value="Bất kỳ" />
             <Picker.Item label="Chưa Xác Định" value="Chưa xác định" />
             </Picker>
              </Body>
              
              
              <Right/>
                
            </ListItem>
            <ListItem icon>
              <Left>
                
          <Text style={{padding:10,fontSize:15}}>
        Diện tích:
          </Text> 
          </Left>
               
              
              <Body>
               <Picker
  mode="dialog"
  prompt="Diện tích "

  selectedValue={this.state.language}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>

   <Picker.Item label="Bất kỳ" value="Bất kỳ" />
  <Picker.Item label="Chưa Xác Định" value="Chưa xác định" />
</Picker>
              </Body>
              
              
              <Right/>
                
            </ListItem>
            <ListItem icon>
              <Left/>
                
           
          
               
              
              <Body>
               <Button transparent dark onPress={this.clearText}>
           
            <Text>Xóa tìm kiếm</Text>
          </Button> 
              </Body>
              
              
              <Right>
              <Button transparent dark onPress={this.clearText}>
           
            <Text>Tìm kiếm theo vị trí</Text>
          </Button> 
          </Right>
                
            </ListItem>

</List>


        

       

 
         
</Form>



          
           
        </Content>
      
      </Container>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  
  btn:{
alignSelf:'stretch',
backgroundColor:'#81c853',
padding:10,
alignItems:'center',
  }
})

