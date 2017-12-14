import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, ListView,
    Image, RefreshControl,ScrollView,
} from 'react-native';
import { Container,ListItem,List,Item,Input, Header,Button, Title, Content, Footer, FooterTab, Left, Right, Body, Icon,Form, Item as FormItem} from 'native-base';

export default class listnews extends Component {
    /* static navigationOptions = {
    tabBarLabel: 'Tin tức nổi bật',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    
  };*/
  static navigationOptions = ({navigation})=>({
    title:"BatDongSan.vn",
    headerLeft: <Button transparent onPress={()=> {navigation.navigate('DrawerOpen')}}>
              <Icon name='menu' />
            </Button>,
    headerBackTitle:null,
    tabBarLabel: 'Tin tức nổi bật',
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{
            images:'http://news.landber.com/uploads/images/co-dat-than-troi-voi-quy-dinh-cam-tach-thua.jpg',
            name:' Cò đất than trời với nhiều trường hợp cấm tách thửa',
           
            page:'page7',
         },
         {
            images:'http://news.landber.com/uploads/images/nha-rieng-dat-tho-cu-duoc-tim-kiem-nhieu-nhat-nam2017.jpg',
            name:'Năm 2017: Bất động sản nhà riêng, đất thổ cư có lượt tìm kiếm cao nhất',
            
            page:'page8',

         },
        {
            images:'http://news.landber.com/uploads/images/han-che-rui-ro-khi-gon-von-mua-dat.jpg',
            name:'Những cách hạn chế mất tiền tỷ khi góp vốn mua bất động sản',
           
             page:'page9',

         },
        {
            images:'http://news.landber.com/uploads/images/ton-kho-bds-giam-80-sau-gan-5-nam.jpg',
            name:'Sau 5 năm lượng tồn kho bất động sản đã giảm 80%',
          
        page:'page10',

         },
          {
            images:'http://news.landber.com/uploads/images/co-dat-than-troi-voi-quy-dinh-cam-tach-thua.jpg',
            name:' Cò đất than trời với nhiều trường hợp cấm tách thửa',
           
            page:'page7',
         },
         {
            images:'http://news.landber.com/uploads/images/nha-rieng-dat-tho-cu-duoc-tim-kiem-nhieu-nhat-nam2017.jpg',
            name:'Năm 2017: Bất động sản nhà riêng, đất thổ cư có lượt tìm kiếm cao nhất',
            
            page:'page8',

         },
        {
            images:'http://news.landber.com/uploads/images/han-che-rui-ro-khi-gon-von-mua-dat.jpg',
            name:'Những cách hạn chế mất tiền tỷ khi góp vốn mua bất động sản',
           
             page:'page9',

         }
      ]),
    };
  }

  render() {
     let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
        const { navigation } = this.props

    const {
            container, header, wrapper, backStyle, titleStyle,
            newsContainer, newsImage, newsInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
         } = styles;
        return (
            
                    
                  
               
    <ScrollView style={wrapper}
scrollTo={(x,y)=> ({x: 0, y:7 , animated: true})}

            >
                
        <ListView 
                       
                         ref={(listview) => {
                           this.listview = listview;
                             }}
                        dataSource={this.state.dataSource}
                        renderRow={news => (
                            <View style={newsContainer}>
                                <Image style={newsImage}  source={{ uri: news.images }} />
                                <View style={newsInfo}>
                                    <Text style={txtName}>{news.name}</Text>
                                    <View style={lastRowInfo}>
                                        
                                        <TouchableOpacity onPress={() => navigation.navigate(news.page)} >
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                       
                    />
    
     
            </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    newsContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
      //  fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    newsImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    newsInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
       // fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 18,
        fontWeight: '400'
    },
    txtPrice: {
     //   fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
      //  fontFamily: 'Avenir'
    },
    txtColor: {
       // fontFamily: 'Avenir'
    },
    txtShowDetail: {
       // fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});

