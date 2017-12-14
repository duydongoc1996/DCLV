import React, { Component } from 'react';
import {AppRegistry ,StyleSheet,
  TouchableOpacity,Text,Picker, TextInput
} from 'react-native';
//import { Drawer } from 'native-base';
import Expo from "expo";

import { Container,ListItem,List,Item,Input, Header,Button, Title, Content, Footer, FooterTab, Left, Right, Body, Icon,Form, Item as FormItem} from 'native-base';
export default class HomeScreen extends Component {
   static navigationOptions = ({navigation})=>({
    title:"Home",
    headerLeft: <Button transparent onPress={()=> {navigation.navigate('DrawerOpen')}}>
              <Icon name='menu' />
            </Button>,
    headerBackTitle:null,
    tabBarLabel:'Home',
  headerTintColor:'red',
  headerStyle: {
      backgroundColor:'#3399FF'
    },
    headerRight: <Button transparent>
              <Icon name="search" />
            </Button>

  });
  constructor() {
    super();
    this.state = {
      isReady: false
       
    };
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
const { navigation } = this.props
   if (!this.state.isReady) {
      return (<Expo.AppLoading />);
    }
    
    return (
      
      <Container>
        <Content>
         
                <Form >
         
         <TextInput
          ref={component => this._textInput = component}
          placeholder="Tìm Kiếm"
          style={{height: 50,padding:10, marginTop:30,marginBottom:20, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
        />
 <TouchableOpacity
         style={styles.btn}
         
       >
         <Text> Tim Kiếm </Text>
       </TouchableOpacity>
    
       
      
  
              
         
     <List>
     <ListItem icon>
              <Left/>
               
              
              <Body>
              <Button transparent dark onPress={()=> {navigation.navigate('page4')}}>
           
            <Text>Tìm kiếm Nâng cao</Text>
          </Button> 
          </Body>
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
    );
  }
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
   
  },
  btn:{
alignSelf:'stretch',
backgroundColor:'#81c853',
padding:10,
marginBottom:30,
alignItems:'center',
  }
})

