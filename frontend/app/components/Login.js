import React from 'react';
import { 
	StyleSheet,
	 Text, 
TextInput,
KeyboardAvoidingView,
TouchableOpacity,
AsyncStorage,
View ,
} from 'react-native';
import {Button, List, ListItem, Icon, Left, Body, Right } from 'native-base';

import {StackNavigator} from "react-navigation";

export default class Login extends React.Component {
  constructor(props){
  	super(props);
  	this.state={
  		username:'',
  		password:'',
  	}
  }
  componentDidMount(){
  	this._loadInitalState().done();
  }
  _loadInitalState=async()=>{
  	var value=await AsyncStorage.getItem('user');
  	if(value!=null){
  		this.props.navigation.navigate('Profile');
  	}
  }
  render() {
    return (
    	<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
    	<View style={styles.container}>
    	<Text style={styles.header}>- LOGIN -</Text>
    	<TextInput
    	   style={styles.textInput} placeholder='Username'
    	   onChangeText={(Username)=>this.setState({Username})}
    	   underlineColorAndroid='transparent'
    	   />
    	   <TextInput
    	   style={styles.textInput} placeholder='Password'
    	   onChangeText={(Password)=>this.setState({Password})}
    	   underlineColorAndroid='transparent'
    	   />
           <TouchableOpacity
           style={styles.btn}
           onPress={this.login}>
           <Text>Sign In </Text>
           </TouchableOpacity>
           <List>
            <ListItem icon>
              <Left/>
               
              
              <Body>
              <Text style={{fontSize:15}}> Do you have Account ? </Text>
              
              </Body>
              <Right>
                <Button transparent dark>
               
            <Text>Sign up </Text>
          </Button>
              </Right>
                
            </ListItem>
            </List>
      </View>
      </KeyboardAvoidingView>
    );
  }
  login=()=>
  {
  	alert('test');
  }
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
  	flex:1,
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor:'#2896d3',
  	paddingLeft:40,
  	paddingRight:40,

    
  },
  header:{
  	fontSize:24,
  	marginBottom:60,
  	color:'#fff',
  	fontWeight:'bold',

  },
  textInput:{
  	alignSelf:'stretch',
  	padding:10,
  	marginBottom:20,
  	backgroundColor:'#fff',

  },
  btn:{
alignSelf:'stretch',
backgroundColor:'#81c853',
padding:10,
alignItems:'center',
  }


});



