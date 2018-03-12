import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Image,
    BackHandler,
    ToastAndroid,
    Icon,
    StatusBar,
} from 'react-native';
import {connect } from 'react-redux'
//import 导入 ES6写法
class HomePage extends React.Component {
    static navigationOptions = {
        title:'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
            source={require('../imgs/left.png')}
            style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    open(){
        this.props.navigation.navigate('Main');
    }
    componentDidMount(){
        
    }
    openDraw(){
        this.props.navigation.navigate('DrawerToggle');
    }
    render() {
      return (
            <View style={styles.content}>
                <TouchableOpacity onPress={this.openDraw.bind(this)}>
                    <Text style={styles.text}>打开抽屉</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.open.bind(this)}>
                    <Text style={styles.text}>HomePage</Text>
                </TouchableOpacity>
            </View>
      );
    }
  }
  
//这个函数是把数据中心的数据绑定到当前构造类（也称作组件）上
function mapStateToProps(state) {
    return {
        login:state.login,
        nav:state.nav,
    }
}
//connect是将当前的构建的类，连接到数据中心（可以去查一下react-redux,用dispatch把action(行为)连接到reducer(处理),返回行为处理结果）
export default connect(mapStateToProps)(HomePage);
//export default 默认导出，然后再其他页面中用import导入

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    content:{
        flex:1,//react-native 用的是flex-Box布局，在网上查一下就知道了
        width:width,//width是获取手机屏幕的宽度
        height:height,//height是获取手机屏幕的高度
        alignItems:'center',//
        justifyContent:'center',
    },
    text:{
        fontSize:20,
        color:'#000',
    },
    icon: {
        width: 24,
        height: 24,
      },
});