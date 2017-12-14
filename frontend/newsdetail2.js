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
                                <Text style={textBlack}>Những cách hạn chế mất tiền tỷ khi góp vốn mua bất động sản</Text>
                              
                            </Text>
                        </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={pic} style={newsImageStyle} />
                 <Image source={pic} style={newsImageStyle} />

                        </ScrollView>
                    </View>

                    
                       
                        <View style={descContainer}>
                            <Text style={descStyle}>5 cách hạn chế mất tiền tỷ khi mua đất qua hợp đồng góp vốn

Gần đây, trong các vụ tranh chấp đất đai vùng nổ rầm rộ, nhưng trường hợp bên mua hứng chịu những rủi ro, thậm chí mất cả tiền tỷ chủ yếu rơi vào các nhóm hợp đồng góp vốn, hợp tác đầu tư hay thực hiện thảo thuận đầu tư vào bất động sản.
Sau khi quan sát các vụ mất tiền và chôn tiền vốn hàng thập niên vì những loại hợp đồng tiềm ẩn nhiều rủi ro này, Tổng giám đốc Công ty CP Tư vấn Đầu Tư Phú Vinh, Phan Công Chánh đã cho biết, nếu xét về bản chất thì các loại hợp đồng góp vốn, hay thỏa thuận hợp tác đầu tư thì đều là hình thức huy động vốn.

Theo chuyên gia Phan Công Chánh đánh giá, vị thế của người mua đất thông qua các hợp đồng góp vốn thoạt đầu có vẻ ngang hàng với chủ đầu tư đều là góp tiền đầu tư. Nhưng trên thực tế, quyền lợi của khách trong bản hợp đồng này thường rất hạn chế và không được đảm bảo nhiều lợi ích.

Ông Chánh cũng đã phân tích thêm, mấu chốt của vấn đề còn tồn đọng là hợp đồng góp vốn, hợp tác đầu tư hay thỏa thuận đầu tư không được coi là hợp đồng mua bán. Sản phẩm cuối cùng khách hàng nhận được trong các hợp đồng này thường không hoàn chỉnh và phụ thuộc lớn vào việc chờ thời cơ trên thị trường, chính sách hay pháp lí có thay đổi.
Với những cam kết bồi thường vốn chỉ ở mức tượng trưng và hoàn vốn, thậm trí không có mức bồi thường cụ thể. Nhằm giúp khách hàng bảo vệ quyền lợi của mình, ông Chánh đã đưa ra khuyến cáo về loại hợp đồng góp vốn này.
Xem thêm:
 
Sau 5 năm lượng tồn kho bất động sản đã giảm 80%
Thị trường bất động sản tiếp tục ổn định nhưng có dấu hiệu đầu cơ
Đừng góp vốn vào đất pháp lí tồn tại nhiều bất ổn

Trước khi đặt bút kí hợp đồng, khách hàng có quyền yêu cầu hồ sơ pháp lí liên quan đến dự án. Bên mua nên dành nhiều thời gian để tìm hiểu cũng như lắng nghe hay chất vấn nhà đầu tư về những khía cạnh sản phẩm, các bước tiến hành thủ tục pháp lí. Điều quan trọng ở đây là chủ đầu tư phải đưa ra được tính minh bạch với tất cả tình huống mà có thể xảy ra.
Thười gian nhanh nhất hay chậm nhất để có thể hoàn thành pháp lia cũng chính là cơ sở để quyết định theo đuổi hay đứng ngoài đầu tư dự án. Mục đích của việc liệt kê những trình tự dự án có thể giúp khách hàng có lộ trình phù hợp để chuẩn bị dòng tiền trong thời gian góp vốn đầu tư.
Không kì vọng cao về lợi nhuận khủng

Trong khi kí hợp đồng, cần lưu ý theo nguyên tắc vàng khi đầu tư là lợi nhuận cao thường đi đôi với nhiều rủi ro. Hàng rẻ thì thường có những vấn đề hay những ẩn số gì đó mà ta còn chưa thực sự tìm ra. Vì vậy, thấy sản phẩm ngày càng hấp dẫn thì mức độ thận trọng khi đầu tư càng cao.
Lưu ý về điều khoản bồi thường

Khi góp vốn mua bán nhà đất, đầu tư dự án thì cam kết bồi thường không cao như những hợp đồng mua bán khác, đôi khi mang sự tương trưng, không có mức bồi thường nào thì khách hàng cần xem xét và đọc kĩ về điều khoản bồi thường và đề nghị với chủ đầu tư phải giải thích tường tận. Nếu nhận thấy có điểm nào bất thường thì hãy chủ động điều chỉnh, thậm chí là đàm phán mức bồi thường đầu tư hợp lí hơn.
Dự phòng với kế hoạch B

Với những hợp đồng góp vốn để mua bán nhà đất, bất động sản, nếu tin vào những kế hoạch A đầy xán lạn thì có thể dễ dàng bị thua lỗ nặng khi dự tính không thành. Do đó, khách hàng, nhà đầu tư cần dự phòng để có thêm kế hoạch B chủ động ứng phó đường lui khi mà điều kiện bất khả kháng xảy ra trong hợp đồng góp vốn. Khi chuẩn bị càng chu đáo trước những tình hướng thất bại thì chính là cách tốt nhất để có thể đảm bảo cho suất đầu tư bằng hợp đồng góp vốn này.
Ưu tiên kí với chủ đầu tư uy tín

Uy tín của nhà đầu tư được hiểu chính là mức độ nổi tiếng, tên tuổi và thương hiệu, lịch sử hình thành, phát triển của doanh nghiệp. Nếu như chủ đầu tư là một gương mặt mới, khách mua không nên bỏ qua những khâu tìm kiếm kĩ quá trình và hoạt động kinh doanh của nhà đầu tư, đơn vị mà mình cần hợp tác. Thông thường các đơn vị có tiền sử dính líu tới các vụ bê bối, tố cáo sẽ khó có thể tránh khỏi hoài nghi về chữ tín. Cần thận trọng hơn, khách hàng không nên bỏ qua tham vấn sự đánh giá khách quan của các chuyên gia đầu ngành trước khi đưa ra quyết định xuống tiền để tránh nhiều rủi ro ngoài ý muốn.
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
