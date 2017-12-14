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
      uri: 'http://news.landber.com/uploads/images/nha-rieng-dat-tho-cu-duoc-tim-kiem-nhieu-nhat-nam2017.jpg'
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
                                <Text style={textBlack}>Năm 2017: Bất động sản nhà riêng, đất thổ cư có lượt tìm kiếm cao nhất
</Text>
                              
                            </Text>
                        </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={pic} style={newsImageStyle} />
                 <Image source={pic} style={newsImageStyle} />

                        </ScrollView>
                    </View>

                    
                       
                        <View style={descContainer}>
                            <Text style={descStyle}>Bất động sản nhà riêng, thổ cư có lượt tìm kiếm cao nhất trong năm 2017

Theo báo cáo thị trường năm 2017 có thể cho thấy, trong khi phân khúc chung cư chỉ có trên 45 triệu lượt tìm kiếm, thì lĩnh vực nhà riêng và đất thổ cư lại có lượt tiềm kiếm cao nhất, lần lượt với tỷ lệ cụ thể như: 60 lượt cho nhà riêng, 50 lượt cho đất thổ cư.
Đây đều là những thông tin được Ông Nguyễn Quốc Anh, Phó tổng giám đốc tranh thông tin bất động sản cho biết ở trong hội thảo “ Thị trường bất động sản Việt Nam 2017-2018: Toàn cảnh và dự báo”.

Chia sẻ thêm về thông tin thị trường bất động sản năm 2017, ông Nguyễn Quốc Anh cũng cho biết thêm, lượng giao dịch nhà ở trên thị trường Hà Nội và Hồ Chí Minh nhiều nhất trong quý 2 với hơn 15.400 giao dịch thực hiện thành công, quý 1 là hơn 13.600 lượt giao dịch thành công.

Trên báo pháp luật cũng đã đưa thông tin, tại Hà Nội, người quan tâm đến loại hình chung cư chiếm tỷ trọng lớn nhất với 38%, nhà riêng 27%, đất thổ cư 19%, nhà mặt phố 6% và cuối cùng biệt thự, nhà liền kề 7%.
Còn đối với thành phố Hồ Chí Minh, đã có tỉ trọng người quan tâm đến bất động sản nhà riền là nhiều nhất với 37%, chung cư 23%, đất nền 17%, nhà phố 12% và đát nền là 8%.

Trong báo cáo của trang batdongsan.com.vn cũng hé lộ chút thông tin về lượng tiềm kiếm. Cụ thể nhóm từ 25-34 tuổi tìm kiếm bất động sản nhiều nhất chiếm đến 52%. Tiếp đến là độ tuổi 18-24 tuổi chiếm 24%, nhóm từ 35-44 tuổi chiếm 9%, từ 45-54 chiếm 7%, từ 55 đến 64 chiếm 6% ( Theo trang đầu tư tài chính Việt Nam – VietnamFinance cho biết)
Người quan tâm đến bất động sản là nam giới nhiều hơn nữ giới với tỷ lệ chệnh lệch không cao lắm 52:48.
Trên cả nước, TP Hồ Chí Minh có lượt người tìm kiếm thông tin bất động sản nhiều nhất với 48,3%, kế tiếp là Hà Nội với 27,2% còn ở Đà Nẵng là 4,2%.
Xem thêm:
TP. Hồ Chí Minh phê duyệt hệ số điều chỉnh giá đất cho hàng loạt dự án trọng điểm
Phân khúc đất nền nhà ở đang dẫn dầu về lượng tồn kho trên thị trường
 
Bên cạnh đó, theo báo cáo bất động sản năm 2017, khách nước ngoài cũng tiềm kiếm nhiều các sản phẩm căn hộ chung cư, biệt thự, liền kề ở các thành phố lớn nước ta.
Cụ thể: Địa bàn Hà Nội, phân khúc căn hộ chung cư được người Singapore tìm kiếm nhiều nhất 19%, tiếp theo là Mỹ 12%, Nhật Bản 12%, Úc 7%. Ở Hồ Chí Minh, dẫn đầu lượt tìm kiếm là Mỹ 26%, Singapore 21% Úc 7%, Anh 6% và cuối cùng là Đức 5%.
Đới với phân khức biệt thự, nhà liền kề, thị trường Hà Nội ghi nhận sự quan tâm nhiều từ nước Singapoer 21%, Mỹ 15%, Đức 12% và Úc 8%, Hàn Quốc 7%. Còn Hồ Chí Minh có sự quan tâm của Mỹ 37%, Singapore 18%, Úc 7% và Cannada 5%.</Text>
                            
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
