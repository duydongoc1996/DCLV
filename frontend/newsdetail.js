import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity 
} from 'react-native';

import Expo from "expo";

import { Container,ListItem,List,Item,Input, Header,Button, Title, Content, Footer, FooterTab, Left, Right, Body, Icon,Form, Item as FormItem} from 'native-base';

export default class newsdetail extends Component {
  // static navigationOptions = {
  //   tabBarLabel: 'Notifications',
  //   // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    
  // };
  static navigationOptions = ({navigation})=>({
    title:"BatDongSan.vn",
    
    tabBarLabel: 'Notifications',
  headerTintColor:'red',
  headerStyle: {
      backgroundColor:'#3399FF'
    },
    headerRight: <Button transparent>
              <Icon name="search" />
            </Button>

  });
    render() {
         let pic = {
      uri: 'http://news.landber.com/uploads/images/co-dat-than-troi-voi-quy-dinh-cam-tach-thua.jpg'
    };
        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, newsImageStyle, descStyle, txtMaterial, txtColor
        } = styles;
        return (

            <ScrollView style={wrapper}
scrollTo={(x,y)=> ({x: 0, y: 10, animated: true})}

            >

             <View style={cardStyle}>
                     <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>“ Cò đất” than trời với nhiều trường hợp cấm tách thửa</Text>
                              
                            </Text>
                        </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={pic} style={newsImageStyle} />
                 <Image source={pic} style={newsImageStyle} />

                        </ScrollView>
                    </View>

                    
                       
                        <View style={descContainer}>
                            <Text style={descStyle}>Các trường hợp cấm tách thửa đất

Theo quyết định 60/2017/QĐ-UND đã có quy định về 4 trường hợp không được tách thửa, cụ thể là ở Điều 4 của quyết định này.
Thứ nhất: Khu vực được bảo tồn đã được cơ quan nhà nước có thẩm quyền phê duyệt danh mục phải bảo tồn theo những quy định của pháp luật.
Thứ hai: bất động sản biệt thự thuộc sự sở hữu của nhà nước, biệt thự thuộc nhóm 1 và nhóm 2 theo quyết định tại Thông tư số 19/2016/TT-BXD.
Thứ ba: Các khu vực đang là biệt thự được tiếp tục quản lí theo quy hoạch; nhưng biệt thự nằm trong dự án đất quy hoạch; đất ở thuộc các dự án đã được nhà nước giao đất, cấp giấy chứng nhận cho từng khu đất nền theo quy hoạch chi tiết tỷ lệ 1/500 được duyệt; khu vực có quy hoạch chi tiết 1/500 đã được duyệt.
Với trường hợp này đã được các cơ quan nhà nước có thẩm quyền điều chỉnh thì việc tách thửa phải đảm bảo theo đúng quy định đã được điều chỉnh và thực hiện theo quyết định này.
Thứ tư: Nhà đất thuộc các khu vực đã có Thông báo thu hồi đất hoặc nằm trong diện có quyết định thu hồi đất của cơ quan nhà nước có thẩm quyền.
Xem thêm: 
TP. Hồ Chí Minh phê duyệt hệ số điều chỉnh giá đất cho hàng loạt dự án trọng điểm
Đề xuất đánh thuế theo số m2 thay vì theo căn nhà thứ hai
 
Đáng chú ý, trong quyết định về tách thửa với các loại đất, quy định tại điều 5 của quyết định 60/2017/QĐ-UBND, chỉ những khu vực đất thuộc quy hoạch đất dân cư hiện hữu hay dân cư hiện hữu chỉnh trang thì mới được cấp phép tách thửa. Riêng đối với những trường hợp khu đất thuộc quy hoạch đất ở xây dựng mới, đất sử dụng hỗn hợp và có trong kế hoạch để sử dụng đất hàng năm cấp huyện, để thu hồi thực hiện dự án thì không được phép tách thửa.
Trong thời gian 3 năm từ ngày tiến hành rà soát phê duyệt các quy hoạch này, mà chưa có những quy hoạch sử dụng đát hàng năm cấp huyện hay có trong kế hoạch để sử dụng đất hàng năm của cấp huyện ban hành hay có những thông báo về thu hồi đất, mà các cơ quan nhà nước có thẩm quyền không được điều chỉnh hay hủy bỏ nhưng không có công bố việc điều chỉnh, hủy bỏ kế hoạch sử dụng đất hàng năm cấp huyện thì sẽ được tách thửa.

Đối với giới đầu tư đất nền, Quyết định 60/2017/QĐ-UBND đã có nhiều điểm thoáng hơn so với Quyết định 33/2014/QĐ-UBND ban hành trước đó. Tuy nhiên, hiện nay, đất thuộc trong quy hoạch đất dân cư hiện hữu hay dân cư hiện hữu chỉnh trang đang không còn nhiều để tách thửa nữa. Phần lớn đất được giới đầu tư gom vào đang thuộc đất quy hoạch để xây dựng mới, nên phải chờ thời gian là 3 năm kể từ phê duyệt quy hoạch mới được phép xem có tách thửa hay không.</Text>
                            
                        </View>
                    
                </View>
            </ScrollView>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    newsStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
       // fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
       // fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
      //  fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF',
                justifyContent: 'space-between',

    },
    linkStyle: {
        color: '#7D59C8'
    },
    newsImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
       // fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
      //  fontFamily: 'Avenir'
    }
});
