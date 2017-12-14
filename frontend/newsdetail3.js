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
      uri: 'http://news.landber.com/uploads/images/ton-kho-bds-giam-80-sau-gan-5-nam.jpg'
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
                                <Text style={textBlack}>Sau 5 năm lượng tồn kho bất động sản đã giảm 80%</Text>
                              
                            </Text>
                        </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={pic} style={newsImageStyle} />
                 <Image source={pic} style={newsImageStyle} />

                        </ScrollView>
                    </View>

                    
                       
                        <View style={descContainer}>
                            <Text style={descStyle}>Tồn kho bất động sản giảm 80% sau gần 5 năm

Đây là thông tin do Phó Cục Trưởng quản lí nhà và thị trường bất động sản, Bộ xây dựng, ông Nguyễn Mạnh Khởi đưa ra tại hội thảo “ Nhận điện cơ hội vfa rủi ro thị trường bất động sản năm 2018” tổ chức vào ngày 8/12/17.

Theo ông Khởi cho hay lượng tồn kho bất động sản chính là điểm sáng đầu tiên có thể nhìn thấy trên thị trường bất động sản năm 2017, lượng tồn kho đang trên đà giảm dần. Tính đến ngày 20/11/2017 lượng tồn kho bất động sản đã giảm chỉ còn 25.700 tỷ đồng. So với con số 102.800 tỷ đồng ở trong quý 1 năm 2013, thì hàng tồn kho trong lĩnh vực này đã giảm đến 80%. So với tháng 12/2016 thì đã giảm 5.300 tỷ đồng, tức hơn 17%.

Trong khi đó, chuyên gia bất động sản Trần Khánh Quang cũng nhận định, hàng tồn kho bất động sản có giảm nhưng giảm bao nhiêu thì rất khó để đong đếm được. Việc có thể đưa ra con số cụ thể về số lượng tồn kho giảm mấy ngày tỷ đồng chỉ theo cảm tính mà chưa có căn cứ gì. Hiện nay chỉ có thể tính được là hàng tồn kho giảm được bao nhiêu căn hộ, bao nhiêu dự án mà thôi.
Còn theo Hiệp hội bất động sản TP Hồ Chí Minh ( HoREA), hàng tồn kho của thị trường bất động sản là bao nhiêu thì khó có thể thống kê được. Trong báo cáo 10 tháng của HoREA cũng không đề cập đến vấn đề này. Báo cáo của sở xây dựng thành phố Hồ Chí Minh cũng không có nhiều số liệu về hàng tồn kho bất động sản.
Xem thêm:
Hà Nội hoàn tất giải phóng mặt bằng 3 dự án trọng điểm của huyện Đông Anh
Dự báo năm 2018 thị trường bất động sản sẽ đi vào chu kì suy giảm
 
Nhìn lại năm 2013, đại diện của HoREA nói rằng trên thị trường xuất hiện hai vấn nạn rất lớn, đó là hàng tồn kho và nợ xấu. Theo thông kế của Ngân hàng nhà nước thì nợ xấu trong bất động sản là 28.000 tỷ đồng, chiếm đến 13,5% tổng dư nợ của bất động sản. Riêng ở TP Hồ Chí Minh, nợ xấu là 4.125 tỷ đồng, chiếm vào khoảng 6,27% hàng tồn kho bất động sản và có đến 14.000 căn hộ đang không bán được trên thị trường. Tuy nhiên con số thông kê này vẫn chưa đầy đủ vì mới chỉ tính trên 36 trong số 1.283 dự án bất động sản ở Hồ Chí Minh.
Vị đại diện này cũng chia sẻ: “ Vẫn còn phần chìm của tảng băng hàng tồn kho có thể chưa được thống kê. Chưa kể đến việc hàng tồn kho đang nằm trong các dự án là tài sản đảm bảo cho các khoản nợ xấu ngân hàng đang được xử lí và có thể là đang nằm trong khoảng 280 dự án bất động sản bị ngừng triển khai ở Hồ Chí Minh.”
</Text>
                            
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
